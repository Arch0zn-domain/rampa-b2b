import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { COMPANY, descriptions } from "@/lib/sigiliu/content";

export const Route = createFileRoute("/fisa")({
  head: () => ({
    meta: [
      { title: "Fișă pentru listări · Rampa" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Fisa,
});

function Fisa() {
  const [message, setMessage] = useState("");
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copiat.");
    } catch {
      setMessage("Selectează și copiază textul manual.");
    }
  }
  return (
    <main className="legal-page">
      <Link to="/">← Rampa</Link>
      <h1>Fișă pentru listări</h1>
      <p>
        Informații publice despre proiect. Cererile pilot sunt private și se accesează numai din
        spațiul de stocare al proiectului.
      </p>
      <p role="status">{message}</p>
      {[
        { label: "Company Name", text: COMPANY },
        { label: "Business Description", text: descriptions.en },
        { label: "Descriere (română)", text: descriptions.ro },
      ].map((item) => (
        <section key={item.label}>
          <h2>{item.label}</h2>
          <p>{item.text}</p>
          <button type="button" className="text-link" onClick={() => copy(item.text)}>
            Copiază ↗
          </button>
        </section>
      ))}
    </main>
  );
}
