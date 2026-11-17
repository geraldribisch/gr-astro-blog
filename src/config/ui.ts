/**
 * Alle Texte der Oberfläche an einer Stelle. Seitenname, Beschreibung und
 * Navigation liegen in `site.ts`, Kategorien in `categories.ts`.
 *
 * Begriffe einheitlich halten: Beitrag/Beiträge, Empfohlen, Lesezeit, Kategorien,
 * Archiv, Suche, Keine Treffer.
 */

/** "1 Beitrag" / "3 Beiträge" */
const posts = (count: number) => `${count} ${count === 1 ? "Beitrag" : "Beiträge"}`;
/** "1 Kategorie" / "3 Kategorien" */
const categoriesCount = (count: number) => `${count} ${count === 1 ? "Kategorie" : "Kategorien"}`;

export const ui = {
  common: {
    post: "Beitrag",
    posts: "Beiträge",
    postCount: posts,
    category: "Kategorie",
    categories: "Kategorien",
    archive: "Archiv",
    featured: "Empfohlen",
    /** "5 Min. Lesezeit" */
    readingTime: (minutes: number) => `${minutes} Min. Lesezeit`,
    /** Zwischen Label und Datum auf der großen Karte (variant "lead"). */
    dateLabelSeparator: " — ",
  },

  layout: {
    skipLink: "Zum Inhalt springen",
    rssTitle: (name: string) => `RSS-Feed von ${name}`,
    themeToggle: "Hell/Dunkel umschalten",
  },

  header: {
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    searchOpen: "Suche",
    menuOpen: "Navigationsmenü öffnen",
    menuClose: "Navigationsmenü schließen",
    menuLabel: "Navigationsmenü",
  },

  /** Suchfenster im Header (Strg K oder /). */
  searchDialog: {
    title: (name: string) => `${name} durchsuchen`,
    formLabel: "Suche",
    inputLabel: "Beiträge durchsuchen",
    placeholder: "Beiträge durchsuchen …",
    close: "Suche schließen",
    resultsHeading: "Treffer",
    keyNavigate: "Navigieren",
    keyOpen: "Öffnen",
    keyToggle: "Ein/Aus",
    shortcutPc: "Strg K",
    shortcutMac: "⌘ K",
    enterHint: "Enter zeigt alle Treffer",
  },

  /**
   * Texte für die Suche im Browser (Suchfenster und Suchseite). Die Skripte
   * setzen {count} und {query} ein, deshalb hier Platzhalter statt Funktionen.
   */
  searchResults: {
    hits: "{count} Treffer für „{query}“.",
    noResults: "Keine Treffer für „{query}“.",
    noResultsHint: "Versuche es mit einem Titel, einer Kategorie oder einem Autor.",
  },

  searchPage: {
    title: "Suche",
    description: (name: string) => `Alle Beiträge auf ${name} durchsuchen.`,
    eyebrow: "Suche",
    heading: "Beiträge durchsuchen",
    formLabel: "Beiträge durchsuchen",
    inputLabel: "Suchbegriff",
    placeholder: "Titel, Kategorie oder Autor …",
    submit: "Suchen",
  },

  home: {
    socialNav: "Profile und Kontakt",
    portraitAlt: (name: string) => `Porträt von ${name}`,
    latest: "Neueste Beiträge",
    noPosts: "Bald erscheinen hier die ersten Beiträge.",
    allPosts: "Alle Beiträge",
  },

  post: {
    /** "Von Gerald Ribisch in" — danach folgt der Link zur Kategorie. */
    byline: (author: string) => `Von ${author} in`,
    updated: "Aktualisiert am",
    postNav: "Beitragsnavigation",
    previous: "Vorheriger Beitrag",
    next: "Nächster Beitrag",
    related: "Weitere Beiträge",
    copy: "Kopieren",
    copied: "Kopiert",
    copiedAnnouncement: "Code kopiert",
    copyError: "Fehler",
    copyErrorAnnouncement: "Kopieren fehlgeschlagen",
    codeTabFallback: (index: number) => `Variante ${index}`,
  },

  callout: {
    note: "Hinweis",
    tip: "Tipp",
    warning: "Warnung",
    danger: "Wichtig",
  },

  archive: {
    title: (page: number) => (page === 1 ? "Archiv" : `Archiv – Seite ${page}`),
    description: (name: string) => `Alle Beiträge auf ${name}.`,
    eyebrow: "Archiv",
    heading: "Alle Beiträge",
    summary: (total: number, page: number, lastPage: number) =>
      `${posts(total)}, neueste zuerst. Seite ${page} von ${lastPage}.`,
    pagination: "Seitennavigation Archiv",
    newer: "Neuere",
    older: "Ältere",
    pageOf: (page: number, lastPage: number) => `Seite ${page} / ${lastPage}`,
  },

  categoriesPage: {
    title: "Kategorien",
    description: (name: string) => `Alle Kategorien auf ${name} mit Anzahl der Beiträge.`,
    eyebrow: "Übersicht",
    heading: "Kategorien",
    summary: (postTotal: number, categoryTotal: number) =>
      `${posts(postTotal)} in ${categoriesCount(categoryTotal)}.`,
  },

  categoryPage: {
    description: (text: string, name: string, category: string) =>
      `${text} Beiträge auf ${name} in der Kategorie ${category}.`,
    eyebrow: "Kategorie",
    allCategories: "Alle Kategorien",
  },

  notFound: {
    title: "Seite nicht gefunden",
    description: "Die angeforderte Seite wurde nicht gefunden.",
    eyebrow: "Fehler 404",
    heading: "Seite nicht gefunden",
    text: "Der Beitrag wurde vielleicht verschoben, oder die Adresse ist falsch geschrieben.",
    toHome: "Zur Startseite",
    toArchive: "Zum Archiv",
  },

  /** Footer und Visitenkarte der Startseite teilen sich `socialLabel`. */
  footer: {
    copyright: (year: number) => `© ${year} Alle Rechte vorbehalten.`,
    nav: "Fußzeilen-Navigation",
    /** "Gerald Ribisch auf GitHub", "E-Mail an Gerald Ribisch" */
    socialLabel: (name: string, network: string) =>
      network === "E-Mail" ? `E-Mail an ${name}` : `${name} auf ${network}`,
    builtWith: "Erstellt mit",
  },
} as const;
