import { createFileRoute, Link } from "@tanstack/react-router";

const contact = "dahwa.adam.alexander@gmail.com";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Confidențialitate · Rampa" },
      {
        name: "description",
        content: "Datele folosite de demonstrația publică Rampa și cum ne contactezi.",
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
        <h2>Stadiul proiectului și contact</h2>
        <p>
          Rampa este un proiect în dezvoltare. Înscrierile în pilot și accesul pentru clienți sunt
          închise. Informațiile complete despre operatorul serviciului vor fi publicate înainte de
          deschiderea lor. Această pagină descrie demonstrația publică și cererile trimise anterior;
          nu reprezintă condiții pentru un serviciu comercial lansat. Contact pentru proiect și
          solicitări privind datele: <a href={`mailto:${contact}`}>{contact}</a>.
        </p>
        <h2>Demonstrația și preferințele</h2>
        <p>
          Exemplul folosește date fictive. Editările rămân temporar în pagina deschisă și nu sunt
          trimise către serverul Rampa prin demonstrație. Nu introduce documente sau date reale.
          Preferința de limbă RO/EN poate fi păstrată în memoria locală a browserului sub cheia
          rampa.lang; o poți elimina din setările browserului. Fonturile sunt servite de acest site.
          Rampa nu a instalat instrumente de publicitate sau analiză a vizitatorilor.
        </p>
        <h2>Găzduire și resurse externe</h2>
        <p>
          Vercel găzduiește site-ul și poate procesa date tehnice precum adresa IP, informații
          despre browser, momentul și adresa cererii pentru livrare și securitate. Pagina încarcă și
          componenta de atribuire a constructorului de la grok.com; acea conexiune transmite
          furnizorului metadate tehnice ale cererii. Nu trimitem prin ea cereri de pilot sau
          documente de transport. Găzduirea și resursele externe pot implica prelucrare în afara
          SEE; nu afirmăm că toate prelucrările rămân în UE. Vezi{" "}
          <a href="https://vercel.com/legal/privacy-policy">politica Vercel</a> și{" "}
          <a href="https://x.ai/legal/privacy-policy">politica xAI</a>.
        </p>
        <h2>Cereri de pilot trimise anterior</h2>
        <p>
          Formularul anterior primea firma, emailul, intervalul de mărime al flotei, limba, acordul
          de contact, data și versiunea acordului. Scopul era discutarea fluxului de documente și o
          invitație în pilot, pe baza consimțământului pentru acest contact (art. 6 alin. (1) lit.
          (a) GDPR). Furnizarea datelor era opțională și nu crea un abonament. Cererile salvate se
          află într-un spațiu privat Vercel Blob din Frankfurt, accesibil administratorului
          proiectului. Regiunea acestui spațiu nu descrie toate prelucrările furnizorului. Nu există
          o listă publică sau date de contact salvate în browser.
        </p>
        <h2>Păstrare și drepturile tale</h2>
        <p>
          Pentru cererile anterioare, criteriul de păstrare este necesitatea pentru recrutarea
          pilotului. Cererile care nu mai sunt necesare trebuie eliminate; nu există o ștergere
          automată sau o durată de backup verificată pe care să o putem promite aici. Retragerea
          consimțământului oprește contactele viitoare fără a afecta prelucrarea legală anterioară.
          Scrie de la adresa folosită în cerere pentru acces, corectare, ștergere, restricționare,
          portabilitate unde se aplică sau retragerea acordului. Nu trimite copii de acte de
          identitate nesolicitate. Termenul obișnuit GDPR pentru răspuns este o lună; o prelungire
          legală trebuie explicată în acest termen. Poți depune o plângere la{" "}
          <a href="https://www.dataprotection.ro/">ANSPDCP</a> sau la autoritatea competentă. Nu
          folosim cererile pentru decizii automate ori profilare.
        </p>
      </section>
      <section lang="en">
        <h2>English</h2>
        <p>
          Rampa is in development. Pilot registration and customer access are closed. Full
          service-operator details must be published before opening them. This notice covers the
          public demo and earlier requests, rather than a launched commercial service. Contact for
          the project and data requests: <a href={`mailto:${contact}`}>{contact}</a>.
        </p>
        <p>
          Demo edits remain temporarily in the open page and are not submitted to Rampa’s server by
          the demo. Use fictional data only. The optional RO/EN preference is stored locally as
          rampa.lang and can be cleared in browser settings. Fonts are self-hosted; Rampa has not
          installed advertising or visitor-analytics tools.
        </p>
        <p>
          Vercel hosts this site and may process technical request data, including IP address,
          browser, time and URL, for delivery and security. The builder attribution component is
          downloaded from grok.com, sharing technical request metadata with that provider. We do not
          send pilot requests or transport documents through it. These providers may process data
          outside the EEA; Frankfurt storage does not mean EU-only processing. See the Vercel and
          xAI policies linked above.
        </p>
        <p>
          Earlier pilot requests contained company, contact email, fleet-size range, language,
          contact consent, submission date and consent version, for discussing the workflow and a
          pilot invitation on the basis of consent (GDPR Article 6(1)(a)). Providing these details
          was optional and created no subscription. Saved requests are in private Vercel Blob
          storage in Frankfurt, accessible to the project administrator. They are not published or
          saved in your browser. Retention depends on continuing recruitment necessity; unnecessary
          requests must be removed. Automatic deletion and backup expiry have not been verified.
        </p>
        <p>
          Email from your submitted address for access, correction, erasure, restriction, applicable
          portability or withdrawal of consent. Withdrawal stops future contact without affecting
          earlier lawful processing. Please do not send unsolicited ID copies. The usual GDPR
          response period is one month; any lawful extension must be explained within that period.
          You can complain to ANSPDCP or your competent supervisory authority. Requests are not used
          for automated decisions or profiling.
        </p>
      </section>
    </main>
  );
}
