Metti qui i file video dell'hero, con questi nomi esatti (referenziati da `src/components/Hero.astro`):

- `hero.webm` — formato primario, compresso VP9/AV1
- `hero.mp4` — fallback H.264/AAC

Consigli tecnici:
- Muto (nessuna traccia audio necessaria, il video è `muted`)
- Loop di 8–15s, peso consigliato sotto i 4–6 MB per la versione mobile
- Se serve una versione mobile più leggera, valuta due sorgenti diverse con `<picture>`-style media query sul tag `<source>` (`media="(max-width: 767px)"`)

Finché questi file non ci sono, la sezione hero mostra solo la poster image
(`public/images/hero/hero-poster.jpg`, anch'essa un placeholder da sostituire).
