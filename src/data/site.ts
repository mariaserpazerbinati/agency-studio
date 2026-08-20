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
  { href: "#servizi", label: "Servizi" },
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

// Cosa Maria fa materialmente. Era la lacuna più grossa: le competenze
// si intuivano dai progetti, non erano dichiarate da nessuna parte.
// Affermazione accostata all'elenco dei servizi: occupa la metà destra
// che l'elenco lascia vuota, e dice cosa cambia per il cliente.
// Il testo fra asterischi va in corsivo neretto: sposta gli asterischi
// per spostare l'enfasi, senza toccare il componente.
export const servicesClaim =
  "Immagina di diventare rilevante semplicemente raccontando *chi sei*.";

export const services = [
  "Sviluppo della brand image",
  "Costruzione della presenza online",
  "Gestione dei social media",
  "Creazione di contenuti multimediali",
  "Direzione della comunicazione",
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
  // `result` resta l'elenco degli interventi; `story` racconta il caso:
  // da dove si partiva e cosa è cambiato.
  result: string;
  story: string;
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
    story:
      "Aveva un logo e nient'altro intorno: non una linea grafica, né un modo di parlare. Ho costruito il linguaggio che mancava e ora ha una voce propria, riconosciuta nel suo settore.",
    image: "project-1",
  },
  {
    slug: "progetto-due",
    name: "Denise Alves Right Touch",
    year: "2025-2026",
    category: ["Social"],
    result: "Brand identity, media management",
    story:
      "Partiva da zero assoluto. Nessun account, nessuna vetrina. Chi la cerca oggi sono influencer e modelle da centinaia di migliaia di follower.",
    image: "project-2",
  },
  {
    slug: "progetto-tre",
    name: "Smery Hairstyle",
    year: "2025-2026",
    category: ["Social"],
    result: "Content creation, Social media management",
    story:
      "Qui non c'era da reinventare: l'identità esisteva già. Serviva chi la tenesse viva ogni giorno, con una gestione puntuale e contenuti cuciti sul suo carattere anziché su un format.",
    image: "project-3",
  },
  {
    slug: "cantina-villa-gianna",
    name: "Cantina Villa Gianna",
    year: "2023-2024",
    category: ["Social", "Editoriale"],
    result: "Brand Positioning, Media Management, Content Creation",
    story:
      "Voleva essere percepita per quanto vale davvero. Ho rifatto registro ed estetica senza mezze misure, con campagne interamente organiche: il pubblico che risponde adesso è di una fascia che prima restava fuori portata.",
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
    "Sono Maria Serpa. La comunicazione è la mia passione; il digital marketing e il social media management sono la mia formazione. Vivo la rete ogni giorno, ne interpreto i linguaggi, le evoluzioni e le opportunità, ma ogni progetto comincia dalla sua dimensione più autentica: il valore ancora inespresso di un brand, a partire dalla sua storia. ",
    "Lavoro esclusivamente sulla crescita organica, costruendo strategie proprietarie di cui curo personalmente ogni fase, dalla creazione e gestione dei contenuti all’analisi dei risultati. Nulla viene replicato o lasciato al caso: ogni scelta concorre a trasformare i tratti distintivi di un brand in una presenza riconoscibile, autorevole e rilevante.",
  ]
};

export const social = [
  { label: "Instagram", href: "https://www.instagram.com/mariaserpa.ze/" },

];

// Il form di contatto usa Netlify Forms: nessun endpoint né chiave da configurare.
// Gli invii arrivano nel pannello Netlify, sezione Forms del progetto.
// Le notifiche via email si attivano lì (Project configuration → Notifications).
