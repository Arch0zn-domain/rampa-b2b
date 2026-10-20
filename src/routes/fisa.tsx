import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { COMPANY, descriptions } from "@/lib/sigiliu/content";
import { readLeads, type Lead } from "@/lib/sigiliu/leads";

export const Route = createFileRoute("/fisa")({ component: Fisa });

function Fisa() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setLeads(readLeads());
  }, []);

  async function copy(id: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
  }

  return (
    <main className="min-h-screen bg-asphalt px-5 py-12 text-paper">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm text-mist hover:text-paper">
          ← Sigiliu
        </Link>
        <h1 className="mt-6 text-4xl font-medium tracking-tight">Fișă pentru listări</h1>
        <p className="mt-3 leading-relaxed text-mist">
          Copiază câmpurile de mai jos în formularul cu Website, Company Name și Business Description.
          Site-ul public rămâne pentru patroni și dispeceri, nu pentru descrierea internă.
        </p>

        <section className="mt-10 space-y-6">
          <Block
            id="name"
            label="Company Name"
            text={COMPANY}
            copied={copied}
            onCopy={copy}
          />
          <Block
            id="en"
            label="Business Description"
            text={descriptions.en}
            copied={copied}
            onCopy={copy}
          />
          <Block
            id="ro"
            label="Descriere (română)"
            text={descriptions.ro}
            copied={copied}
            onCopy={copy}
          />
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-medium">Cereri salvate pe acest dispozitiv</h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Formularul de pe site păstrează cererea în browserul vizitatorului. Lista de aici arată doar
            ce s-a trimis din browserul în care ești acum.
          </p>
          {leads.length === 0 ? (
            <p className="mt-6 text-mist">Nicio cerere din acest browser.</p>
          ) : (
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {leads.map((lead) => (
                <li key={lead.id} className="py-4">
                  <p className="font-medium">
                    {lead.company} · {lead.fleet} camioane
                  </p>
                  <p className="mt-1 text-sm text-mist">
                    {lead.name}, {lead.role} · {lead.email}
                    {lead.phone ? ` · ${lead.phone}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-fog">
                    {lead.lane} · {lead.pain}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

function Block({
  id,
  label,
  text,
  copied,
  onCopy,
}: {
  id: string;
  label: string;
  text: string;
  copied: string;
  onCopy: (id: string, text: string) => void;
}) {
  return (
    <article className="rounded-card border border-line bg-panel p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm text-mist">{label}</h2>
        <button
          type="button"
          onClick={() => onCopy(id, text)}
          className="min-h-11 rounded-full bg-amber px-4 text-sm font-medium text-ink"
        >
          {copied === id ? "Copiat" : "Copiază"}
        </button>
      </div>
      <p className="mt-3 leading-relaxed text-paper">{text}</p>
    </article>
  );
}
