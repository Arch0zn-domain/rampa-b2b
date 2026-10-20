export type Lang = "ro" | "en";

export const COMPANY = "Rampa";

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
    plates: "CJ 24 RMP",
    ref: "RMP-20418",
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
    plates: "B 108 RMP",
    ref: "RMP-18802",
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
    plates: "BH 77 RMP",
    ref: "RMP-17640",
  },
] as const;

export type Lane = (typeof lanes)[number];

export const descriptions = {
  en: "Rampa is developing a CMR and delivery-document workflow for Romanian road carriers with around 5–50 trucks. The public site offers an interactive demonstration using fictional trip data. Pilot registration and customer access are closed while operator details, customer terms and data-protection arrangements are completed. Automatic imports and signed-copy handling are in development; pricing and the launch date are not yet set.",
  ro: "Rampa dezvoltă un flux pentru CMR și documente de livrare, destinat transportatorilor din România cu aproximativ 5–50 de camioane. Site-ul oferă o demonstrație interactivă cu date fictive. Înscrierile în pilot și accesul clienților sunt închise până la finalizarea informațiilor despre operator, condițiilor de utilizare și protecției datelor. Importurile automate și gestionarea copiilor semnate sunt în dezvoltare; prețul și data lansării nu sunt încă stabilite.",
};
