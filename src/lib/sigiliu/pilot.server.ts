import { randomUUID } from "node:crypto";
import { put } from "@vercel/blob";
import { z } from "zod";

const schema = z.object({
  company: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email().max(254),
  fleet: z.enum(["1-4", "5-15", "16-30", "31-50", "50+"]),
  consent: z.literal(true),
  lang: z.enum(["ro", "en"]),
  website: z.string().max(200).optional(),
});

export type PilotLead = Omit<z.infer<typeof schema>, "website"> & {
  id: string;
  createdAt: string;
  consentVersion: string;
};

async function storePilot(lead: PilotLead) {
  await put(`pilot-requests/${lead.id}.json`, JSON.stringify(lead), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: false,
  });
}

function reply(status: number, ok: boolean) {
  return Response.json({ ok }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function handlePilotRequest(request: Request, store = storePilot): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) return reply(403, false);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply(415, false);
  if (Number(request.headers.get("content-length")) > 4096) return reply(413, false);
  const reader = request.body?.getReader();
  if (!reader) return reply(400, false);
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4096) {
        await reader.cancel();
        return reply(413, false);
      }
      chunks.push(value);
    }
    const result = schema.safeParse(JSON.parse(Buffer.concat(chunks).toString("utf8")));
    if (!result.success) return reply(400, false);
    if (result.data.website) return reply(202, true);
    const { website: _website, ...data } = result.data;
    await store({
      ...data,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      consentVersion: "2026-10-20",
    });
    return reply(201, true);
  } catch (error) {
    if (error instanceof SyntaxError) return reply(400, false);
    console.error("[pilot] storage_failed");
    return reply(503, false);
  }
}
