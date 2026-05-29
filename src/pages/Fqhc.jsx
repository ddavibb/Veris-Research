import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap } from '../hooks.js';
import { Nav, Footer, SiteLink } from '../components/Nav.jsx';
import { SectionHeader, CtaArcs } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';

export default function FqhcPage() {
  const { navy, teal, paper, ink70, ink55, rule, fontSans } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();

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
          <circle cx="450" cy="450" r="44" fill="none" stroke={teal} strokeWidth="2" />
        </svg>

        <Nav variant="dark" />

        <div style={{ ...w, padding: isMobile ? "40px 20px 64px" : "60px 56px 100px", position: "relative", zIndex: 2 }}>
          <div style={{ ...mono, color: teal, marginBottom: 28 }}>For FQHC partners</div>
          <h1 style={{ fontWeight: 500, fontSize: isMobile ? 42 : 88, lineHeight: isMobile ? 1.02 : 0.96, letterSpacing: "-0.035em", margin: 0, maxWidth: 1180, textWrap: "balance" }}>
            Bring clinical research to your patients.{" "}
            <span style={{ color: teal }}>Without the burden.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.5, color: "rgba(255,255,255,0.78)", maxWidth: 740, margin: "32px 0 0", fontWeight: 300 }}>
            Becoming a Veris partner means advanced therapies for your patients,
            new stable revenue, and zero new regulatory burden on your team. We
            handle the rest.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexDirection: isMobile ? "column" : "row", justifyContent: "flex-start" }}>
            <SiteLink to="contact?as=fqhc">
              <button style={{ background: teal, color: navy, border: "none", padding: "16px 24px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: fontSans }}>
                Inquire about partnering with Veris <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <SectionHeader tag="// why partner" title="Three reasons FQHCs choose Veris." />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {[
            {
              tag: "Patient access",
              t: "Therapies your patients otherwise wouldn't see.",
              b: "Investigational treatments — including those for the chronic conditions FQHC populations carry disproportionately — at no cost to your patients or your clinic.",
            },
            {
              tag: "Diversified revenue",
              t: "A new, mission-aligned revenue stream.",
              b: "Partner clinics share in trial revenue alongside Veris. Most partner sites see meaningful new revenue inside year one.",
            },
            {
              tag: "Zero new burden",
              t: "We handle regulatory, ops, and budgeting.",
              b: "Veris manages all trial activities end-to-end, including regulatory, operations, sponsor engagements, contracting and budgeting.",
            },
          ].map((c, i) => (
            <div key={i} style={{ background: paper, padding: isMobile ? 28 : 36, border: `1px solid ${rule}`, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ ...mono, color: teal }}>// {c.tag}</div>
              <h3 style={{ fontSize: isMobile ? 22 : 24, fontWeight: 500, margin: 0, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{c.t}</h3>
              <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// how it works" title="From first call to first patient enrolled." />
          <div style={{ background: "#fff", border: `1px solid ${rule}` }}>
            {[
              { n: "01", t: "Discovery call",           time: "Week 0",   b: "30 minutes. We learn about your patient panel, your facility, and what your team can comfortably take on. Most FQHCs find they already have most of what's needed." },
              { n: "02", t: "Site readiness assessment", time: "Week 1–3", b: "We map out how and where clinical trial operations will occur, evaluate patient cohorts and conduct staff training." },
              { n: "03", t: "Partnership agreement",     time: "Week 4–6", b: "Clear, mission-aligned MOU covering revenue split, IP, branding, and data use. We've kept the lawyers' marks-up to a minimum so this stays a 2-week negotiation, not a 6-month one." },
              { n: "04", t: "Site integration",          time: "Week 6–10", b: "Veris carries the operational burden and we train your care teams on the services they will provide for enrolled patients." },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "120px 1fr 140px",
                gap: isMobile ? 8 : 32,
                padding: isMobile ? "28px 24px" : "32px 36px",
                borderBottom: i < arr.length - 1 ? `1px solid ${rule}` : "none",
                alignItems: "start",
              }}>
                <div style={{ fontSize: isMobile ? 36 : 48, color: teal, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: isMobile ? 19 : 22, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{s.t}</h4>
                  <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{s.b}</p>
                </div>
                <div style={{ ...mono, color: ink55, textAlign: isMobile ? "left" : "right", paddingTop: 6 }}>{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="xMaxYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {[60, 130, 220, 330, 460, 610].map((r) => (
            <circle key={r} cx="240" cy="250" r={r} fill="none" stroke={teal} strokeOpacity={0.22} strokeWidth="1" />
          ))}
          <circle cx="240" cy="250" r="16" fill={teal} />
        </svg>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 64, alignItems: "center" }}>
          <div>
            <div style={{ ...mono, color: teal, marginBottom: 20 }}>// partner with veris</div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 36 : 56, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              Curious whether your clinic is a fit?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 22, maxWidth: 500 }}>
              30 minutes on the phone is the only commitment. We'll be honest
              about whether we're the right partner for where you are today.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SiteLink to="contact?as=fqhc">
              <button style={{ width: "100%", background: teal, color: navy, border: "none", padding: "18px 22px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontSans }}>
                Inquire about partnering with Veris <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
