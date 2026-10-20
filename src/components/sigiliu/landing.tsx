import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Archive,
  Check,
  CheckCheck,
  FileText,
  Menu,
  Plus,
  ScanLine,
  Truck,
  X,
} from "lucide-react";
import { pageCopy } from "@/lib/sigiliu/page-copy";
import type { Lang } from "@/lib/sigiliu/content";
import { Seal } from "./seal";
import { TripDemo } from "./trip-demo";
import { PilotForm } from "./pilot-form";

const anchors = ["#example", "#how", "#fit"];
const painIcons = [FileText, CheckCheck, Archive];

export function Landing() {
  const [lang, setLang] = useState<Lang>("ro");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = pageCopy[lang];
  useEffect(() => {
    try {
      if (localStorage.getItem("rampa.lang") === "en") setLang("en");
    } catch {
      /* The page also works when storage is disabled. */
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "ro" ? "Rampa — CMR pentru flote din România" : "Rampa — CMR for Romanian fleets";
  }, [lang]);
  function changeLanguage() {
    const next = lang === "ro" ? "en" : "ro";
    setLang(next);
    try {
      localStorage.setItem("rampa.lang", next);
    } catch {
      /* Preference persistence is optional. */
    }
  }
  return (
    <div className="rampa-site" id="top">
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === "Escape") setMenuOpen(false);
        }}
      >
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Rampa">
            <Seal className="brand-seal" />
            <span>
              rampa<span className="brand-period">.</span>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={lang === "ro" ? "Navigare principală" : "Main navigation"}
          >
            {t.nav.map((label, index) => (
              <a key={index} href={anchors[index]}>
                {label}
              </a>
            ))}
            <Link to="/aplicatie">{lang === "ro" ? "Aplicația" : "The app"}</Link>
          </nav>
          <div className="header-actions">
            <button
              className="language-button"
              type="button"
              onClick={changeLanguage}
              aria-label={lang === "ro" ? "Switch to English" : "Schimbă în română"}
            >
              {lang === "ro" ? "EN" : "RO"}
              <span aria-hidden="true">↗</span>
            </button>
            <a className="button button-amber header-cta" href="#list">
              {t.pilot}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="mobile-menu-button icon-button"
              aria-label={t.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="mobile-nav shell" aria-label={t.menu}>
            {t.nav.map((label, index) => (
              <a key={index} href={anchors[index]} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <Link to="/aplicatie" onClick={() => setMenuOpen(false)}>
              {lang === "ro" ? "Aplicația" : "The app"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a href="#list" onClick={() => setMenuOpen(false)}>
              {t.pilot}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="launch-status">
              <span className="status-dot" />
              {t.status}
            </p>
            <p className="eyebrow hero-kicker">{t.kicker}</p>
            <h1 id="hero-title">
              {t.headline[0]}
              <br />
              <span>{t.headline[1]}</span>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <p className="hero-body">{t.body}</p>
            <div className="hero-actions">
              <a className="button button-amber" href="#list">
                {t.pilot}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-outline" href="#example">
                {t.see}
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">{t.note}</p>
            <div className="hero-route" aria-hidden="true">
              <span>RO</span>
              <span className="hero-route-line" />
              <Truck size={22} />
              <span className="hero-route-line" />
              <span>EU</span>
              <span className="route-caption">DOCUMENTE ÎN MIȘCARE / RAMPA</span>
            </div>
          </div>
          <TripDemo lang={lang} />
        </section>
        <div className="process-strip">
          <div className="shell">
            {t.strip.map((item, index) => (
              <div key={item}>
                <span>{item}</span>
                {index < 2 ? (
                  <ArrowRight size={20} aria-hidden="true" />
                ) : (
                  <Check size={20} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
        <section className="pain-section light-section" aria-labelledby="pain-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">{t.painLabel}</p>
              <h2 id="pain-title">{t.painTitle}</h2>
              <span className="section-index" aria-hidden="true">
                01 — 03
              </span>
            </div>
            <div className="pain-grid">
              {t.pains.map((pain, index) => {
                const Icon = painIcons[index];
                return (
                  <article key={pain.title}>
                    <div className="pain-top">
                      <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{pain.title}</h3>
                    <p>{pain.body}</p>
                    <span className="pain-tag">
                      <span />
                      {pain.tag}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="workflow-section shell" id="how" aria-labelledby="workflow-title">
          <div className="section-heading">
            <p className="eyebrow">{t.workflowLabel}</p>
            <h2 id="workflow-title">{t.workflowTitle}</h2>
            <p className="section-description">{t.workflowBody}</p>
          </div>
          <div className="workflow-layout">
            <ol className="workflow-steps">
              {t.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="archive-demo">
              <div className="archive-top">
                <Archive size={18} aria-hidden="true" />
                <span>{t.planned}</span>
                <span className="small-dot" />
              </div>
              <div className="archive-trip">
                <span className="eyebrow">RMP-20418 / RO → DE</span>
                <h3>
                  Cluj-Napoca <ArrowRight size={24} aria-hidden="true" /> München
                </h3>
                <p>Atelier Nord SRL → Werkstatt Süd GmbH</p>
              </div>
              <div className="archive-doc">
                <FileText size={34} strokeWidth={1.3} aria-hidden="true" />
                <div>
                  <strong>CMR_RMP-20418.pdf</strong>
                  <span>{t.archive[1]}</span>
                </div>
                <Check size={18} aria-hidden="true" />
              </div>
              <div className="archive-return">
                <div className="scan-illustration" aria-hidden="true">
                  <ScanLine size={24} />
                  <div className="signature-line" />
                </div>
                <div>
                  <span className="archive-badge">{t.archive[3]}</span>
                  <p>{t.archiveNote}</p>
                </div>
              </div>
              <div className="archive-bottom">
                <Archive size={15} aria-hidden="true" />
                <span>{t.archive[4]} / RMP-20418</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
        <section id="fit" className="fit-section">
          <div className="shell fit-layout">
            <div>
              <p className="eyebrow">{t.fitLabel}</p>
              <h2>{t.fitTitle}</h2>
              <p className="fit-body">{t.fitBody}</p>
            </div>
            <div>
              <ul className="fit-list">
                {t.yes.map((line) => (
                  <li key={line}>
                    <Check size={18} aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="scope-note">
                <span>↳</span>
                <div>
                  <h3>{t.scopeTitle}</h3>
                  <p>{t.scope}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pilot-section light-section" id="list" aria-labelledby="pilot-title">
          <div className="shell pilot-layout">
            <div className="pilot-copy">
              <p className="eyebrow">{t.formLabel}</p>
              <h2 id="pilot-title">{t.formTitle}</h2>
              <p>{t.formBody}</p>
              <ul>
                {t.formBenefits.map((line, index) => (
                  <li key={line}>
                    <span>0{index + 1}</span>
                    {line}
                  </li>
                ))}
              </ul>
              <Seal className="pilot-seal" />
            </div>
            <PilotForm lang={lang} />
          </div>
        </section>
        <section className="faq-section shell">
          <div>
            <p className="eyebrow">{t.faqLabel}</p>
            <h2>{t.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {t.faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <a className="brand" href="#top">
              <Seal className="brand-seal" />
              <span>
                rampa<span className="brand-period">.</span>
              </span>
            </a>
            <p>{t.footer}</p>
            <a href="#top" className="footer-up" aria-label={t.top}>
              <ArrowUpRight size={23} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 {t.copyright}</span>
            <a href="mailto:dahwa.adam.alexander@gmail.com">
              {lang === "ro" ? "Vorbește cu noi" : "Talk to us"} ↗
            </a>
            <Link to="/confidentialitate">{t.privacy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
