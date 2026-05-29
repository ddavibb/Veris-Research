import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap } from '../hooks.js';
import { Nav, Footer, SiteLink } from '../components/Nav.jsx';
import { SectionHeader, CtaArcs } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';

export default function AboutPage() {
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
          <div style={{ ...mono, color: teal, marginBottom: 28 }}>Mission</div>
          <h1 style={{ fontWeight: 500, fontSize: isMobile ? 42 : 88, lineHeight: isMobile ? 1.02 : 0.96, letterSpacing: "-0.035em", margin: 0, maxWidth: 1180, textWrap: "balance" }}>
            Medicine should move forward{" "}
            <span style={{ color: teal }}>with everyone in the room</span>{" "}
            — not just whoever's closest to the door.
          </h1>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "240px 1fr", gap: isMobile ? 16 : 64 }}>
          <div style={{ ...mono, color: ink55, paddingTop: isMobile ? 0 : 6 }}>// the problem</div>
          <div style={{ maxWidth: 820 }}>
            <p style={{ fontSize: isMobile ? 22 : 28, lineHeight: 1.35, letterSpacing: "-0.015em", margin: 0, fontWeight: 400, color: navy }}>
              The drugs that come out of clinical trials are tested,
              overwhelmingly, on populations that don't look like the ones who
              will eventually take them.
            </p>
            <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 28, lineHeight: 1.6 }}>
              Black, Latino, Native American, rural, low-income, and non-English-speaking
              communities are systematically underrepresented in U.S. clinical research.
              This isn't a small gap. In some therapeutic areas, fewer than one in twenty
              trial participants come from the communities that ultimately carry the
              highest disease burden.
            </p>
            <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 18, lineHeight: 1.6 }}>
              The cost of that gap is borne, ultimately, by the patients themselves —
              in worse outcomes, in delayed access, in drugs prescribed without the
              evidence that they work the same way for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* STAT CALLOUTS */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 32 : 56 }}>
            {[
              { k: "75%",    v: "of U.S. clinical trial participants are non-Hispanic white, despite that group representing about 58% of the population." },
              { k: "<2%",   v: "of FDA-approved drugs over the last decade had pivotal trials hitting the agency's representativeness expectations." },
              { k: "1 in 11", v: "Americans receive care at a Federally Qualified Health Center — almost none of which currently offer access to research." },
            ].map((s, i) => (
              <div key={i} style={{ borderTop: `2px solid ${teal}`, paddingTop: 28 }}>
                <div style={{ fontSize: isMobile ? 56 : 80, fontWeight: 500, color: teal, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 24 }}>{s.k}</div>
                <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.55 }}>{s.v}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, ...mono, color: "rgba(255,255,255,0.4)" }}>
            // sources: FDA Drug Trials Snapshots (2014–2024); HRSA UDS health center data
          </div>
        </div>
      </section>

      {/* OUR ANSWER */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "240px 1fr", gap: isMobile ? 16 : 64 }}>
          <div style={{ ...mono, color: ink55, paddingTop: isMobile ? 0 : 6 }}>// our answer</div>
          <div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 32 : 52, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 900, textWrap: "balance" }}>
              Don't ask underrepresented communities to come to research.
              <br />
              <span style={{ color: teal }}>Bring research to where they already are.</span>
            </h2>
            <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 28, maxWidth: 780, lineHeight: 1.6 }}>
              Federally Qualified Health Centers serve one in eleven Americans — patient
              panels that are overwhelmingly the communities under-represented in research today.
            </p>
            <p style={{ fontSize: isMobile ? 15.5 : 17, color: ink70, marginTop: 18, maxWidth: 780, lineHeight: 1.6 }}>
              Veris is an independent clinical research site, partnering with FQHCs to bring trials
              to the communities they already serve. The clinics keep the trusted relationships with
              patients; sponsors enroll real-world populations; patients gain access to novel therapies.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// principles" title="What we believe, in writing." />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {[
              { t: "Safety, without compromise.", b: "Every protocol clears ICH-GCP and our internal safety bar before a single participant enrolls. Community access never means lower standards." },
              { t: "Access, by design.", b: "Research happens inside the clinics our patients already trust. No new transportation. No new system. No new barrier." },
              { t: "Trust, by default.", b: "Plain-language consent, multilingual coordinators, and post-trial care continuity — every patient, every study, every time." },
              { t: "Rigor, without apology.", b: "Source-verified data, monitor-ready operations, GCP-rigorous timelines. Sponsors who work with us shouldn't have to choose between diversity and quality." },
              { t: "Mission, not margin.", b: "Partner-clinic revenue, 340B integrity, and HRSA scope alignment are non-negotiables — verified by outside counsel on every deal." },
              { t: "Voice, given back.", b: "Communities should see, hear, and shape the research that's being built for them — through advisory councils, plain-language reporting, and post-trial follow-through." },
            ].map((p) => (
              <div key={p.t} style={{ background: "#fff", border: `1px solid ${rule}`, padding: isMobile ? 28 : 36 }}>
                <h3 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{p.t}</h3>
                <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <CtaArcs teal={teal} />
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 880 }}>
            <div style={{ ...mono, color: teal, marginBottom: 20 }}>// what's next</div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 38 : 56, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              The next ten years of medicine will be built somewhere.
              <br /><span style={{ color: teal }}>We'd like it to be built with everyone.</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexDirection: isMobile ? "column" : "row", flexWrap: "wrap" }}>
            <SiteLink to="contact">
              <button style={{ background: teal, color: navy, border: "none", padding: "16px 26px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: fontSans, display: "inline-flex", alignItems: "center", gap: 10 }}>
                Get in touch <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
