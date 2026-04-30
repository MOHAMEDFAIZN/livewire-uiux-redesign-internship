# 🎨 UI/UX Design Process
**Mohamed Faiz N | Livewire Internship | July 2024**

---

## Overview

This document explains the UI/UX design process I followed during my internship to redesign the Livewire India website. This was my first real experience applying design thinking to an actual product.

---

## The UX Design Process I Followed

```
  RESEARCH  →  WIREFRAME  →  PROTOTYPE  →  IMPLEMENT
     📊             📐             🎨            💻
```

---

## Stage 1: Research — Understanding the Existing Website

### What I Did
I spent Day 2 and Day 3 (02–03 July) thoroughly studying the existing `livewireindia.com` website on both desktop and mobile.

### What I Found

I used **Jakob Nielsen's 10 Usability Heuristics** (which my mentor introduced me to) as a checklist:

| Heuristic | Finding on livewireindia.com |
|---|---|
| Visibility of system status | ❌ No active nav link highlighting |
| Match with real world | ✅ Language is appropriate |
| User control and freedom | ⚠️ No easy way back to top |
| Consistency and standards | ⚠️ Inconsistent button styles across pages |
| Error prevention | ❌ Contact form lacks input validation |
| Recognition rather than recall | ✅ Navigation labels are clear |
| Flexibility and efficiency | ❌ No keyboard navigation support |
| Aesthetic and minimalist design | ❌ Hero section is visually cluttered |
| Help users recognise errors | ❌ No form error messages |
| Help and documentation | ✅ Contact info clearly listed |

### Screenshot Analysis (Original Site)

Looking at the screenshot of `livewireindia.com` captured during the internship:

- The navigation bar has **two rows** — one for utility links (phone, email, app download) and one for main nav. This is confusing on mobile.
- The hero section has a **carousel** with too much text and multiple competing calls to action.
- The course cards in the "Top Trending Courses" section show very minimal information and have inconsistent spacing.
- The "NASSCOM Approved Courses" section below uses the same card layout without visual differentiation.

---

## Stage 2: Wireframing

### Low-Fidelity (Week 1, Days 4–5)

**Goal:** Decide on layout and structure only. No colours or fonts.

**Process:**
1. Sketched 3 layout options for the homepage on paper
2. Picked the best layout based on clarity and hierarchy
3. Recreated it in Figma using only grey boxes and text placeholders
4. Did the same for mobile (375px) to check how layout collapsed

**Key layout decisions made at this stage:**
- Merge the double navbar into a **single, clean navbar** with hamburger for mobile
- Hero section: one headline, one sub-text, max **2 CTA buttons**
- Course cards: add **duration chip, mode tags, and placement badge** to each
- Add a **stats strip** in the hero to build social proof ("10,000+ Students")

### High-Fidelity (Week 2, Days 7–8)

**Goal:** Add real colours, fonts, spacing, and interactivity states.

**Process:**
1. Chose a **purple + amber** colour palette — purple for trust/tech, amber for energy/CTA
2. Picked **Poppins** (headings) + **Inter** (body) — clean, modern, widely-used in tech products
3. Designed each component: buttons (3 variants), cards (course + program), nav states
4. Created hover states for buttons and cards
5. Exported artboards as PNG for reference during coding

**Figma Component Library Built:**
- Button system (primary, outline, accent, white, outline-white) — 5 variants × 3 sizes
- Course card (with image placeholder, badge, body, footer)
- Program card (regular + featured variant)
- Navigation bar (desktop + mobile states)
- Form inputs (default, focus, error, success states)
- Footer (4-column grid)

---

## Stage 3: Design Decisions Explained

### Why purple?
Purple (#5b21b6) signals **trust, technology, and expertise** — appropriate for an IT training brand. The Livewire brand already uses purple, so it also maintains brand continuity.

### Why amber as accent?
Amber (#f59e0b) is **high-energy and attention-grabbing** — perfect for CTA buttons and highlight text. It creates strong contrast against the purple hero background without being aggressive.

### Why Poppins + Inter?
- **Poppins** is geometric and confident — it works for headings and buttons where personality matters.
- **Inter** is highly legible at small sizes — it is designed specifically for screen text.
- This pairing is used widely in modern SaaS and edtech products (e.g., Notion, Linear).

### Why mobile-first?
The original site was designed desktop-first and then scaled down, which is why it broke on mobile. Mobile-first means writing the base CSS for small screens, then adding `min-width` media queries for larger screens. This resulted in a much cleaner responsive layout.

### Why `clamp()` for font sizes?
`clamp(min, preferred, max)` allows font sizes to scale fluidly with the viewport width, eliminating the need for multiple breakpoints just for typography.

```css
/* Example from style.css */
font-size: clamp(2.4rem, 6vw, 4rem);
/* Min: 2.4rem → Preferred: 6% viewport width → Max: 4rem */
```

---

## Stage 4: Implementation Notes

### Things That Were Harder Than Expected
1. **Hamburger menu animation** — making the 3-bar icon smoothly animate into an × using only CSS transforms took several tries
2. **Scroll reveal** — I initially tried using a library, but my mentor encouraged me to write it manually using `getBoundingClientRect()` which helped me understand how scroll events work
3. **CSS Grid vs Flexbox** — understanding when to use each was confusing at first. Grid is better for 2D layouts (course cards grid), Flexbox is better for 1D (navbar, button groups)

### Things That Went Well
- CSS custom properties (variables) made it very easy to change the colour scheme site-wide
- The mobile-first approach meant the mobile layout required almost no extra code
- Semantic HTML (using `<section>`, `<header>`, `<footer>`, `<nav>`, `<article>`) made the document structure clean and accessible

---

## 📚 Resources Used

| Resource | What I Used It For |
|---|---|
| [MDN Web Docs](https://developer.mozilla.org) | HTML/CSS/JS reference |
| [CSS-Tricks](https://css-tricks.com) | Flexbox and Grid guides |
| [Figma Community](https://figma.com/community) | Design system inspiration |
| [Google Fonts](https://fonts.google.com) | Typography selection |
| [Font Awesome](https://fontawesome.com) | Icon library |
| [Coolors.co](https://coolors.co) | Colour palette exploration |
| [Can I Use](https://caniuse.com) | Checking browser support for CSS features |

---

> *This process document was written as part of my internship submission at Livewire, Tenkasi — July 2024.*
