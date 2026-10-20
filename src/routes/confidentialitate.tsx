import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Confidențialitate · Rampa" },
      {
        name: "description",
        content: "Cum folosește Rampa datele trimise pentru o invitație în pilot.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="legal-page">
      <Link to="/">← Rampa</Link>
      <h1>Confidențialitate / Privacy</h1>
      <p>Actualizat / Updated: 20.10.2026</p>
      <section lang="ro">
        <h2>Cine primește cererea</h2>
        <p>
          Rampa este un proiect în dezvoltare pentru documentele flotelor de transport. Contact
          pentru proiect și datele din lista pilot:{" "}
          <a href="mailto:dahwa.adam.alexander@gmail.com">dahwa.adam.alexander@gmail.com</a>.
        </p>
        <h2>Ce colectăm și de ce</h2>
        <p>
          La înscriere primim numele firmei, emailul de contact, intervalul de mărime al flotei,
          limba formularului și acordul tău de a fi contactat despre pilot. Înregistrăm și data
          cererii și versiunea textului de acord. Folosim aceste date pentru a discuta fluxul de
          documente și a trimite o invitație când testarea este disponibilă. Înscrierea nu este un
          abonament comercial.
        </p>
        <h2>Unde sunt păstrate</h2>
        <p>
          Cererile se păstrează într-un spațiu privat Vercel Blob, în regiunea Frankfurt. Nu
          publicăm lista și nu păstrăm datele de contact în browserul tău. Administratorul
          proiectului poate accesa cererile. Furnizorul de găzduire poate prelucra date tehnice
          necesare operării și securității site-ului.
        </p>
        <h2>Ștergere și retragerea acordului</h2>
        <p>
          Lista este folosită pe durata pregătirii și recrutării pentru pilot; cererile care nu mai
          sunt necesare vor fi șterse de administrator la încheierea recrutării. Poți cere accesul,
          corectarea sau ștergerea cererii și poți retrage acordul de contact oricând, scriind de la
          emailul înscris la{" "}
          <a href="mailto:dahwa.adam.alexander@gmail.com?subject=Rampa%20-%20date%20personale">
            adresa proiectului
          </a>
          .
        </p>
        <h2>Demonstrația și preferințele</h2>
        <p>
          Exemplul folosește date fictive, iar editările se păstrează doar temporar în pagina
          deschisă. Nu trimite documente reale prin demonstrație. Preferința RO/EN poate fi salvată
          local în browser. Nu adăugăm cookie-uri de marketing sau instrumente de analiză a
          vizitatorilor. Fonturile sunt servite de acest site.
        </p>
      </section>
      <section lang="en">
        <h2>English</h2>
        <p>
          Rampa is a project in development. Contact:{" "}
          <a href="mailto:dahwa.adam.alexander@gmail.com">dahwa.adam.alexander@gmail.com</a>. A
          pilot request contains your company, contact email, fleet-size range, language, contact
          consent, submission date, and consent version. We use it to discuss your document workflow
          and invite you when testing is available. Registration creates no purchase commitment.
        </p>
        <p>
          Requests are stored in private Vercel Blob storage in Frankfurt, accessible to the project
          administrator. They are not published or stored in your browser. Hosting may process
          technical data needed to operate and secure the site. Requests no longer needed will be
          removed when pilot recruitment ends. Email us from your registered address to request
          access, correction, deletion, or withdrawal of contact consent.
        </p>
        <p>
          The demo uses fictional data; edits stay in the open page. Please do not enter real
          transport documents. The language preference may be stored locally. We do not add
          marketing cookies or visitor analytics. Fonts are served by this site.
        </p>
      </section>
    </main>
  );
}
