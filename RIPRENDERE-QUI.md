# Riprendere il lavoro

Nota di passaggio per una nuova sessione. Il sito è **online e funzionante**.

## Dove vive

- **Online:** https://mariaserpa.netlify.app
- **Repository:** https://github.com/mariaserpazerbinati/agency-studio
- **Cartella locale:** `~/Desktop/Creatività/portfolio-site`

## Come si pubblica

GitHub è collegato a Netlify: **non si trascina più nessuna cartella**.
Il ciclo è: modifica → commit → *Push origin* da GitHub Desktop → Netlify
ricostruisce e pubblica da solo in meno di un minuto.

La costruzione avviene su Linux, che **distingue le maiuscole nei nomi file**
(macOS no). Per questo immagini e loghi non si importano per nome esatto.

## Convenzioni da non rompere

**Le immagini si risolvono leggendo la cartella, non un nome fisso.**
Vale per ritratto, logo, progetti e loghi clienti. Il confronto ignora le
maiuscole. Puoi rinominare o cambiare estensione ai file senza toccare il
codice. Se un riferimento in `site.ts` non trova il file, **la build si ferma**
con un messaggio che elenca le immagini disponibili: è voluto, evita di
pubblicare un progetto senza immagine o con quella sbagliata.

**Ritaglio delle foto progetti:** ancorato in alto (`object-top`), perché in
tutte le foto i soggetti hanno la testa nella metà superiore. Il campo `focus`
serve per le eccezioni — Cantina Villa Gianna usa `center 35%`.

**Enfasi nel claim dei servizi:** il testo fra asterischi va in corsivo
neretto. Sposta gli asterischi in `site.ts` per spostare l'enfasi.

**Contrasto dell'hero:** il testo è avorio su velo scuro. Il velo è calibrato
sulla fascia dove cade il testo (14–34% dell'altezza). Se cambi la lunghezza
del sottotitolo il blocco si sposta: verifica che resti coperto.

## Comandi

```sh
npm run dev      # http://localhost:4321
npm run build
npx astro check
```

`ffmpeg-static` è installato come dipendenza di sviluppo, per comprimere video.
Gli originali non compressi stanno in `media-source/`, esclusa da git e dal
deploy.

## Cosa resta aperto

1. **Immagine di condivisione** (`public/og-image.jpg`) — è ancora il
   segnaposto generato automaticamente. È ciò che appare condividendo il link.
2. **Il logo in barra sul video** — togliendo il velo dalla parte alta, su
   inquadrature chiare il contrasto scende a 1,72:1. Serve una versione chiara
   del logo, oppure un velo appena accennato dietro la sola barra.
3. **Risoluzione del video hero** — la sorgente è 1280×720 e viene mostrata a
   tutto schermo. La compressione non è il problema (somiglianza 98,6%
   all'originale): serve una sorgente più grande, 1080p o superiore.
4. **Persona grammaticale incoerente** — l'hero dice "Milano è la nostra casa"
   e "Trasformiamo" (plurale), il resto del sito è in prima persona singolare
   ("Lavoro", "Ho costruito", "Hanno lavorato con me"). Va sciolta.
5. **Testimonianze** — non ce ne sono ancora. È il tassello che manca alla
   prova: i casi dicono cosa è successo, una testimonianza dice com'è stato
   lavorarci.
6. **Dominio proprio** — `mariaserpa.com` e `.it` risultavano liberi. Quando
   arriva, va aggiornato in `astro.config.mjs` e `public/robots.txt`.

## Una scoria nota

La cartella `dist/` contiene circa 8 MB di copie non ottimizzate delle immagini,
mai richiamate da nessuna pagina: le produce il caricamento per nome. Nessun
visitatore le scarica, quindi non incidono sulla velocità del sito. Le
rimuovevo a mano quando il deploy era manuale; ora che costruisce Netlify,
restano. Si può automatizzare, non è urgente.
