import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap, useInView } from '../hooks.js';
import { Nav, Footer, SiteLink } from '../components/Nav.jsx';
import { SectionHeader, CtaArcs } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';
import DiverseCohortSection from './DiverseCohort.jsx';

export default function SponsorsPage() {
  const { navy, teal, paper, ink70, ink55, rule, fontSans, fontMono } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();
  const [tableRef, tableInView] = useInView({ threshold: 0.15 });

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
          <div style={{ ...mono, color: teal, marginBottom: 28 }}>For Sponsors and CROs</div>
          <h1 style={{ fontWeight: 500, fontSize: isMobile ? 42 : 88, lineHeight: isMobile ? 1.02 : 0.96, letterSpacing: "-0.035em", margin: 0, maxWidth: 1180, textWrap: "balance" }}>
            A site network engineered for{" "}
            <span style={{ color: teal }}>diverse enrollment</span>{" "}
            — without operational compromise.
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.5, color: "rgba(255,255,255,0.78)", maxWidth: 740, margin: "32px 0 0", fontWeight: 300 }}>
            Veris partners with Federally Qualified Health Centers to deliver
            patient cohorts most Sponsors and CROs can't reach. We integrate with your
            study build, EDC, and monitoring cadence — and report directly
            against the diversity action plans the FDA now expects.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexDirection: isMobile ? "column" : "row" }}>
            <SiteLink to="contact?as=sponsor">
              <button style={{ background: teal, color: navy, border: "none", padding: "16px 24px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: fontSans }}>
                Inquire about partnering with Veris <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE — infographic */}
      <DiverseCohortSection />

      {/* COMPETITIVE EDGE */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// the competitive edge" title="Faster, because we control the room." />

          <p style={{ fontSize: isMobile ? 16 : 18, color: ink70, margin: isMobile ? "-12px 0 40px" : "-28px 0 64px", maxWidth: 760, lineHeight: 1.55 }}>
            Several sites answer to someone else — a hospital system, a research administration office, etc.
            Each layer adds days, weeks, or months to a single decision. Veris removes those layers.
          </p>

          {/* Comparison table */}
          <div ref={tableRef} style={{ background: "#fff", border: `1px solid ${rule}` }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1.2fr 1fr" : "1.2fr 1fr 1fr",
              padding: isMobile ? "16px 18px" : "20px 32px",
              borderBottom: `1px solid ${rule}`,
              background: paper,
              gap: isMobile ? 16 : 24,
              alignItems: "baseline",
            }}>
              {!isMobile && <div />}
              <div style={{ ...mono, color: ink55 }}>Industry baseline</div>
              <div style={{ ...mono, color: teal }}>Veris</div>
            </div>
            {[
              { metric: "Site activation",     baseline: "6–9 months",                        veris: "≤ 30 days" },
              { metric: "Contract turnaround", baseline: "8–12 weeks",                        veris: "5 business days" },
              { metric: "Decision-makers",     baseline: "Committees, departments, provosts",  veris: "Independent" },
              { metric: "Protocol amendments", baseline: "4–6 weeks to activate",             veris: "Same week" },
            ].map((row, i) => (
              <div key={row.metric} style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1.2fr 1fr" : "1.2fr 1fr 1fr",
                padding: isMobile ? "16px 18px" : "22px 32px",
                borderTop: `1px solid ${rule}`,
                gap: isMobile ? 16 : 24,
                alignItems: "center",
                opacity: tableInView ? 1 : 0,
                transform: tableInView ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 540ms cubic-bezier(0.22,1,0.36,1), transform 540ms cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${i * 90}ms`,
              }}>
                <div style={{
                  fontSize: isMobile ? 14.5 : 15, fontWeight: 500, color: navy, letterSpacing: "-0.005em",
                  gridColumn: isMobile ? "1 / -1" : "auto",
                  paddingBottom: isMobile ? 4 : 0,
                }}>{row.metric}</div>
                <div style={{ fontSize: 14, color: ink55, fontFamily: fontMono, letterSpacing: "0.01em" }}>{row.baseline}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: isMobile ? 15.5 : 17, fontWeight: 600, color: navy, letterSpacing: "-0.01em" }}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M1 5h11M8 1l4 4-4 4" stroke={teal} strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                  <span>{row.veris}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why tiles */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
            {[
              { tag: "// autonomy",   t: "One signature, one room.",        b: "No COI committee. No department head. No tech-transfer office. Our leadership can re-paper a contract term in the same meeting where it was raised." },
              { tag: "// pre-cleared", t: "Central IRB by default.",        b: "Submissions go out the day the master agreement is executed — not weeks after a local IRB queue." },
              { tag: "// full focus", t: "Your study, our full bandwidth.", b: "We're not splitting attention across thirty in-flight protocols. Founding-cohort sponsors get our entire operational team — direct access, real-time response, no queue." },
            ].map((c) => (
              <div key={c.t} style={{ background: "#fff", border: `1px solid ${rule}`, padding: isMobile ? 24 : 28, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ ...mono, color: teal }}>{c.tag}</div>
                <h3 style={{ fontSize: 20, fontWeight: 500, margin: 0, letterSpacing: "-0.01em", color: navy }}>{c.t}</h3>
                <p style={{ color: ink70, fontSize: 14, margin: 0, lineHeight: 1.55 }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC EXPERTISE */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <SectionHeader tag="// expertise" title="A broad therapeutic footprint, and the operational range to match." />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr", gap: isMobile ? 56 : 80, marginTop: isMobile ? 16 : 24 }}>

          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: 18, borderBottom: `1px solid ${rule}`, marginBottom: 22 }}>
              <h3 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 500, margin: 0, letterSpacing: "-0.015em", color: navy }}>Therapeutic expertise</h3>
              <span style={{ ...mono, color: ink55 }}>23 areas</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, columnCount: isMobile ? 1 : 2, columnGap: 40, fontSize: 15, color: navy, lineHeight: 1.95 }}>
              {[
                "Allergy / Immunology", "Cardiology", "Dermatology", "Endocrinology / Metabolic Disorders",
                "Family Practice", "Gastroenterology", "Internal Medicine", "MASH / MASLD",
                "Medical Devices", "Nephrology", "Neurology", "Obesity", "OB-GYN", "Oncology",
                "Ophthalmology", "Orthopedics", "Psychiatry", "Pulmonary and Respiratory",
                "Rheumatology", "Sleep Medicine", "Urology", "Vaccine", "Women's Health",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 10, breakInside: "avoid" }}>
                  <span style={{ color: teal, fontSize: 11, lineHeight: 1 }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: 18, borderBottom: `1px solid ${rule}`, marginBottom: 22 }}>
              <h3 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 500, margin: 0, letterSpacing: "-0.015em", color: navy }}>Trial capabilities</h3>
              <span style={{ ...mono, color: ink55 }}>study formats</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 15, color: navy, lineHeight: 1.95 }}>
              {["Combination products", "Devices", "Decentralized & hybrid", "Diagnostics", "Interventional", "Observational & registry"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ color: teal, fontSize: 11, lineHeight: 1 }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 48, fontSize: 14, color: ink55, maxWidth: 720 }}>
          We launch additional therapeutic areas in lockstep with our partner FQHCs' patient panels — please ask if you don't see yours listed.
        </p>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// engagement model" title="How we work with you." />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: isMobile ? 4 : 0, border: `1px solid ${rule}` }}>
            {[
              { n: "01", t: "Feasibility",  b: "Protocol review, demographic match, projected enrollment curve. Within 5 business days of NDA signature." },
              { n: "02", t: "Activation",   b: "Single-IRB submission, regulatory packets, system builds. ≤30 days from study award to site initiation visit." },
              { n: "03", t: "Execution",    b: "Active enrollment, monitoring cadence, query resolution. Specialized enrollment team, dedicated physicians for patient engagement, and retention plan." },
              { n: "04", t: "Closeout",     b: "Database lock, archival, and post-trial follow-up." },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: isMobile ? "28px 24px" : "32px 28px",
                borderRight: !isMobile && i < arr.length - 1 ? `1px solid ${rule}` : "none",
                borderBottom: isMobile && i < arr.length - 1 ? `1px solid ${rule}` : "none",
                background: "#fff",
              }}>
                <div style={{ fontSize: 48, color: teal, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 500, margin: "0 0 10px", letterSpacing: "-0.01em" }}>{s.t}</h3>
                <p style={{ color: ink70, fontSize: 13.5, margin: 0 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <CtaArcs teal={teal} />
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 64, alignItems: "center" }}>
          <div>
            <div style={{ ...mono, color: teal, marginBottom: 20 }}>// next step</div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 38 : 56, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              Have a protocol in feasibility?
              <br /><span style={{ color: teal }}>Let's run the match.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SiteLink to="contact?as=sponsor">
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
