export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Gerald Ribisch",
  tagline: "Gedanken und Notizen aus Wien",
  title: "Gerald Ribisch – Blog",
  description: "Persönlicher Blog von Gerald Ribisch mit Gedanken und Notizen aus Wien.",
  siteUrl: "https://geraldribisch.com",
  authorName: "Gerald Ribisch",
  email: "hi@geraldribisch.com",
  language: "de",
  dateLocale: "de-AT",
  locale: "de_AT",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "Persönlicher Blog mit Gedanken und Notizen. Neue Beiträge erscheinen, wenn es etwas zu sagen gibt.",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Neue Beiträge per E-Mail",
    description: "Eine E-Mail pro neuem Beitrag. Kein Spam, jederzeit abbestellbar.",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
    responseTime: "Antworten kommen meist innerhalb von zwei Werktagen.",
  },
  socials: [{ label: "RSS", href: "/rss.xml" }],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archiv", href: "/posts/" },
  { label: "Kategorien", href: "/categories/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [{ label: "RSS", href: "/rss.xml" }];
