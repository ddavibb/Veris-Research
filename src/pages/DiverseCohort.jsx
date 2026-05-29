import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap, useInView } from '../hooks.js';

export default function DiverseCohortSection() {
  const { navy, teal, fontSans, fontMono } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();
  const [vizRef, vizInView] = useInView({ threshold: 0.18 });

  const segments = [
    { key: "Hispanic / Latino",           pct: 49, color: "#4ECDC4" },
    { key: "White (non-Hispanic)",         pct: 25, color: "#8FE0D9" },
    { key: "Asian",                        pct: 15, color: "#BFEFE9" },
    { key: "Black / African American",     pct:  9, color: "#E0F5F2" },
    { key: "Other / multi / AIAN / NHPI", pct:  2, color: "rgba(255,255,255,0.35)" },
  ];

  const D = 280;
  const cx = D / 2, cy = D / 2;
  const r = 96;
  const sw = 42;
  const C = 2 * Math.PI * r;

  let cumulative = 0;
  const arcs = segments.map((s) => {
    const dash = (s.pct / 100) * C;
    const arc = { ...s, dash, offset: cumulative };
    cumulative += dash;
    return arc;
  });

  const monoStyle = { fontFamily: fontMono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" };

  const langSplit = [
    { label: "Speaks a language other than English at home", pct: 56, color: teal },
    { label: "English only", pct: 44, color: "rgba(255,255,255,0.18)" },
  ];

  return (
    <section style={{
      background: navy, color: "#fff",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      <svg viewBox="0 0 900 900" style={{
        position: "absolute",
        top: isMobile ? -260 : -180, right: isMobile ? -380 : -260,
        width: 900, height: 900, opacity: 0.18, pointerEvents: "none",
      }}>
        {[80, 150, 230, 320, 420, 530, 650].map((rr) => (
          <circle key={rr} cx="500" cy="400" r={rr} fill="none" stroke={teal} strokeOpacity={0.5} strokeWidth="1" />
        ))}
      </svg>

      <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          gap: 24, paddingBottom: 28, marginBottom: isMobile ? 48 : 64,
          borderBottom: "1px solid rgba(255,255,255,0.14)", flexWrap: "wrap",
        }}>
          <div>
            <div style={{ ...monoStyle, color: teal, marginBottom: 14 }}>// who we serve</div>
            <h2 style={{ fontWeight: 500, fontSize: isMobile ? 36 : 54, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.04, maxWidth: 880, textWrap: "balance" }}>
              A real-world cohort —{" "}
              <span style={{ color: teal }}>by design, not by outreach.</span>
            </h2>
          </div>
          <div style={{ ...monoStyle, color: "rgba(255,255,255,0.55)" }}>
            Los Angeles County · founding region
          </div>
        </div>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.95fr) minmax(0, 1.05fr)",
          gap: isMobile ? 56 : 88, alignItems: "start",
        }}>
          {/* Left — narrative + stats */}
          <div>
            <p style={{ fontSize: isMobile ? 16 : 18, color: "rgba(255,255,255,0.78)", lineHeight: 1.55, margin: 0, maxWidth: 540, fontWeight: 300 }}>
              Our partner FQHCs care for the people Los Angeles County actually
              looks like — the same patients clinical research has historically
              left out. No paid recruitment, no satellite sites, no parachute
              outreach. Just the population, where they already get care.
            </p>

            <div style={{ marginTop: 44, display: "grid", gap: 0, borderTop: "1px solid rgba(255,255,255,0.14)" }}>
              {[
                { v: "73%",    l: "of LA County residents identify as non-white." },
                { v: "≈ 1 in 3", l: "LA County residents were born outside the U.S." },
                { v: "200+",  l: "languages spoken across the county." },
              ].map((s) => (
                <div key={s.l} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr",
                  gap: isMobile ? 16 : 32, padding: isMobile ? "18px 0" : "22px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.14)", alignItems: "baseline",
                }}>
                  <div style={{ fontSize: isMobile ? 30 : 38, fontWeight: 500, color: teal, letterSpacing: "-0.025em", lineHeight: 1, minWidth: isMobile ? 110 : 150 }}>
                    {s.v}
                  </div>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.78)", margin: 0, lineHeight: 1.45, maxWidth: 380 }}>{s.l}</p>
                </div>
              ))}
            </div>

            <p style={{ ...monoStyle, color: "rgba(255,255,255,0.45)", fontSize: 10.5, marginTop: 32, lineHeight: 1.6, maxWidth: 520, textTransform: "none", letterSpacing: "0.04em" }}>
              Sources — U.S. Census Bureau, 2023 ACS 5-year estimates,
              Los Angeles County, CA; UCLA Clinical &amp; Translational Science
              Institute, "LA County Diversity."
            </p>
          </div>

          {/* Right — donut + language bar */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 52 }}>

            {/* Race / ethnicity donut */}
            <div>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.14)", marginBottom: 28,
              }}>
                <div style={{ ...monoStyle, color: "rgba(255,255,255,0.78)" }}>Race &amp; Ethnicity</div>
                <div style={{ ...monoStyle, color: "rgba(255,255,255,0.45)" }}>LA County, 2023</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 28 : 32, alignItems: "stretch" }}>
                <div style={{ position: "relative", width: isMobile ? 220 : 260, maxWidth: "100%", margin: "0 auto" }} ref={vizRef}>
                  <svg viewBox={`0 0 ${D} ${D}`} width="100%" height="auto">
                    <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={sw} />
                    {arcs.map((a, i) => (
                      <circle
                        key={i} cx={cx} cy={cy} r={r}
                        fill="none" stroke={a.color} strokeWidth={sw}
                        strokeDasharray={vizInView ? `${a.dash} ${C - a.dash}` : `0 ${C}`}
                        strokeDashoffset={-a.offset}
                        transform={`rotate(-90 ${cx} ${cy})`}
                        strokeLinecap="butt"
                        style={{
                          transition: "stroke-dasharray 720ms cubic-bezier(0.22, 1, 0.36, 1)",
                          transitionDelay: `${i * 130}ms`,
                        }}
                      />
                    ))}
                    <g style={{
                      opacity: vizInView ? 1 : 0,
                      transition: "opacity 480ms ease-out",
                      transitionDelay: `${arcs.length * 130 + 240}ms`,
                    }}>
                      <text x={cx} y={cy - 4} textAnchor="middle" fill="#fff"
                        style={{ fontFamily: fontSans, fontSize: 38, fontWeight: 500, letterSpacing: "-0.02em" }}>
                        9.7M
                      </text>
                      <text x={cx} y={cy + 22} textAnchor="middle" fill="rgba(255,255,255,0.55)"
                        style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: "0.12em" }}>
                        RESIDENTS
                      </text>
                    </g>
                  </svg>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", columnGap: 28, rowGap: 12, minWidth: 0 }}>
                  {arcs.map((a, i) => (
                    <div key={a.key} style={{
                      display: "grid", gridTemplateColumns: "auto minmax(0, 1fr) auto",
                      alignItems: "baseline", gap: 12,
                      opacity: vizInView ? 1 : 0,
                      transform: vizInView ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22,1,0.36,1)",
                      transitionDelay: `${arcs.length * 130 + 380 + i * 70}ms`,
                    }}>
                      <div style={{ width: 10, height: 10, background: a.color, flexShrink: 0, transform: "translateY(1px)" }} />
                      <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.35 }}>{a.key}</div>
                      <div style={{ fontFamily: fontMono, fontSize: 13, color: "#fff", fontVariantNumeric: "tabular-nums", letterSpacing: "0.04em" }}>{a.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages bar */}
            <div>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.14)", marginBottom: 24,
              }}>
                <div style={{ ...monoStyle, color: "rgba(255,255,255,0.78)" }}>Language at Home</div>
                <div style={{ ...monoStyle, color: "rgba(255,255,255,0.45)" }}>age 5+</div>
              </div>
              <div style={{ display: "flex", width: "100%", height: 14, marginBottom: 18 }}>
                {langSplit.map((l) => (
                  <div key={l.label} style={{ width: `${l.pct}%`, background: l.color, transition: "width 0.3s ease" }} />
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 14 : 32 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <div style={{ width: 10, height: 10, background: teal, transform: "translateY(2px)" }} />
                    <div style={{ fontSize: isMobile ? 26 : 30, fontWeight: 500, color: "#fff", letterSpacing: "-0.02em" }}>56%</div>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "6px 0 0 20px", lineHeight: 1.4 }}>
                    Speak a language other than English at home — Spanish, Tagalog,
                    Chinese, Korean, Armenian, Vietnamese, and 195+ more.
                  </p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <div style={{ width: 10, height: 10, background: "rgba(255,255,255,0.4)", transform: "translateY(2px)" }} />
                    <div style={{ fontSize: isMobile ? 26 : 30, fontWeight: 500, color: "#fff", letterSpacing: "-0.02em" }}>44%</div>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "6px 0 0 20px", lineHeight: 1.4 }}>
                    English only. The remaining majority is the population most
                    trials never reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
