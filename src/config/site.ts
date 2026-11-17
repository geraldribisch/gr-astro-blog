export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Gerald Ribisch",
  tagline: "Gedanken und Notizen aus Wien",
  /** Seitentitel der Startseite; Unterseiten hängen " | name" an. */
  title: "Gerald Ribisch – Requirements Engineer based in Vienna",
  description: "Persönlicher Blog von Gerald Ribisch mit Gedanken und Notizen aus Wien.",
  siteUrl: "https://www.geraldribisch.com",
  authorName: "Gerald Ribisch",
  /** Rolle in der Visitenkarte und im JSON-LD (Person.jobTitle). */
  jobTitle: "Requirements Engineer",
  email: "hi@geraldribisch.com",
  language: "de",
  dateLocale: "de-AT",
  locale: "de_AT",
  socialImage: "/og-image.png",
  /** Einleitung in der Visitenkarte der Startseite. */
  about:
    "Ich übersetze zwischen Menschen, die etwas brauchen, und Menschen, die es bauen. Als Requirements Engineer in Wien sorge ich dafür, dass am Ende das entsteht, was gemeint war, und nicht nur das, was gesagt wurde. Hier schreibe ich über Anforderungen, Teams und alles dazwischen.",
  /**
   * Profile in der Visitenkarte und im Footer. `icon` ist ein Name aus
   * `LocalIcon.astro`. `sameAs: true` übernimmt den Link ins JSON-LD der Person.
   */
  socials: [
    { label: "GitHub", href: "https://github.com/geraldribisch/", icon: "github", sameAs: true },
    {
      label: "LinkedIn",
      href: "https://at.linkedin.com/in/gerald-ribisch-68a844131",
      icon: "linkedin",
      sameAs: true,
    },
    { label: "E-Mail", href: "mailto:hi@geraldribisch.com", icon: "envelope", sameAs: false },
  ] as const,
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archiv", href: "/posts/" },
  { label: "Kategorien", href: "/categories/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Impressum", href: "/impressum/" },
  { label: "Datenschutz", href: "/datenschutz/" },
  { label: "RSS", href: "/rss.xml" },
];
