import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { pageCopy } from "@/lib/sigiliu/page-copy";
import type { Lang } from "@/lib/sigiliu/content";

export function PilotForm({ lang }: { lang: Lang }) {
  const [state, setState] = useState<"idle" | "sending" | "error" | "sent">("idle");
  const successRef = useRef<HTMLHeadingElement>(null);
  const t = pageCopy[lang].form;
  useEffect(() => {
    if (state === "sent") successRef.current?.focus();
  }, [state]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    setState("sending");
    try {
      const response = await fetch("/api/pilot", {
        method: "POST",
        signal: AbortSignal.timeout(20000),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: fields.get("company"),
          email: fields.get("email"),
          fleet: fields.get("fleet"),
          consent: fields.get("consent") === "on",
          website: fields.get("website"),
          lang,
        }),
      });
      if (!response.ok || !(await response.json()).ok) throw new Error("request_failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }
  if (state === "sent")
    return (
      <div className="pilot-form success-panel">
        <div className="success-mark">
          <Check size={28} aria-hidden="true" />
        </div>
        <p className="eyebrow">RAMPA / PILOT</p>
        <h3 ref={successRef} tabIndex={-1}>
          {t.success}
        </h3>
        <p>{t.successBody}</p>
        <a className="text-link" href="#example">
          {t.back}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    );
  return (
    <form className="pilot-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="status-dot" />
        <h3>{t.title}</h3>
      </div>
      <fieldset disabled={state === "sending"}>
        <label htmlFor="pilot-company">{t.company}</label>
        <input
          id="pilot-company"
          name="company"
          autoComplete="organization"
          minLength={2}
          maxLength={120}
          required
          placeholder={lang === "ro" ? "Numele firmei" : "Company name"}
        />
        <label htmlFor="pilot-email">{t.email}</label>
        <input
          id="pilot-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder="dispecerat@firma.ro"
        />
        <label htmlFor="pilot-fleet">{t.fleet}</label>
        <select id="pilot-fleet" name="fleet" defaultValue="" required>
          <option value="" disabled>
            {t.choose}
          </option>
          {["1-4", "5-15", "16-30", "31-50", "50+"].map((size) => (
            <option key={size} value={size}>
              {size.replaceAll("-", "–")}
            </option>
          ))}
        </select>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="pilot-website">Website</label>
          <input id="pilot-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="consent-label">
          <input type="checkbox" name="consent" required />
          <span>
            {t.consent} <Link to="/confidentialitate">{t.privacy}</Link>.
          </span>
        </label>
        {state === "error" && (
          <p className="form-error" role="alert">
            {t.error}
          </p>
        )}
        <button type="submit" className="button button-amber">
          {state === "sending" ? (
            <>
              <LoaderCircle className="spin" size={18} aria-hidden="true" />
              {t.busy}
            </>
          ) : (
            <>
              {t.submit}
              <ArrowRight size={18} aria-hidden="true" />
            </>
          )}
        </button>
      </fieldset>
      <p className="form-note">{t.note}</p>
    </form>
  );
}
