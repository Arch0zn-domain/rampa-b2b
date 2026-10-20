export type Lead = {
  id: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  fleet: string;
  lane: string;
  pain: string;
  at: string;
};

const KEY = "sigiliu.leads";

export function readLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLead(lead: Omit<Lead, "id" | "at">): Lead {
  const next: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  const all = [next, ...readLeads()];
  window.localStorage.setItem(KEY, JSON.stringify(all));
  return next;
}
