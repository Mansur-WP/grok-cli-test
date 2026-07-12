# grok-cli-test

A static personal portfolio website built with the **Grok CLI Agent** to evaluate how well Grok can scaffold, structure, and deliver a complete front-end project from a prompt.

This repository is a **test artifact**, not a production application framework. The site itself is real and usable — it showcases Mansur Nasir Ibrahim's profile — but the primary reason it exists is to document and review Grok CLI's agent workflow.

## Why this project exists

The goal was to test the **Grok CLI Agent** end-to-end:

- Can it generate a coherent multi-file project from scratch?
- Does it produce semantic HTML, responsive CSS, and sensible JavaScript?
- How complete is the output without manual follow-up?

The result is a single-page portfolio that Grok CLI assembled as a working static site. The repo is published at [github.com/Mansur-WP/grok-cli-test](https://github.com/Mansur-WP/grok-cli-test) for reference and comparison with other AI coding tools.

## What's inside

This is a **zero-dependency static site** — no build step, no package manager, no framework.

| File | Role |
|------|------|
| `index.html` | Full page structure and content |
| `styles.css` | Layout, typography, responsive design, and visual styling |
| `script.js` | Mobile navigation, back-to-top button, and header scroll behavior |

### Site sections

The portfolio includes these anchored sections:

1. **Hero** — Introduction, headline, certificate and resume links, location metadata
2. **About** — Academic background, Smart Automations, and engineering focus
3. **Certificate** — freeCodeCamp Responsive Web Design certification details
4. **Skills** — Front-end, programming, engineering foundations, and tools
5. **Projects** — Personal portfolio, Smart Automations platform, and GitHub repos
6. **Blog** — Links to Hashnode articles on AI and software engineering
7. **Resume** — Experience, education, certifications, and technical competencies
8. **Learn (Multimedia)** — Demonstrations of `<video>`, `<audio>`, and `<iframe>` elements
9. **Contact** — Email, social, and company links

### Technical highlights

- **Semantic HTML5** with accessible navigation (`aria-*` attributes, skip-friendly structure)
- **Responsive CSS** using custom properties, Flexbox, and CSS Grid
- **Mobile-first UX** with a hamburger menu, sticky header, and back-to-top control
- **External media embeds** — MDN sample video/audio and a YouTube iframe for the Learn section
- **Google Fonts** — DM Sans (UI) and JetBrains Mono (code labels)

## How to run locally

No install required. Open the site in any modern browser:

```bash
# Option 1: open index.html directly in your browser

# Option 2: serve with a simple static server (recommended for iframe/media behavior)
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:8080` (or the port your server prints).

## Project structure

```
grok-cli-test/
├── index.html      # Single-page portfolio markup
├── styles.css      # All styles (~1,200 lines)
├── script.js       # Lightweight client-side interactions
└── README.md       # This file
```

## Built with

- [Grok CLI Agent](https://x.ai) — project generation and scaffolding
- Plain HTML, CSS, and JavaScript — no React, Vue, or build tooling

## Author

**Mansur Nasir Ibrahim**  
Software Engineering student · Northwest University Kano  
Founder, [Smart Automations](https://smartautomations.page.gd)

- GitHub: [@Mansur-WP](https://github.com/Mansur-WP)
- Blog: [amigodev.hashnode.dev](https://amigodev.hashnode.dev)
- Email: mailsformansur@gmail.com

## License

No license file is included. Contact the author if you plan to reuse or redistribute this project.
