export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Gerald Ribisch",
  tagline: "Gedanken und Notizen aus Wien",
  title: "Gerald Ribisch – Blog",
  description: "Persönlicher Blog von Gerald Ribisch mit Gedanken und Notizen aus Wien.",
  siteUrl: "https://www.geraldribisch.com",
  authorName: "Gerald Ribisch",
  email: "hi@geraldribisch.com",
  language: "de",
  dateLocale: "de-AT",
  locale: "de_AT",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "Persönlicher Blog mit Gedanken und Notizen. Neue Beiträge erscheinen, wenn es etwas zu sagen gibt.",
  socials: [{ label: "RSS", href: "/rss.xml" }],
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
