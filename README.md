# InnovateHER Website

A clean, static HTML/CSS/JS rebuild of the InnovateHER site (previously prototyped in Lovable), ready to self-host on GitHub Pages.

## File structure

```
innovateher-official/
├── index.html                     Homepage
├── about.html                     About / Our Story / Leadership
├── events.html                    Events listing (filterable)
├── events-opening-workshop.html   Opening Workshop event detail
├── get-involved.html              Questions form + Start a chapter form
├── resources.html                 Elementary / Intermediate / High School resource library
├── css/
│   └── style.css                  All styles (design tokens at the top)
├── js/
│   └── main.js                    Mobile nav, tabs, modals, filters, form handling
└── assets/
    └── images/                    Drop your real photos + logo here (see below)
```

## Things to finish before you launch

1. **Logo & favicon** — drop your final logo file in `assets/images/logo.png` and a favicon in `assets/images/favicon.png`. Until you do, the nav gracefully falls back to the text wordmark "Innovate**HER**", so nothing breaks.

2. **Photos** — the hero, About "Our Story," and Get Involved images are placeholder blush gradients right now. Add real photos at:
   - `assets/images/hero-girls-stem.jpg` (homepage hero)
   - `assets/images/team-aanya.jpg` (Aanya's leadership photo)
   - `assets/images/get-involved.jpg` (Get Involved page)

3. **RSVP / volunteer form links** — in the Lovable prototype, "RSVP — it's free" and the volunteer flow opened an external Google Form. Search `events-opening-workshop.html` for `<!-- TODO -->` and swap the `href="#"` for your live Google Form URL. Do the same anywhere else you want to link out to a form instead of using the built-in contact forms.

4. **Contact forms** — the "Questions or concerns" and "Start a chapter" forms on `get-involved.html`, plus the newsletter signup on the homepage, currently show a friendly success message on submit but don't send anywhere yet. Connect them to a form backend (Formspree, Netlify Forms, Google Forms, etc.) by adding an `action` attribute to the `<form>` tags — the JS in `main.js` (look for `data-demo-form`) is just a placeholder and can be removed once a real backend is wired up.

5. **Intermediate resources** — the video only showed Elementary and High School resource cards in detail, so the Intermediate (middle school) tab uses placeholder resource picks in the same style. Swap in your actual curated links whenever you're ready.

## Deploying to GitHub Pages

1. Push this folder's contents to the root of your `innovateher-official` repo (or a `docs/` folder if you prefer — just update the Pages source setting to match).
2. In your repo, go to **Settings → Pages**, set the source branch (usually `main`) and folder (`/root` or `/docs`), and save.
3. Your site will be live at `https://<your-username>.github.io/innovateher-official/` within a few minutes.

## Notes

- No frameworks or build step — just plain HTML/CSS/JS, so it works as-is on GitHub Pages.
- Every page shares the same `css/style.css` and `js/main.js`, so a style or behavior change in one place updates the whole site.
- Colors, fonts, and spacing are defined as CSS custom properties at the top of `style.css` under `:root` — that's the fastest place to make brand-wide tweaks.
