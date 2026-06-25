# Alex Rivera — Developer Portfolio

A dark, premium, conversion-focused landing page for a freelance full-stack
developer targeting small business clients (restaurants, salons, travel
agencies, local shops). Built with React, Tailwind CSS v4, and Framer Motion.

## Design concept

The visual theme plays on a real-world signal these clients already
recognize: a neon **OPEN** sign in a shop window. The hero's browser mockup
glows and flickers like signage coming to life, and the same warm amber
pulse shows up as an "Open for new projects" status indicator in the navbar
and footer — a quiet, recurring reminder of the page's core promise: *your
business, open 24/7.*

- **Colors**: near-black background (`#0a0b0f`), warm amber/neon accent
  (`#ff8a3d`), a cooler cyan accent (`#3fe0d0`) for secondary highlights and
  data points, warm off-white text (`#f5f3ee`).
- **Type**: Bricolage Grotesque for headings (display, characterful),
  Inter for body copy, JetBrains Mono for labels, tags, and numbers — a nod
  to the developer's own toolkit.
- **Motion**: staggered hero entrance, scroll-triggered reveals on every
  section, hover lift on cards/buttons, an ambient flicker on the hero
  mockup, and `prefers-reduced-motion` is respected globally.

## Project structure

```
src/
  components/
    ui/              Button, Container, SectionHeading, StatusDot
    Navbar.jsx        Hero.jsx          Services.jsx
    WhyChooseMe.jsx   Portfolio.jsx     Process.jsx
    Testimonials.jsx  FAQ.jsx           Contact.jsx
    Footer.jsx
  data/
    content.js        ← ALL editable copy lives here
  index.css            Tailwind v4 theme tokens + custom effects
  App.jsx
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

Requires Node 18+.

## Customizing the content

Open `src/data/content.js` — every headline, service, stat, testimonial,
FAQ, and link on the page is defined there as plain data. You generally
won't need to touch any component file to update copy, swap projects, or
change contact details.

Update `brand.email`, `brand.github`, `brand.linkedin`, and `brand.twitter`
with your real links before launching.

The stats in the hero (`30+ sites shipped`, `2 wks avg. turnaround`,
`100% mobile-ready`) and the portfolio projects are placeholder content —
replace them with your real numbers and real case studies before this goes
live, since overstated claims can undermine the trust this page is trying
to build.

## Wiring up the contact form

The form in `src/components/Contact.jsx` currently simulates a submission
with a timeout so you can see the success state. To make it actually send
messages, swap the `handleSubmit` function for one of:

- **Formspree** — point the form at your Formspree endpoint with a `fetch`
  POST call.
- **EmailJS** — call `emailjs.send(...)` with your service/template IDs.
- **Your own API** — POST the form data to a backend route you control.

## Replacing the portfolio "screenshots"

Each project card currently renders a stylized, CSS-only mockup (no real
images needed to preview the layout). To use real screenshots, replace the
mockup `<div>` block inside `Portfolio.jsx` with an `<img>` tag pointing at
your screenshot, and remove the `gradient` field from the corresponding
entry in `content.js` once it's no longer needed.

## Fonts

Bricolage Grotesque, Inter, and JetBrains Mono load from Google Fonts via
the `<link>` tags in `index.html`. If you'd rather self-host fonts, swap
those links for local `@font-face` declarations.

## Deployment

This is a static Vite build — deploy the contents of `/dist` after
`npm run build` to Vercel, Netlify, Cloudflare Pages, or any static host.
