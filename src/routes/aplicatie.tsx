import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/aplicatie")({
  head: () => ({
    meta: [
      { title: "Aplicația Rampa · Acces în pregătire" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Aplicația Rampa pentru curse și CMR. Accesul la pilot nu este încă deschis.",
      },
    ],
  }),
  component: AppAccess,
});

function AppAccess() {
  return (
    <main className="legal-page">
      <Link to="/">← Rampa</Link>
      <p className="eyebrow">RAMPA / APLICAȚIE</p>
      <h1>Pregătim accesul la aplicație.</h1>
      <section lang="ro">
        <p>
          Aplicația pentru echipe va reuni cursele, clienții, flota și CMR-urile PDF într-un spațiu
          al firmei. Fiecare persoană va avea propriul cont și permisiuni.
        </p>
        <p>
          Accesul pentru clienți este închis până la finalizarea condițiilor pilotului,
          informațiilor despre operator și măsurilor de protecție a datelor. Site-ul public oferă
          momentan doar un exemplu cu date fictive; nu încărca documente sau date reale.
        </p>
        <p>
          <Link to="/" hash="example">
            Încearcă demonstrația
          </Link>
          {" · "}
          <Link to="/confidentialitate">Confidențialitate</Link>
        </p>
      </section>
      <section lang="en">
        <h2>The Rampa app is being prepared.</h2>
        <p>
          The team app will bring shipments, customers, fleet records and CMR PDFs into a company
          workspace. Each person will have an individual account and permissions. Customer access is
          closed while pilot terms, operator details and data-protection arrangements are completed.
          The public demo uses fictional data only.
        </p>
      </section>
    </main>
  );
}
