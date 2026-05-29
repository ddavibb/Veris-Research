import { useState, useEffect } from 'react';
import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap } from '../hooks.js';
import { Nav, Footer } from '../components/Nav.jsx';
import { Field } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';

const PATHS = [
  { id: "patient",  label: "I'm a patient (or care for one)",  help: "A coordinator can answer questions about studies, eligibility, and your rights." },
  { id: "fqhc",    label: "I'm with an FQHC",                 help: "30-minute partnership call. We'll be honest about whether we're a fit." },
  { id: "sponsor", label: "I'm with a sponsor or CRO",        help: "Protocol synopsis, NDA, capabilities deck — let's run a feasibility match." },
  { id: "press",   label: "Press & media",                    help: "Interviews, expert commentary, and access to our founders." },
  { id: "other",   label: "Something else",                   help: "Drop us a line — we read everything." },
];

const AREAS = [
  "Cardiometabolic",
  "Infectious disease",
  "Women's & reproductive health",
  "Primary care / general medicine",
  "Oncology",
  "Other",
];
const PHASES = ["Phase II", "Phase III", "Phase IV / RWE", "Phase I", "Feasibility only"];

// Web3Forms access key — safe to expose client-side; routes submissions to david@verisresearch.com.
// Set in .env as VITE_WEB3FORMS_ACCESS_KEY (see .env.example).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function readAs() {
  const h = window.location.hash || "";
  const q = h.split("?")[1] || "";
  const v = new URLSearchParams(q).get("as");
  return PATHS.some((p) => p.id === v) ? v : "patient";
}

export default function ContactPage() {
  const { navy, teal, paper, ink70, ink55, rule, fontSans } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();

  const [path, setPath] = useState(readAs);
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "", area: AREAS[0], phase: PHASES[0] });

  useEffect(() => {
    const onHash = () => setPath(readAs());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("Form isn't configured yet. Please email us directly at david@verisresearch.com.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    const active = PATHS.find((p) => p.id === path);
    const payload = {
      access_key: ACCESS_KEY,
      subject: `Veris website — ${active.label}`,
      from_name: form.name || "Veris Research website",
      replyto: form.email,
      "Inquiry type": active.label,
      Name: form.name,
      Email: form.email,
      Message: form.message,
    };
    if (path !== "patient") payload.Organization = form.org;
    if (path === "sponsor") {
      payload["Therapeutic area"] = form.area;
      payload.Phase = form.phase;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", org: "", message: "", area: AREAS[0], phase: PHASES[0] });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please email us at david@verisresearch.com.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please email us at david@verisresearch.com.");
    }
  };

  const active = PATHS.find((p) => p.id === path);
  const inputBase = {
    width: "100%", background: "#fff", border: `1px solid ${rule}`,
    padding: "14px 16px", borderRadius: 4, fontSize: 14.5,
    fontFamily: fontSans, color: navy, outline: "none",
    transition: "border-color 0.15s",
  };

  return (
    <div style={{ width: "100%", background: "#fff", color: navy, fontFamily: fontSans, fontSize: 15.5, lineHeight: 1.55 }}>

      {/* HERO */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 900 900" style={{
          position: "absolute",
          top: isMobile ? -200 : -120, right: isMobile ? -380 : -180,
          width: isMobile ? 700 : 1000, height: isMobile ? 700 : 1000,
          opacity: 0.9, pointerEvents: "none",
        }}>
          {[80, 140, 210, 290, 380, 480, 590, 710].map((r) => (
            <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={teal} strokeOpacity={0.3} strokeWidth="1" />
          ))}
          <circle cx="450" cy="450" r="22" fill={teal} />
        </svg>

        <Nav variant="dark" />

        <div style={{ ...w, padding: isMobile ? "40px 20px 56px" : "60px 56px 80px", position: "relative", zIndex: 2 }}>
          <div style={{ ...mono, color: teal, marginBottom: 28 }}>Contact</div>
          <h1 style={{ fontWeight: 500, fontSize: isMobile ? 42 : 80, lineHeight: isMobile ? 1.02 : 0.96, letterSpacing: "-0.035em", margin: 0, maxWidth: 1080, textWrap: "balance" }}>
            Tell us who you are.{" "}
            <span style={{ color: teal }}>We'll route you in 48 hours.</span>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section style={{ ...w, padding: isMobile ? "48px 20px 80px" : "80px 56px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "320px 1fr", gap: isMobile ? 32 : 48, alignItems: "start" }}>

          {/* Path selector */}
          <div>
            <div style={{ ...mono, color: ink55, marginBottom: 18 }}>// 01 · pick your path</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${rule}` }}>
              {PATHS.map((p, i, arr) => {
                const isActive = p.id === path;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPath(p.id)}
                    style={{
                      background: isActive ? navy : "#fff",
                      color: isActive ? "#fff" : navy,
                      border: "none",
                      borderBottom: i < arr.length - 1 ? `1px solid ${isActive ? "rgba(255,255,255,0.12)" : rule}` : "none",
                      padding: "18px 20px", cursor: "pointer",
                      textAlign: "left", fontFamily: fontSans,
                      fontSize: 14.5, fontWeight: isActive ? 600 : 500,
                      display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center",
                      letterSpacing: "-0.005em",
                      transition: "background 0.15s",
                    }}
                  >
                    <span>{p.label}</span>
                    {isActive && <Arrow color={teal} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form panel */}
          <form onSubmit={onSubmit} style={{ background: paper, border: `1px solid ${rule}`, padding: isMobile ? 28 : 40 }}>
            <div style={{ ...mono, color: teal, marginBottom: 12 }}>
              // 02 ·{" "}
              {active.id === "sponsor" ? "feasibility request"
                : active.id === "fqhc" ? "partnership inquiry"
                : active.id === "patient" ? "patient inquiry"
                : active.id === "press" ? "press inquiry"
                : "general inquiry"}
            </div>
            <h3 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.015em" }}>
              {active.label}
            </h3>
            <p style={{ fontSize: 14.5, color: ink70, margin: "0 0 28px" }}>{active.help}</p>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <Field label="Your name" required>
                <input value={form.name} onChange={update("name")} required style={inputBase} placeholder="Jane Doe" />
              </Field>
              <Field label="Email" required>
                <input type="email" value={form.email} onChange={update("email")} required style={inputBase} placeholder="jane@org.com" />
              </Field>
            </div>

            {path !== "patient" && (
              <Field
                label={path === "fqhc" ? "Health center / organization" : path === "press" ? "Outlet" : "Company / organization"}
                required={path !== "other"}
              >
                <input
                  value={form.org}
                  onChange={update("org")}
                  style={inputBase}
                  placeholder={path === "fqhc" ? "e.g. Riverside Community Health" : "e.g. Acme Therapeutics"}
                />
              </Field>
            )}

            {path === "sponsor" && (
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, marginTop: 14 }}>
                <Field label="Therapeutic area">
                  <select value={form.area} onChange={update("area")} style={{ ...inputBase, appearance: "none" }}>
                    {AREAS.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </Field>
                <Field label="Phase">
                  <select value={form.phase} onChange={update("phase")} style={{ ...inputBase, appearance: "none" }}>
                    {PHASES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </Field>
              </div>
            )}

            <div style={{ marginTop: 14 }}>
              <Field
                label={path === "patient" ? "What would you like to know?" : path === "fqhc" ? "Anything we should know about your patient panel?" : "Tell us more"}
                required
              >
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={5}
                  style={{ ...inputBase, resize: "vertical", minHeight: 120, fontFamily: fontSans }}
                  placeholder={path === "patient" ? "Questions about a specific study, eligibility, or just a coordinator call…" : "A few sentences is fine. We'll follow up to learn more."}
                />
              </Field>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, color: ink55, fontSize: 13 }}>
              <input type="checkbox" id="consent" required defaultChecked style={{ accentColor: teal, width: 16, height: 16 }} />
              <label htmlFor="consent">I agree to be contacted by Veris Research about my inquiry.</label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              style={{
                marginTop: 24,
                background: status === "success" ? teal : navy,
                color: status === "success" ? navy : "#fff",
                border: "none", padding: "16px 24px", borderRadius: 4,
                fontSize: 15, fontWeight: 600,
                cursor: status === "submitting" || status === "success" ? "default" : "pointer",
                opacity: status === "submitting" ? 0.8 : 1,
                fontFamily: fontSans,
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "background 0.2s, opacity 0.2s",
              }}
            >
              {status === "success" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3.5 3.5L13 5" stroke={navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Got it — we'll be in touch within 48 hrs
                </>
              ) : status === "submitting" ? (
                <>Sending…</>
              ) : (
                <>Send message <Arrow color="#fff" /></>
              )}
            </button>

            {status === "error" && (
              <p role="alert" style={{ marginTop: 16, fontSize: 13.5, color: "#B3261E", fontWeight: 500 }}>
                {errorMsg}
              </p>
            )}

            <p style={{ marginTop: 18, fontSize: 12, color: ink55 }}>
              We respond to every inquiry within two business days. For patient
              safety concerns related to an active study, please call your study
              coordinator directly.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
