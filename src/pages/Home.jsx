import { useState, useEffect } from 'react';
import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap } from '../hooks.js';
import { Nav, Footer, SiteLink } from '../components/Nav.jsx';
import { SectionHeader, ArcsMotif, CtaArcs } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';

export default function HomePage() {
  const { navy, teal, paper, ink70, ink55, rule, fontSans, fontMono } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();
  const [heroDrawn, setHeroDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroDrawn(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ width: "100%", background: "#fff", color: navy, fontFamily: fontSans, fontSize: 15.5, lineHeight: 1.55 }}>

      {/* HERO */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 900 900" style={{
          position: "absolute",
          top: isMobile ? -200 : -120,
          right: isMobile ? -380 : -180,
          width: isMobile ? 700 : 1000, height: isMobile ? 700 : 1000,
          opacity: 0.9, pointerEvents: "none",
        }}>
          <defs>
            <radialGradient id="homeBgFade" cx="0.5" cy="0.5">
              <stop offset="0%" stopColor={teal} stopOpacity="0.18" />
              <stop offset="60%" stopColor={teal} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="450" cy="450" r="450" fill="url(#homeBgFade)"
            style={{ opacity: heroDrawn ? 1 : 0, transition: "opacity 1100ms ease-out" }}
          />
          {[80, 140, 210, 290, 380, 480, 590, 710].map((rad, i) => (
            <circle key={rad} cx="450" cy="450" r={rad}
              fill="none" stroke={teal} strokeOpacity={0.3} strokeWidth="1"
              style={{
                opacity: heroDrawn ? 1 : 0,
                transformBox: "fill-box", transformOrigin: "center",
                transform: heroDrawn ? "scale(1)" : "scale(0.94)",
                transition: "opacity 720ms cubic-bezier(0.22,1,0.36,1), transform 920ms cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${120 + i * 70}ms`,
              }}
            />
          ))}
          <circle cx="450" cy="450" r="22" fill={teal}
            style={{
              opacity: heroDrawn ? 1 : 0,
              transformBox: "fill-box", transformOrigin: "center",
              transform: heroDrawn ? "scale(1)" : "scale(0.3)",
              transition: "opacity 500ms ease, transform 720ms cubic-bezier(0.34,1.4,0.64,1)",
              transitionDelay: "40ms",
            }}
          />
          <circle cx="450" cy="450" r="44" fill="none" stroke={teal} strokeWidth="2"
            style={{
              opacity: heroDrawn ? 1 : 0,
              transformBox: "fill-box", transformOrigin: "center",
              transform: heroDrawn ? "scale(1)" : "scale(0.6)",
              transition: "opacity 700ms ease-out, transform 840ms cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: "180ms",
            }}
          />
        </svg>

        <Nav variant="dark" />

        <div style={{ ...w, padding: isMobile ? "40px 20px 64px" : "80px 56px 120px", position: "relative", zIndex: 2 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "auto 1fr auto",
            gap: isMobile ? 12 : 28,
            alignItems: "center", marginBottom: isMobile ? 28 : 40,
          }}>
            <span style={{ ...mono, color: teal }}>V—01 · Founding cohort</span>
            {!isMobile && <span style={{ flex: 1, height: 1, background: "rgba(15,142,163,0.4)" }} />}
            <span style={{ ...mono, color: "rgba(255,255,255,0.5)" }}>Independent · GCP-aligned</span>
          </div>

          <h1 style={{
            fontFamily: fontSans, fontWeight: 500,
            fontSize: isMobile ? 44 : 108,
            lineHeight: isMobile ? 1.02 : 0.92,
            letterSpacing: "-0.035em",
            margin: 0, maxWidth: 1180, textWrap: "balance",
          }}>
            Clinical research,{isMobile ? " " : <br />}
            engineered for the <span style={{ color: teal }}>communities</span>{isMobile ? " " : <br />}
            it was meant to serve.
          </h1>

          <div style={{ marginTop: isMobile ? 32 : 52 }}>
            <p style={{ fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: "rgba(255,255,255,0.78)", maxWidth: 760, margin: 0, fontWeight: 300 }}>
              Veris is a new kind of clinical trial site, passionately partnered with the{" "}
              <a
                href="https://www.healthcare.gov/glossary/federally-qualified-health-center-fqhc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", borderBottom: "1px dotted rgba(255,255,255,0.55)", textDecoration: "none" }}
                title="Federally Qualified Health Center — community-based primary care providers receiving HRSA funding to serve medically underserved populations."
              >
                Federally Qualified Health Centers
              </a>{" "}
              that already care for the populations most underrepresented in research.
              We meet the highest safety and data standards in the industry — and
              bring novel therapies to patients who've never had access to them before.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", position: "relative", zIndex: 2 }}>
          <div style={{
            ...w,
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            padding: isMobile ? "24px 20px" : "32px 56px",
            gap: isMobile ? "24px 16px" : 0,
          }}>
            {[
              { k: "1 in 11",   v: "Americans served by FQHCs" },
              { k: "≈ 63%",     v: "of FQHC patients identify as racial or ethnic minorities" },
              { k: "50+ years", v: "combined trial operations across our founding team" },
              { k: "100%",      v: "of protocols undergo independent safety review" },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: isMobile ? 0 : 24,
                borderLeft: isMobile ? "none" : (i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)"),
                paddingLeft: isMobile ? 0 : (i === 0 ? 0 : 32),
              }}>
                <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 500, color: teal, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.k}</div>
                <div style={{ ...mono, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.4 }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div style={{
            ...w,
            padding: isMobile ? "0 20px 20px" : "0 56px 18px",
            ...mono,
            fontSize: 10.5,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.04em",
            textTransform: "none",
            lineHeight: 1.6,
          }}>
            Sources — HRSA Uniform Data System, National Health Center Data (2023);
            internal records on founding-team experience and protocol-review policy.
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "240px 1fr", gap: isMobile ? 16 : 64 }}>
          <div style={{ ...mono, color: ink55, paddingTop: isMobile ? 0 : 18 }}>// mission</div>
          <div>
            <h2 style={{
              fontFamily: fontSans, fontWeight: 400,
              fontSize: isMobile ? 32 : 56,
              lineHeight: 1.08, margin: 0,
              letterSpacing: "-0.025em", maxWidth: 1000, textWrap: "balance",
            }}>
              We're building the clinical research site that <span style={{ color: teal }}>belongs</span> inside community medicine — not adjacent to it.
            </h2>
            <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 24, maxWidth: 780, lineHeight: 1.6 }}>
              The drugs that come out of clinical trials are tested mostly on populations that don't look like the ones who'll take them. We're changing where research happens, who has access to it, and who shapes its science — without compromising a single safety standard.
            </p>
            <SiteLink to="about">
              <span style={{ color: teal, fontWeight: 600, fontSize: 15, marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Read our full mission <Arrow color={teal} />
              </span>
            </SiteLink>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px" }}>
          <SectionHeader tag="// capabilities" title="What a Veris site delivers." right="06 disciplines" />
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 0,
            border: `1px solid ${rule}`, background: "#fff",
          }}>
            {[
              { idx: "01", t: "Regulatory & IRB", d: "Single-IRB submissions, FDA Form 1572s, sponsor-aligned regulatory packets — handled end-to-end." },
              { idx: "02", t: "Protocol Operations", d: "Source-verified eCRF entry, monitor-ready binders, real-time query resolution from a dedicated CRC team." },
              { idx: "03", t: "Diverse Recruitment", d: "Enrollment from the patient panels FQHCs already serve — Medicaid, dual-eligible, rural and multilingual cohorts." },
              { idx: "04", t: "Pharmacy & IP", d: "Temperature-monitored IP storage, randomization, accountability — handled in-network with FQHC pharmacies where possible." },
              { idx: "05", t: "Safety & Pharmacovigilance", d: "24/7 PI coverage, SAE reporting within sponsor SLAs, independent monthly safety review." },
              { idx: "06", t: "Community Engagement", d: "Plain-language consent, multilingual coordinators, and post-trial care continuity — every time." },
            ].map((c, i, arr) => (
              <div key={c.idx} style={{
                padding: isMobile ? "28px 22px" : "36px 32px",
                borderRight: isMobile ? "none" : (i % 3 !== 2 ? `1px solid ${rule}` : "none"),
                borderBottom: isMobile
                  ? (i < arr.length - 1 ? `1px solid ${rule}` : "none")
                  : (i < 3 ? `1px solid ${rule}` : "none"),
                minHeight: isMobile ? 0 : 240,
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ ...mono, color: teal, marginBottom: 16 }}>{c.idx}</div>
                <h3 style={{ fontWeight: 500, fontSize: 22, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{c.t}</h3>
                <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <SectionHeader tag="// pathways" title="Pick your path." />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
          {[
            { tag: "01 / patients", to: "patients", title: "I might be eligible for a study.", body: "If you're a patient at one of our partner FQHCs, you may qualify for a clinical trial. We'll walk you through what that means — in plain language, in the language you speak.", cta: "Find current studies" },
            { tag: "02 / sponsors", to: "sponsors", title: "I need a site that delivers diverse cohorts.", body: "Veris enrolls patient populations most Sponsors and CROs can't reach. We integrate with your study build, EDC, and monitoring cadence — and report against the diversity action plans the FDA now expects.", cta: "Request capabilities" },
            { tag: "03 / fqhcs",   to: "fqhc",    title: "We want to bring research to our clinic.", body: "Becoming a Veris partner site means new revenue, advanced therapies for your patients, and zero new regulatory burden on your team. We handle the rest.", cta: "Explore partnership" },
          ].map((c, i) => (
            <SiteLink to={c.to} key={i}>
              <div style={{
                background: navy, color: "#fff",
                padding: isMobile ? "32px 28px" : "36px 32px",
                display: "flex", flexDirection: "column",
                minHeight: isMobile ? 0 : 380, height: "100%",
              }}>
                <div style={{ ...mono, color: teal, marginBottom: 32 }}>{c.tag}</div>
                <h3 style={{ fontWeight: 500, fontSize: isMobile ? 22 : 26, lineHeight: 1.15, margin: "0 0 18px", letterSpacing: "-0.015em" }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14.5, margin: 0, flex: 1 }}>{c.body}</p>
                <span style={{ color: teal, fontWeight: 600, fontSize: 14, marginTop: 32, display: "inline-flex", alignItems: "center", gap: 8, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20 }}>
                  {c.cta} <Arrow color={teal} />
                </span>
              </div>
            </SiteLink>
          ))}
        </div>
      </section>

      {/* SAFETY */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 40 : 96, alignItems: "center" }}>
            <div>
              <div style={{ ...mono, color: teal, marginBottom: 14 }}>// safety standard</div>
              <h2 style={{ fontWeight: 500, fontSize: isMobile ? 36 : 56, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Community access{isMobile ? " " : <br />}
                never means{isMobile ? " " : <br />}
                lower standards.
              </h2>
              <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 24, maxWidth: 540, lineHeight: 1.6 }}>
                Every Veris protocol is reviewed against ICH-GCP and our own internal safety bar before a single participant is enrolled. Our PIs hold full medical accountability — not just administrative oversight.
              </p>
            </div>
            <div style={{ background: "#fff", border: `1px solid ${rule}`, padding: isMobile ? 24 : 40 }}>
              {[
                ["ICH-GCP E6(R3)", "Aligned"],
                ["21 CFR Part 11", "Compliant systems"],
                ["HIPAA + state PHI", "End-to-end safeguards"],
                ["IRB / Central IRB", "Pre-credentialed"],
                ["Independent safety review", "Monthly cadence"],
                ["SAE reporting SLA", "< 24 hrs to sponsor"],
              ].map(([k, v], i) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, padding: "14px 0", borderBottom: i < 5 ? `1px solid ${rule}` : "none", alignItems: "center" }}>
                  <span style={{ fontFamily: fontMono, fontSize: 12.5, color: navy, fontWeight: 500 }}>{k}</span>
                  <span style={{ fontSize: 12.5, color: teal, fontWeight: 600, textAlign: "right" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <CtaArcs teal={teal} />
        <div style={{
          ...w,
          padding: isMobile ? "64px 20px" : "96px 56px",
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr",
          gap: isMobile ? 40 : 64, alignItems: "center",
        }}>
          <div>
            <div style={{ ...mono, color: teal, marginBottom: 20 }}>// get in touch</div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 40 : 64, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              A site network rooted in the communities that medicine forgot.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SiteLink to="sponsors">
              <button style={{ width: "100%", background: teal, color: navy, border: "none", padding: "18px 22px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontSans }}>
                Sponsors & CROs <Arrow color={navy} />
              </button>
            </SiteLink>
            <SiteLink to="fqhc">
              <button style={{ width: "100%", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "18px 22px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontSans }}>
                FQHC partners <Arrow color="#fff" />
              </button>
            </SiteLink>
            <SiteLink to="patients">
              <button style={{ width: "100%", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "18px 22px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: fontSans }}>
                Patients <Arrow color="#fff" />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
