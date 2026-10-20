export type Lang = "ro" | "en";

export const COMPANY = "Sigiliu";

export const lanes = [
  {
    id: "de",
    route: "Cluj-Napoca → München",
    shipper: "Atelier Nord SRL",
    consignee: "Werkstatt Süd GmbH",
    load: "Cluj-Napoca, RO",
    unload: "München, DE",
    goods: "Piese auto, 22 paleți",
    weight: "18.400 kg",
    plates: "CJ 24 SIG",
    ref: "SIG-20418",
  },
  {
    id: "it",
    route: "București → Milano",
    shipper: "Lactis Fresh SRL",
    consignee: "Caseificio Lombardo",
    load: "București, RO",
    unload: "Milano, IT",
    goods: "Lactate refrigerate, 18 paleți",
    weight: "16.200 kg",
    plates: "B 108 SIG",
    ref: "SIG-18802",
  },
  {
    id: "nl",
    route: "Oradea → Rotterdam",
    shipper: "Grupaj Vest SRL",
    consignee: "Haven Collectief BV",
    load: "Oradea, RO",
    unload: "Rotterdam, NL",
    goods: "Marfă generală, grupaj",
    weight: "21.050 kg",
    plates: "BH 77 SIG",
    ref: "SIG-17640",
  },
] as const;

export type Lane = (typeof lanes)[number];

export const descriptions = {
  en: "Sigiliu is a CMR automation service for small and medium European road-transport companies, starting with carriers based in Romania. It takes the trip details a dispatcher already keeps — who ships, who receives, where the truck loads and unloads, what is on board, and how much it weighs — and prepares a complete consignment note, a copy the driver can take, and an archive you can search when a customer or an insurer asks months later. It is aimed at fleets of roughly 5 to 50 trucks: enough paperwork to justify a system, and not enough staff for an IT department. The first version is for Romania–EU routes, so owners and dispatchers spend less of the evening on forms and send trucks out with fewer missing fields.",
  ro: "Sigiliu este un serviciu de automatizare a CMR-ului pentru firme mici și mijlocii de transport rutier din Europa, cu primii clienți în România. Pornește de la datele pe care dispecerul le are deja — expeditor, destinatar, loc de încărcare și descărcare, marfă și greutate — și pregătește scrisoarea de trăsură, copia pentru șofer și o arhivă în care găsești documentul și peste șase luni, când apare o reclamație. Este pentru flote de aproximativ 5–50 de camioane: suficientă hârtie cât să merite un sistem, dar fără departament de IT. Prima versiune acoperă cursele România–UE, ca patronul și dispecerul să nu mai închidă seara pe formulare și să plece camionul cu mai puține câmpuri lipsă.",
};

type Bundle = {
  nav: { fit: string; how: string; access: string; lang: string };
  hero: {
    kicker: string;
    title: string;
    accent: string;
    body: string;
    primary: string;
    secondary: string;
    note: string;
  };
  painsTitle: string;
  pains: { title: string; body: string }[];
  fitTitle: string;
  fitLead: string;
  yes: string;
  no: string;
  yesItems: string[];
  noItems: string[];
  howTitle: string;
  steps: { n: string; title: string; body: string }[];
  cmr: {
    title: string;
    hint: string;
    doc: string;
    shipper: string;
    consignee: string;
    load: string;
    unload: string;
    goods: string;
    weight: string;
    plates: string;
    ref: string;
  };
  form: {
    title: string;
    lead: string;
    name: string;
    company: string;
    role: string;
    email: string;
    phone: string;
    fleet: string;
    lanes: string;
    pain: string;
    submit: string;
    successTitle: string;
    successBody: string;
    another: string;
    roles: string[];
    fleets: string[];
    laneOptions: string[];
    pains: string[];
    required: string;
    invalidEmail: string;
  };
  faqTitle: string;
  faqs: { q: string; a: string }[];
  footer: string;
  fisa: string;
};

export const copy: Record<Lang, Bundle> = {
  ro: {
    nav: {
      fit: "Pentru cine",
      how: "Cum merge",
      access: "Lista de așteptare",
      lang: "EN",
    },
    hero: {
      kicker: "Pentru flote din România, pe curse în UE",
      title: "CMR-ul e gata înainte să iasă camionul din curte.",
      accent: "Fără seară pierdută pe formulare.",
      body: "Sigiliu ia datele pe care dispecerul le știe deja și pregătește scrisoarea de trăsură, copia pentru șofer și arhiva. Pentru firme cu 5–50 de camioane, nu pentru corporații cu departament de IT.",
      primary: "Vreau loc pe listă",
      secondary: "Vezi un CMR umplut",
      note: "Produsul se construiește acum. Lista e pentru patroni și dispeceri care vor să îl vadă primii.",
    },
    painsTitle: "Ce se întâmplă azi, după ora 18",
    pains: [
      {
        title: "Formularul se scrie din memorie",
        body: "Expeditorul, codul, locurile și greutatea sar dintr-un mail, un WhatsApp și un Excel. O cifră greșită pleacă cu șoferul.",
      },
      {
        title: "La frontieră se oprește pentru un câmp",
        body: "Lipsește un loc de descărcare sau greutatea nu se pupă cu factura. Camionul stă, dispecerul caută poza de pe telefon.",
      },
      {
        title: "Dauna apare peste opt luni",
        body: "Clientul cere CMR-ul semnat. Scanarea e într-un dosar, pe un stick sau la șoferul care nu mai e la firmă.",
      },
    ],
    fitTitle: "Făcut pentru firma care duce marfa, nu pentru softiști",
    fitLead:
      "Dacă hârtia o face patronul, dispecerul sau o singură fată de la birou, Sigiliu e pentru voi. Dacă aveți deja SAP și un departament de IT, nu.",
    yes: "Da, dacă",
    no: "Nu încă, dacă",
    yesItems: [
      "Aveți cam 5–50 de camioane, proprii sau în leasing",
      "Faceți intern și mai ales România–UE: Germania, Italia, Benelux, Franța, Austria",
      "CMR-ul încă se scrie de mână, în Word sau se copiază din cursa trecută",
      "Nu aveți pe nimeni angajat doar pentru programe",
    ],
    noItems: [
      "Sunteți o casă de expediții care nu mișcă camioane proprii",
      "Aveți deja un TMS mare și vreți doar încă un modul",
      "Căutați azi eCMR recunoscut în toate țările — protocolul încă nu e peste tot",
    ],
    howTitle: "Trei pași, aceeași cursă",
    steps: [
      {
        n: "01",
        title: "Spui cursa",
        body: "Expeditor, destinatar, încărcare, descărcare, marfă, greutate. Ce ai deja în comandă, nu un formular nou de 24 de rubrici.",
      },
      {
        n: "02",
        title: "Iese CMR-ul",
        body: "Câmpurile se așază pe scrisoarea de trăsură. Dispecerul verifică, nu recopiază. Șoferul pleacă cu un document întreg.",
      },
      {
        n: "03",
        title: "Rămâne în arhivă",
        body: "Când sună clientul sau asigurătorul, cauți după număr, rută sau dată. Nu după „șoferul de atunci”.",
      },
    ],
    cmr: {
      title: "Așa arată o cursă pusă pe CMR",
      hint: "Exemplu, nu un document emis. Alege o rută pe care o recunoști.",
      doc: "Scrisoare de trăsură",
      shipper: "Expeditor",
      consignee: "Destinatar",
      load: "Loc de încărcare",
      unload: "Loc de descărcare",
      goods: "Marfă",
      weight: "Greutate brută",
      plates: "Autotractor",
      ref: "Referință",
    },
    form: {
      title: "Spune-ne dacă e firma ta",
      lead: "Nu vindem încă. Strângem flotele pentru care merită să terminăm produsul: România, 5–50 de camioane, curse în UE.",
      name: "Nume",
      company: "Firmă",
      role: "Rol",
      email: "Email",
      phone: "Telefon",
      fleet: "Camioane",
      lanes: "Curse",
      pain: "Ce te costă cel mai mult",
      submit: "Intră pe listă",
      successTitle: "Ești pe listă.",
      successBody:
        "Cererea rămâne salvată pe acest dispozitiv, ca să o poți revedea. Când deschidem primele locuri pentru flote din România, pornim de la firme ca a ta.",
      another: "Mai adaugă o firmă",
      roles: ["Patron", "Dispecer", "Contabil", "Șofer"],
      fleets: ["1–4", "5–15", "16–30", "31–50", "peste 50"],
      laneOptions: ["Mai ales intern", "România–UE", "UE și UK", "Frigo", "Agabaritic"],
      pains: [
        "Serile pierdute pe CMR",
        "Greșeli care opresc camionul",
        "Nu găsesc documentul la daună",
        "Aceeași cursă recopiată de trei ori",
      ],
      required: "Completează numele, firma și emailul.",
      invalidEmail: "Emailul nu pare complet.",
    },
    faqTitle: "Întrebări de la dispecerat",
    faqs: [
      {
        q: "Înlocuiește CMR-ul de hârtie, legal, din prima zi?",
        a: "Nu promitem asta. În multe relații încă se cere exemplarul de hârtie, semnat. Sigiliu pregătește documentul corect și îl păstrează. eCMR-ul electronic, recunoscut peste tot în UE, depinde de țări și de clienți — îl spunem când e adevărat, nu înainte.",
      },
      {
        q: "Faceți și e-Transport / UIT?",
        a: "Nu în prima versiune. Întâi CMR-ul și arhiva, pentru că acolo se pierde seara. Dacă lista o cere, e-Transport intră după, nu înainte să fie scrisoarea de trăsură în regulă.",
      },
      {
        q: "Trebuie să schimb programul de acum?",
        a: "Nu. Dacă lucrezi din Excel, WhatsApp și mail, rămâi acolo. Sigiliu nu e un TMS. E locul în care cursa devine CMR.",
      },
      {
        q: "Cât costă?",
        a: "Încă nu e un preț de listă. Primele flote intră ca să spună ce merită plătit: pe camion, pe CMR sau un abonament mic de firmă. Fără departament de IT de întreținut.",
      },
    ],
    footer: "Sigiliu · CMR pentru flotele din România",
    fisa: "Fișă pentru listări",
  },
  en: {
    nav: {
      fit: "Who it’s for",
      how: "How it works",
      access: "Waitlist",
      lang: "RO",
    },
    hero: {
      kicker: "For Romanian fleets running into the EU",
      title: "The CMR is ready before the truck leaves the yard.",
      accent: "No evening lost to forms.",
      body: "Sigiliu takes the details a dispatcher already has and prepares the consignment note, the driver’s copy, and the archive. For companies with 5–50 trucks, not for groups with an IT department.",
      primary: "Join the list",
      secondary: "See a filled CMR",
      note: "The product is being built now. The list is for owners and dispatchers who want to see it first.",
    },
    painsTitle: "What still happens after 6 p.m.",
    pains: [
      {
        title: "The form is written from memory",
        body: "Shipper, reference, packages, and weight live in a mail, a WhatsApp, and a spreadsheet. One wrong figure leaves with the driver.",
      },
      {
        title: "The border stops on a missing field",
        body: "The unloading place is blank, or the weight does not match the invoice. The truck waits while someone hunts a photo on a phone.",
      },
      {
        title: "The claim arrives eight months later",
        body: "The customer wants the signed CMR. The scan is in a folder, on a stick, or with a driver who no longer works there.",
      },
    ],
    fitTitle: "Built for the company that moves the freight",
    fitLead:
      "If the paperwork is done by the owner, the dispatcher, or one person in the office, Sigiliu is for you. If you already run SAP and an IT team, it is not.",
    yes: "Yes, if",
    no: "Not yet, if",
    yesItems: [
      "You run about 5–50 trucks, owned or leased",
      "You do domestic work and especially Romania–EU: Germany, Italy, Benelux, France, Austria",
      "The CMR is still handwritten, typed in Word, or copied from the last trip",
      "Nobody on the payroll is there only to run software",
    ],
    noItems: [
      "You are a forwarder and do not move your own trucks",
      "You already have a large TMS and only want another module",
      "You need legally recognized eCMR in every country today — the protocol is not universal yet",
    ],
    howTitle: "Three steps, the same trip",
    steps: [
      {
        n: "01",
        title: "You state the trip",
        body: "Shipper, consignee, loading, unloading, goods, weight. What you already have on the order, not a fresh 24-box form.",
      },
      {
        n: "02",
        title: "The CMR comes out",
        body: "The fields land on the consignment note. The dispatcher checks it. They do not retype it. The driver leaves with a complete document.",
      },
      {
        n: "03",
        title: "It stays in the archive",
        body: "When a customer or an insurer calls, you search by number, lane, or date. Not by “that driver”.",
      },
    ],
    cmr: {
      title: "A trip, set onto a CMR",
      hint: "A sample, not an issued document. Pick a lane you recognize.",
      doc: "Consignment note",
      shipper: "Shipper",
      consignee: "Consignee",
      load: "Place of taking over",
      unload: "Place of delivery",
      goods: "Goods",
      weight: "Gross weight",
      plates: "Tractor",
      ref: "Reference",
    },
    form: {
      title: "Tell us if this is your company",
      lead: "Nothing is for sale yet. We are collecting the fleets worth finishing the product for: Romania, 5–50 trucks, EU lanes.",
      name: "Name",
      company: "Company",
      role: "Role",
      email: "Email",
      phone: "Phone",
      fleet: "Trucks",
      lanes: "Lanes",
      pain: "What costs you most",
      submit: "Join the list",
      successTitle: "You’re on the list.",
      successBody:
        "The request stays on this device so you can review it. When the first places open for Romanian fleets, we start with companies like yours.",
      another: "Add another company",
      roles: ["Owner", "Dispatcher", "Accountant", "Driver"],
      fleets: ["1–4", "5–15", "16–30", "31–50", "50+"],
      laneOptions: ["Mostly domestic", "Romania–EU", "EU and UK", "Reefer", "Abnormal loads"],
      pains: [
        "Evenings lost to CMRs",
        "Errors that stop the truck",
        "Can’t find the document for a claim",
        "The same trip copied three times",
      ],
      required: "Add a name, a company, and an email.",
      invalidEmail: "That email looks incomplete.",
    },
    faqTitle: "From the dispatch desk",
    faqs: [
      {
        q: "Does this legally replace the paper CMR on day one?",
        a: "We will not claim that. On many lanes the signed paper copy is still what is asked for. Sigiliu prepares a complete note and keeps it. Electronic eCMR, accepted everywhere in the EU, depends on the countries and the customers — we will say so when it is true.",
      },
      {
        q: "Do you handle Romanian e-Transport / UIT codes?",
        a: "Not in the first version. The CMR and the archive come first, because that is where the evening goes. If the list asks for e-Transport, it comes after the consignment note is solid.",
      },
      {
        q: "Do we have to replace what we use now?",
        a: "No. If you work from Excel, WhatsApp, and email, stay there. Sigiliu is not a TMS. It is where a trip becomes a CMR.",
      },
      {
        q: "What does it cost?",
        a: "There is no list price yet. The first fleets help decide what is worth paying: per truck, per CMR, or a small company fee. Nothing that needs an IT department to keep running.",
      },
    ],
    footer: "Sigiliu · CMR for fleets in Romania",
    fisa: "Listing sheet",
  },
};
