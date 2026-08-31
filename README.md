# Southbound — a travel journal

A small, fast, **static** website. No build step, no framework. Open `index.html`
in a browser (or drop the whole folder on any web host) and it works.

## Folder layout

```
index.html          Home — every story, both series
melbourne.html      Series 01 — Melbourne only
adelaide.html       Series 02 — Adelaide only
article.html        Reads ?slug=… and renders one story
css/style.css       All styling + the colour/type tokens (top of the file)
js/data.js          ★ ALL CONTENT lives here — this is the file you edit
js/main.js          Renderer — you don't need to touch this
image/              Photos (all .jpg; drop in your own to replace them)
```

## Add a new article  (edit only `js/data.js`)

1. Drop your photo in `image/` (e.g. `image/my-photo.jpg`).
2. Copy one `{ … }` block inside `window.ARTICLES` and change the fields:
   - `slug` — unique, url-safe (used as `article.html?slug=…`)
   - `series` — `"melbourne"` or `"adelaide"` (must match a key in `SERIES`)
   - `no` — its number within that series
   - `size` — `"feature"` for the big card, or `""` for a normal card
   - `title`, `dek` (card blurb), `date`, `readTime`
   - `image` (card), `hero` (top of article), optional `inline` (mid-article)
   - `pullquote` — big quote dropped into the article body
   - `body` — array of paragraphs
3. Save. The card and its page appear automatically.

## Add a new series (a new tab / page)

1. Add an entry to `window.SERIES` in `js/data.js`, e.g.
   `sydney: { no: "03", name: "Sydney", blurb: "…" }`
2. Duplicate `melbourne.html`, rename it `sydney.html`, and change
   `<body data-series="melbourne">` to `data-series="sydney"`.
3. Give some articles `series: "sydney"`. Done — the tab shows up everywhere.

## Re-skin

Open `css/style.css` — the `:root { … }` block at the top holds every colour,
font and the accent. Change `--accent` to recolour the whole site.

## Replace the placeholder photos

The `image/*.jpg` files are placeholders (except any you've already replaced).
Swap in your own photos using the same filename, or add new ones and update
the matching paths in `js/data.js`.
