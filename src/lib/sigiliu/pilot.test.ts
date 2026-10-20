import assert from "node:assert/strict";
import { test } from "node:test";
import { handlePilotRequest, type PilotLead } from "./pilot.server.ts";

const valid = {
  company: "Atelier Test",
  email: " Dispatch@Example.com ",
  fleet: "5-15",
  consent: true,
  lang: "ro",
  website: "",
};
function request(data: unknown = valid, origin = "https://rampa-mea.vercel.app") {
  return new Request("https://rampa-mea.vercel.app/api/pilot", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(data),
  });
}

test("pilot success waits for durable storage and normalizes contact data", async () => {
  let saved: PilotLead | undefined;
  const response = await handlePilotRequest(request(), async (lead) => {
    saved = lead;
  });
  assert.equal(response.status, 201);
  assert.equal(saved?.email, "dispatch@example.com");
  assert.equal(saved?.company, "Atelier Test");
  assert.equal(saved?.consentVersion, "2026-10-20");
  assert.ok(saved?.id);
});

test("storage failure never shows a successful signup", async () => {
  const response = await handlePilotRequest(request(), async () => {
    throw new Error("storage unavailable");
  });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

test("invalid, unconsented, cross-origin and oversized requests cannot write", async () => {
  let writes = 0;
  const store = async () => {
    writes++;
  };
  for (const body of [
    { ...valid, email: "invalid" },
    { ...valid, consent: false },
    { ...valid, fleet: "anything" },
    { ...valid, company: "a" },
    { ...valid, company: "x".repeat(5000) },
  ]) {
    assert.ok((await handlePilotRequest(request(body), store)).status >= 400);
  }
  assert.equal(
    (await handlePilotRequest(request(valid, "https://another.example"), store)).status,
    403,
  );
  assert.equal(writes, 0);
});

test("honeypot returns quietly without saving a contact", async () => {
  const response = await handlePilotRequest(
    request({ ...valid, website: "spam.example" }),
    async () => {
      assert.fail("bot contact must not be saved");
    },
  );
  assert.equal(response.status, 202);
});
