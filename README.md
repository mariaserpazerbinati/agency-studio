# Portfolio one-page — Astro + Tailwind

Sito one-page a scroll continuo con nav fissa ad ancore, ispirato esteticamente a bronx.com.br.
Stack: Astro 7 (static output), Tailwind CSS v4, TypeScript strict.

## Comandi

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # build statica in ./dist
npm run preview  # anteprima della build di produzione
npm run astro check   # type-check
```

## Stato dei contenuti

Quasi tutto è stato sostituito con materiale reale. Resta aperto solo il punto 4.

1. ~~`src/data/site.ts`~~ — **fatto**: contenuti, numeri e recapiti verificati da Maria.
2. ~~video hero~~ — **fatto**: compressi da 18,65 MB a 1,9 MB (H.264) + 2,1 MB (VP9 WebM reale), senza traccia audio.
3. ~~poster hero~~ — **fatto**: estratta dal fotogramma a 1,5s del video.
4. **`public/og-image.jpg`** — **da rifare**: è ancora l'immagine di condivisione segnaposto generata automaticamente (1200×630). È ciò che appare quando il link viene condiviso.
5. ~~ritratto~~ — **fatto**. Nota: ritratto, logo, progetti e loghi clienti si risolvono leggendo il **contenuto della cartella**, non un nome fisso: puoi rinominarli o cambiarne l'estensione senza toccare il codice.
6. ~~loghi clienti~~ — **fatto**: quattro loghi reali, rifilati e uniformati di tono.
7. ~~progetti~~ — **fatto**: quattro progetti con immagini reali.
8. ~~`astro.config.mjs`~~ / ~~`robots.txt`~~ — **fatto**: impostati su `https://mariaserpa.netlify.app`. Da aggiornare in entrambi i file quando arriverà un dominio proprio.
10. ~~Formspree~~ — **sostituito da Netlify Forms**: nessun endpoint da configurare. Gli invii arrivano nel pannello Netlify (sezione *Forms*); le notifiche via email si attivano in *Project configuration → Notifications*. Invio di prova effettuato con esito positivo.

## Palette e colore accento

Definiti come CSS custom properties in `src/styles/global.css` (blocco `@theme`), quindi il cambio è un one-liner.
Default: palette chiara e avorio, tipografia serif ad alto contrasto (Bodoni Moda) per i titoli — sofisticato, non "agenzia growth".

```css
--color-bg: #f8f5ef;    /* avorio caldo */
--color-fg: #211d18;    /* quasi nero, mai nero puro */
--color-accent: #a8532f; /* <- cambia solo questa riga per il colore accento */
```

Due alternative cromatiche pronte da incollare al posto di `--color-accent`:

- **Verde salvia profondo** `#3f4b3b` — naturale, discreto, molto "editoriale".
- **Bordeaux profondo** `#6b2737` — più deciso ma sempre elegante.

Font: **Bodoni Moda** (variabile, serif ad altissimo contrasto) per i titoli, **Jost** (variabile, geometrico, peso 300) per il corpo del testo — entrambi self-hosted via `@fontsource`. Il corpo usa una crenatura leggermente stretta (`letter-spacing: -0.012em`, in `src/styles/global.css`).

C'è anche una fascia a contrasto scuro (`Statement.astro`) tra Progetti e Clienti, con i suoi token: `--color-ink`, `--color-ink-fg`, `--color-ink-muted`.

## Loghi clienti

I loghi vivono in `src/assets/clients/` come PNG a sfondo trasparente e passano da `astro:assets`
(conversione WebP alla dimensione di resa, densità 1x/2x). Per aggiungerne uno: metti il PNG lì e
aggiungi la riga in `clients` dentro `src/data/site.ts`, dove `logo` è il nome del file senza estensione.

Le proporzioni possono variare liberamente (le attuali vanno da 2:1 a 13:1): ogni logo riceve la
stessa **area ottica**, non le stesse dimensioni. Più un marchio è allungato, più si abbassa, così
il peso visivo resta costante. Vedi `misura()` in `Clients.astro`.

Direttive per i file: ritagliati a filo del segno (nessun margine vuoto), sfondo trasparente,
preferibilmente monocromatici, almeno 240px di altezza, sotto i 30KB.

## Sorgenti media

`media-source/` (escluso da git e dal deploy) conserva gli originali non compressi: video hero,
ritratto e i primi SVG dei loghi. Serve per rigenerare gli asset senza perdere qualità.
La compressione video usa `ffmpeg-static`, installato come dipendenza di sviluppo:

```sh
./node_modules/ffmpeg-static/ffmpeg -i media-source/hero-original.mp4 \
  -an -c:v libx264 -preset slow -crf 28 -movflags +faststart public/videos/hero.mp4
```

## Note tecniche

- **Video hero**: caricato pigro via `IntersectionObserver` (`src/components/Hero.astro`) — i `<source>` hanno `data-src`, il vero `src` viene impostato solo quando la sezione entra in viewport; il video va in pausa quando esce.
- **Count-up**: `IntersectionObserver` + `requestAnimationFrame` con easing quadratico su 2200ms, nessuna libreria (`src/components/Stats.astro`). L'HTML contiene già i valori finali: è il JS ad azzerarli prima di animare, così senza script i numeri restano corretti.
- **Marquee clienti**: animazione CSS pura (`@keyframes marquee-scroll`), nessun JS.
- **Immagini**: ottimizzate in AVIF/WebP da `astro:assets` per le immagini importate da `src/assets/` (progetti, ritratto); dimensioni esplicite ovunque per evitare CLS.
- **Font self-hosted**: `@fontsource-variable/bodoni-moda` (display) e `@fontsource-variable/jost` (body), con `font-display: swap` di default del pacchetto.
- **Smooth scroll**: `scroll-behavior: smooth` + `scroll-margin-top` su ogni `<section id>` per compensare l'header fisso (rispetta `prefers-reduced-motion`).
- **Nav**: fissa in alto, passa a sfondo sfocato dopo il primo scroll via `IntersectionObserver` su un sentinel da 1px; hamburger sotto 768px.
- **SEO**: meta tag completi + Open Graph/Twitter in `src/layouts/Layout.astro`, sitemap via `@astrojs/sitemap`, `robots.txt` in `public/`.

## Deploy su Netlify

`netlify.toml` è già configurato (`npm run build`, publish `dist/`, cache headers per asset/font/video statici).
Basta collegare il repo su Netlify — nessuna configurazione aggiuntiva richiesta (output `static`, nessun adapter server-side).

## Nota sull'ambiente di sviluppo

Node.js e npm non erano preinstallati su questa macchina: sono stati installati automaticamente via
[nvm](https://github.com/nvm-sh/nvm) (Node LTS, in `~/.nvm`, nessuna modifica a livello di sistema/sudo).
