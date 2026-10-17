# Honestas Capital — Website

Source of [honestas.capital](https://honestas.capital), the website of Honestas Capital, a business angel investing in young B2B software companies for manufacturing since 2017.

The site is plain static HTML, CSS and JavaScript. There is no build step and nothing to install.

## Structure

| Path | Content |
|---|---|
| `index.html` | Home page: hero, investment focus, portfolio, contact |
| `impressum.html` | Legal notice (Impressum) |
| `datenschutz.html` | Privacy policy (Datenschutzerklärung) |
| `assets/i18n.js` | German ⇄ English language switch |
| `assets/logos/` | Portfolio company logos |
| `assets/icons/`, `favicon.ico` | Favicons and touch icons |
| `index.vorher.html` | Previous version of the home page, kept for reference |

## Languages

German is written directly in the HTML. `assets/i18n.js` holds an English dictionary and swaps texts and attributes at runtime. The visitor's choice is remembered in the browser, and `?lang=en` or `?lang=de` in a link sets it directly.

To add or change a text, edit it in the HTML and add the matching German → English pair to the `EN` dictionary in `assets/i18n.js`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Notes

- Fonts: Inter, loaded from Google Fonts.
- Animations respect `prefers-reduced-motion`.
- The layout is responsive down to phone width.
