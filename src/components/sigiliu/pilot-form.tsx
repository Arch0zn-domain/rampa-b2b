import { ArrowRight, LockKeyhole } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Lang } from "@/lib/sigiliu/content";

export function PilotForm({ lang }: { lang: Lang }) {
  const ro = lang === "ro";
  return (
    <div className="pilot-form success-panel">
      <div className="success-mark">
        <LockKeyhole size={28} aria-hidden="true" />
      </div>
      <p className="eyebrow">RAMPA / PILOT</p>
      <h3>{ro ? "Pregătim accesul la pilot." : "Pilot access is being prepared."}</h3>
      <p>
        {ro
          ? "Înscrierile sunt închise până la finalizarea informațiilor despre operator, condițiilor de utilizare și măsurilor pentru datele clienților. Poți încerca exemplul cu date fictive."
          : "Registration is closed while operator details, customer terms and data-protection arrangements are completed. You can try the example with fictional data."}
      </p>
      <Link className="text-link" to="/aplicatie">
        {ro ? "Despre aplicația Rampa" : "About the Rampa app"}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
      <p className="form-note">
        <Link to="/confidentialitate">
          {ro ? "Confidențialitate și date personale" : "Privacy and personal data"}
        </Link>
      </p>
    </div>
  );
}
