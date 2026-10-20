import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Archive, ArrowRight, ClipboardCheck, Menu, X } from "lucide-react";
import { COMPANY, copy, lanes, type Lang, type Lane } from "@/lib/sigiliu/content";
import { saveLead } from "@/lib/sigiliu/leads";
import { Seal } from "@/components/sigiliu/seal";

const LANG_KEY = "rampa.lang";

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-line/80 py-3">
      <div className="font-mono text-xs tracking-wide text-fog">{label}</div>
      <div className="mt-1 text-base text-ink">{value}</div>
    </div>
  );
}

export function Landing() {
  const [lang, setLang] = useState<Lang>("ro");
  const [open, setOpen] = useState(false);
  const [lane, setLane] = useState<Lane>(lanes[0]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: copy.ro.form.roles[0],
    email: "",
    phone: "",
    fleet: copy.ro.form.fleets[1],
    lane: copy.ro.form.laneOptions[1],
    pain: copy.ro.form.pains[0],
  });

  const t = copy[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_KEY);
    const next: Lang = stored === "en" ? "en" : "ro";
    setLang(next);
    const bundle = copy[next].form;
    setForm((current) => ({
      ...current,
      role: bundle.roles[0],
      fleet: bundle.fleets[1],
      lane: bundle.laneOptions[1],
      pain: bundle.pains[0],
    }));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  function switchLang() {
    const next = lang === "ro" ? "en" : "ro";
    setLang(next);
    setForm((current) => ({
      ...current,
      role: copy[next].form.roles[0],
      fleet: copy[next].form.fleets[1],
      lane: copy[next].form.laneOptions[1],
      pain: copy[next].form.pains[0],
    }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.email.trim()) {
      setError(t.form.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError(t.form.invalidEmail);
      return;
    }
    setError("");
    saveLead({
      name: form.name.trim(),
      company: form.company.trim(),
      role: form.role,
      email: form.email.trim(),
      phone: form.phone.trim(),
      fleet: form.fleet,
      lane: form.lane,
      pain: form.pain,
    });
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-asphalt text-paper">
      <div className="h-1 bg-amber" />
      <header className="sticky top-0 z-20 border-b border-line bg-asphalt/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <Seal className="h-11 w-11" />
            <span className="text-lg font-medium tracking-tight">{COMPANY}</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-mist md:flex">
            <a href="#fit" className="hover:text-paper">
              {t.nav.fit}
            </a>
            <a href="#how" className="hover:text-paper">
              {t.nav.how}
            </a>
            <a href="#list" className="hover:text-paper">
              {t.nav.access}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={switchLang}
              className="min-h-11 rounded-full border border-line px-4 text-sm text-mist hover:text-paper"
            >
              {t.nav.lang}
            </button>
            <a
              href="#list"
              className="hidden min-h-11 items-center rounded-full bg-amber px-4 text-sm font-medium text-ink md:inline-flex"
            >
              {t.hero.primary}
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
              aria-label="Menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
            <a href="#fit" onClick={() => setOpen(false)} className="min-h-11 py-2 text-mist">
              {t.nav.fit}
            </a>
            <a href="#how" onClick={() => setOpen(false)} className="min-h-11 py-2 text-mist">
              {t.nav.how}
            </a>
            <a href="#list" onClick={() => setOpen(false)} className="min-h-11 py-2 text-mist">
              {t.nav.access}
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="font-mono text-xs tracking-widest text-amber uppercase">{t.hero.kicker}</p>
            <h1 className="mt-4 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-xl text-amber">{t.hero.accent}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{t.hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#list"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 font-medium text-ink"
              >
                {t.hero.primary}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#cmr"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-paper"
              >
                {t.hero.secondary}
              </a>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-fog">{t.hero.note}</p>
          </div>

          <div id="cmr" className="rounded-card bg-paper p-5 text-ink shadow-none sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-widest text-fog uppercase">{t.cmr.doc}</p>
                <h2 className="mt-1 text-2xl font-medium">CMR</h2>
                <p className="mt-1 font-mono text-xs text-fog">{lane.ref}</p>
              </div>
              <Seal className="h-24 w-24 shrink-0 -rotate-6" />
            </div>
            <p className="mt-3 text-sm text-fog">{t.cmr.hint}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lanes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLane(item)}
                  className={`min-h-11 rounded-full px-3 text-sm ${
                    item.id === lane.id ? "bg-ink text-paper" : "bg-asphalt/5 text-ink"
                  }`}
                >
                  {item.route}
                </button>
              ))}
            </div>
            <div className="mt-2 grid sm:grid-cols-2 sm:gap-x-6">
              <Field label={t.cmr.shipper} value={lane.shipper} />
              <Field label={t.cmr.consignee} value={lane.consignee} />
              <Field label={t.cmr.load} value={lane.load} />
              <Field label={t.cmr.unload} value={lane.unload} />
              <Field label={t.cmr.goods} value={lane.goods} />
              <Field label={t.cmr.weight} value={lane.weight} />
              <Field label={t.cmr.plates} value={lane.plates} />
              <Field label={t.cmr.ref} value={lane.ref} />
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight">{t.painsTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.pains.map((pain) => (
                <article key={pain.title} className="rounded-card border border-line bg-panel p-6">
                  <h3 className="text-lg font-medium">{pain.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{pain.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-2xl text-3xl font-medium tracking-tight">{t.fitTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist">{t.fitLead}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-card border border-line bg-panel p-6">
                <div className="flex items-center gap-2 text-amber">
                  <ClipboardCheck className="h-5 w-5" aria-hidden />
                  <h3 className="font-medium">{t.yes}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {t.yesItems.map((item) => (
                    <li key={item} className="leading-relaxed text-paper">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-card border border-line p-6">
                <h3 className="font-medium text-mist">{t.no}</h3>
                <ul className="mt-4 space-y-3">
                  {t.noItems.map((item) => (
                    <li key={item} className="leading-relaxed text-mist">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-tight">{t.howTitle}</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {t.steps.map((step) => (
                <li key={step.n} className="rounded-card border border-line p-6">
                  <div className="font-mono text-sm text-amber">{step.n}</div>
                  <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{step.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center gap-3 text-sm text-fog">
              <Archive className="h-4 w-4 text-amber" aria-hidden />
              <span>{t.cmr.title}</span>
            </div>
          </div>
        </section>

        <section id="list" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-medium tracking-tight">{t.form.title}</h2>
              <p className="mt-4 leading-relaxed text-mist">{t.form.lead}</p>
            </div>
            <div className="rounded-card border border-line bg-panel p-6 lg:col-span-3">
              {sent ? (
                <div>
                  <h3 className="text-2xl font-medium">{t.form.successTitle}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{t.form.successBody}</p>
                  <button
                    type="button"
                    className="mt-6 min-h-11 rounded-full border border-line px-5"
                    onClick={() => {
                      setSent(false);
                      setForm((current) => ({ ...current, name: "", company: "", email: "", phone: "" }));
                    }}
                  >
                    {t.form.another}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    {t.form.name}
                    <input
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="mt-2 min-h-11 w-full rounded-2xl border border-line bg-asphalt px-3 text-paper outline-none focus:border-amber"
                      autoComplete="name"
                    />
                  </label>
                  <label className="block text-sm">
                    {t.form.company}
                    <input
                      value={form.company}
                      onChange={(event) => setForm({ ...form, company: event.target.value })}
                      className="mt-2 min-h-11 w-full rounded-2xl border border-line bg-asphalt px-3 text-paper outline-none focus:border-amber"
                      autoComplete="organization"
                    />
                  </label>
                  <label className="block text-sm">
                    {t.form.email}
                    <input
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="mt-2 min-h-11 w-full rounded-2xl border border-line bg-asphalt px-3 text-paper outline-none focus:border-amber"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </label>
                  <label className="block text-sm">
                    {t.form.phone}
                    <input
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      className="mt-2 min-h-11 w-full rounded-2xl border border-line bg-asphalt px-3 text-paper outline-none focus:border-amber"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>
                  <Select
                    label={t.form.role}
                    value={form.role}
                    options={t.form.roles}
                    onChange={(role) => setForm({ ...form, role })}
                  />
                  <Select
                    label={t.form.fleet}
                    value={form.fleet}
                    options={t.form.fleets}
                    onChange={(fleet) => setForm({ ...form, fleet })}
                  />
                  <Select
                    label={t.form.lanes}
                    value={form.lane}
                    options={t.form.laneOptions}
                    onChange={(laneChoice) => setForm({ ...form, lane: laneChoice })}
                  />
                  <Select
                    label={t.form.pain}
                    value={form.pain}
                    options={t.form.pains}
                    onChange={(pain) => setForm({ ...form, pain })}
                  />
                  {error && <p className="text-sm text-amber sm:col-span-2">{error}</p>}
                  <button
                    type="submit"
                    className="min-h-11 rounded-full bg-amber px-5 font-medium text-ink sm:col-span-2"
                  >
                    {t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-medium tracking-tight">{t.faqTitle}</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {t.faqs.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none text-lg font-medium marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-3 max-w-3xl leading-relaxed text-mist">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer}</p>
          <Link to="/fisa" className="text-mist hover:text-paper">
            {t.fisa}
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-11 w-full rounded-2xl border border-line bg-asphalt px-3 text-paper outline-none focus:border-amber"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
