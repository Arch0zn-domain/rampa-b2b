import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  FileText,
  PencilLine,
  Printer,
  RotateCcw,
  Truck,
} from "lucide-react";
import { lanes, type Lang, type Lane } from "@/lib/sigiliu/content";
import { pageCopy } from "@/lib/sigiliu/page-copy";
import { Seal } from "./seal";

type Trip = { [K in keyof Lane]: string };
const keys = [
  "shipper",
  "consignee",
  "load",
  "unload",
  "goods",
  "weight",
  "plates",
  "ref",
] as const;
const englishGoods = [
  "Automotive parts, 22 pallets",
  "Refrigerated dairy, 18 pallets",
  "General cargo, groupage",
];

export function TripDemo({ lang }: { lang: Lang }) {
  const [trip, setTrip] = useState<Trip>({ ...lanes[0] });
  const [stage, setStage] = useState<"order" | "cmr">("order");
  const t = pageCopy[lang].demo;
  function choose(index: number) {
    setTrip({ ...lanes[index], goods: lang === "en" ? englishGoods[index] : lanes[index].goods });
    setStage("order");
  }
  return (
    <div id="example" className="demo-console">
      <div className="console-bar">
        <span>
          <span className="status-dot" />
          {t.label}
        </span>
        <span className="console-mark">R/01</span>
      </div>
      <div className="demo-toolbar">
        <label className="sr-only" htmlFor="demo-route">
          {t.route}
        </label>
        <select
          id="demo-route"
          value={trip.id}
          onChange={(event) => choose(lanes.findIndex((item) => item.id === event.target.value))}
        >
          {lanes.map((item) => (
            <option value={item.id} key={item.id}>
              {item.route}
            </option>
          ))}
        </select>
        <span className="sample-tag">{t.sample}</span>
      </div>
      <div
        className="demo-stage-switch"
        aria-label={lang === "ro" ? "Vedere exemplu" : "Example view"}
      >
        <button type="button" aria-pressed={stage === "order"} onClick={() => setStage("order")}>
          <span>01</span> {t.order}
        </button>
        <ArrowRight size={14} aria-hidden="true" />
        <button type="button" aria-pressed={stage === "cmr"} onClick={() => setStage("cmr")}>
          <span>02</span> {t.cmr}
        </button>
      </div>
      {stage === "order" ? (
        <div className="order-sheet">
          <div className="sheet-heading">
            <FileText size={18} aria-hidden="true" />
            <span>{t.from}</span>
            <span>{trip.ref}</span>
          </div>
          <h2>{t.subject}</h2>
          <p className="order-message">{t.message}</p>
          <div className="trip-route">
            <div>
              <span className="route-point" />
              <div>
                <small>{t.fields[2]}</small>
                <strong>{trip.load}</strong>
              </div>
            </div>
            <div className="route-connector">
              <span />
              <Truck size={20} aria-hidden="true" />
              <span />
            </div>
            <div>
              <span className="route-point arrival" />
              <div>
                <small>{t.fields[3]}</small>
                <strong>{trip.unload}</strong>
              </div>
            </div>
          </div>
          <dl className="order-data">
            <div>
              <dt>{t.fields[0]}</dt>
              <dd>{trip.shipper}</dd>
            </div>
            <div>
              <dt>{t.fields[1]}</dt>
              <dd>{trip.consignee}</dd>
            </div>
            <div>
              <dt>{t.fields[4]}</dt>
              <dd>{trip.goods}</dd>
            </div>
            <div>
              <dt>{t.fields[5]}</dt>
              <dd>{trip.weight}</dd>
            </div>
          </dl>
          <button
            type="button"
            className="button button-dark prepare-button"
            onClick={() => setStage("cmr")}
          >
            {t.prepare}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <div className="cmr-sheet">
          <div className="cmr-heading">
            <div>
              <p>{lang === "ro" ? "SCRISOARE DE TRĂSURĂ" : "CONSIGNMENT NOTE"}</p>
              <h2>
                CMR<span> / {trip.ref}</span>
              </h2>
            </div>
            <Seal className="document-seal" />
          </div>
          <p className="review-note" role="status">
            <PencilLine size={14} aria-hidden="true" />
            {t.prepared}
          </p>
          <div className="cmr-fields">
            {keys.map((key, index) => (
              <label key={key}>
                <span>{t.fields[index]}</span>
                <input
                  aria-label={t.fields[index]}
                  value={trip[key]}
                  maxLength={160}
                  onChange={(event) => setTrip({ ...trip, [key]: event.target.value })}
                />
              </label>
            ))}
          </div>
          <div className="document-actions">
            <button type="button" className="button button-dark" onClick={() => window.print()}>
              <Printer size={16} aria-hidden="true" />
              {t.print}
            </button>
            <button
              type="button"
              className="icon-button"
              aria-label={t.reset}
              onClick={() => choose(lanes.findIndex((item) => item.id === trip.id))}
            >
              <RotateCcw size={18} aria-hidden="true" />
            </button>
          </div>
          <p className="print-disclaimer">{t.printNote}</p>
        </div>
      )}
      <div className="demo-bottom">
        <Check size={15} aria-hidden="true" />
        <span>{t.footer}</span>
      </div>
      <p className="demo-honesty">{t.hint}</p>
      <div className="print-document" aria-hidden="true">
        <p>RAMPA / DEMO</p>
        <h1>CMR · {trip.ref}</h1>
        <h2>{t.printNote}</h2>
        <div>
          {keys.map((key, index) => (
            <section key={key}>
              <h3>{t.fields[index]}</h3>
              <p>{trip[key]}</p>
            </section>
          ))}
        </div>
        <p>
          DEMO —{" "}
          {lang === "ro"
            ? "Fără semnături. Date fictive. Machetă incompletă."
            : "Unsigned. Fictional data. Incomplete layout."}
        </p>
      </div>
      <a className="demo-next" href="#how" aria-label={pageCopy[lang].nav[1]}>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
