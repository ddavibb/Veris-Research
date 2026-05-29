export const TOKENS = {
  navy: "#09224A",
  navyDeep: "#04132B",
  teal: "#0F8EA3",
  tealDim: "#0C7585",
  paper: "#F6F7F9",
  cream: "#FAF8F4",
  ink70: "rgba(9, 34, 74, 0.72)",
  ink55: "rgba(9, 34, 74, 0.55)",
  ink40: "rgba(9, 34, 74, 0.4)",
  rule: "rgba(9, 34, 74, 0.1)",
  ruleStrong: "rgba(9, 34, 74, 0.2)",
  white: "#fff",
  fontSans: "'Space Grotesk', system-ui, sans-serif",
  fontMono: "'IBM Plex Mono', ui-monospace, monospace",
};

export const PAGES = [
  { id: "home",     label: "Home",          route: "" },
  { id: "patients", label: "Patients",      route: "patients" },
  { id: "sponsors", label: "Sponsors / CROs", route: "sponsors" },
  { id: "fqhc",    label: "FQHC Partners", route: "fqhc" },
  { id: "about",   label: "Mission",        route: "about" },
  { id: "contact", label: "Contact",        route: "contact" },
];

export const BP = 900;
export const BP_SMALL = 560;

export const mono = {
  fontFamily: TOKENS.fontMono,
  fontSize: 11.5,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};
