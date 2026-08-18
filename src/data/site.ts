// Contenuti del sito. Numeri, nomi e recapiti sono stati verificati da Maria.

export const site = {
  name: "Maria Serpa",
  role: "Creative Strategist & Media Manager",
  city: "Milano",
  email: "mariiaserpa@icloud.com",
  description:
    "Comunicazione social e campagne promozionali organiche per far crescere personal brand e aziende — community vere, non solo numeri di vanità."
};

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#risultati", label: "Risultati" },
  { href: "#progetti", label: "Progetti" },
  { href: "#clienti", label: "Clienti" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#contatti", label: "Contatti" },
];

export const hero = {
  headline: "Storia che diventa presenza",
  subheadline:
    "Milano è la nostra casa. Living e benessere sono il nostro orizzonte. Trasformiamo identità di valore in presenze social capaci di crescere organicamente."
};

export const stats = [
  { value: 60, suffix: "K+", label: "Persone raggiunte" },
  { value: 100, suffix: "+", label: "Campagne social gestite" },
  { value: 4, suffix: "", label: "Anni di esperienza" },
  { value: 300, suffix: "+", label: "Creatività prodotte" },
];

export type Categoria = "Social" | "Editoriale";

// `image` è il nome del file (senza estensione) in src/assets/projects/.
// Se non corrisponde a nessun file, la build si ferma con un errore esplicito.
// `category` è un elenco: un progetto può appartenere a più categorie.
export type Project = {
  slug: string;
  name: string;
  year: string;
  category: Categoria[];
  result: string;
  image: string;
  // Punto di ancoraggio del ritaglio (valore CSS object-position).
  // Senza indicazione si ancora in alto, che protegge le teste dei soggetti.
  // Serve solo dove i soggetti stanno più in basso della media.
  focus?: string;
};

export const projects: Project[] = [
  {
    slug: "progetto-uno",
    name: "A.M. Design & Decor",
    year: "2024-2026",
    category: ["Social"],
    result: "Brand development, media strategy",
    image: "project-1",
  },
  {
    slug: "progetto-due",
    name: "Denise Alves Right Touch",
    year: "2025-2026",
    category: ["Social"],
    result: "Brand identity, media management",
    image: "project-2",
  },
  {
    slug: "progetto-tre",
    name: "Smery Hairstyle",
    year: "2025-2026",
    category: ["Social"],
    result: "Branding, communication management",
    image: "project-3",
  },
  {
    slug: "cantina-villa-gianna",
    name: "Cantina Villa Gianna",
    year: "2023-2024",
    category: ["Social", "Editoriale"],
    result: "Brand Positioning, Media Management, Content Creation",
    image: "project-4",
    // Il gruppo sta più in basso: ancorato in alto finiva schiacciato sul bordo
    // inferiore con troppo cielo sopra.
    focus: "center 35%",
  },
];

// `logo` è il nome del file (senza estensione) dentro `src/assets/clients/`.
// Passano da astro:assets, quindi vengono convertiti in WebP/AVIF alla dimensione
// esatta di resa. Per aggiungerne uno: metti il PNG lì e aggiungi la riga qui.
export const clients = [
  { name: "Smery Hairstyle", logo: "client-1" },
  { name: "Denise Alves", logo: "client-2" },
  { name: "A.M. Designer & Decor", logo: "client-3" },
  { name: "Cantina Villa Gianna", logo: "client-4" },
];

// Fascia a contrasto scuro tra Progetti e Clienti. Ogni riga si svela
// separatamente da sotto una mascheratura: spezzale dove vuoi la pausa.
export const statement = {
  lines: [
    "Ogni identità ha il suo passo. Io le disegno intorno l'immagine che la porterà lontano.",
  ],
  kicker: "Il metodo"
};

// Il ritratto non si dichiara qui: viene preso dal contenuto di
// src/assets/about/, così rinominarlo non rompe la pagina.
export const about = {
  positioning:
    "Strategie nate dall’identità, per un brand che vuole diventare inconfondibile",
  method: [
    "Lavoro esclusivamente sulla crescita organica, sviluppando per ogni progetto un impianto strategico proprietario pensato per i principali social media. Dalla creazione dei contenuti alla misurazione dei risultati, nulla viene replicato o lasciato al caso. Ogni scelta risponde soltanto a un obiettivo: elevare la percezione del brand, consolidando nel tempo il suo valore unico",
  ]
};

export const social = [
  { label: "Instagram", href: "https://www.instagram.com/mariaserpa.ze/" },

];

// Il form di contatto usa Netlify Forms: nessun endpoint né chiave da configurare.
// Gli invii arrivano nel pannello Netlify, sezione Forms del progetto.
// Le notifiche via email si attivano lì (Project configuration → Notifications).
