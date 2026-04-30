# 🎨 Week 2 — High-Fidelity Prototype & Component Specs
**Date:** 08–13 July 2024 | Livewire, Tenkasi (On-site)  
**Tool:** Figma

---

## What Is a Hi-Fi Prototype?

A high-fidelity prototype looks close to the final product — it includes real colours, typography, spacing, and interactive elements. It is used to communicate the exact visual design to developers (or in this case, to implement directly in HTML/CSS).

During Week 2, I translated the Week 1 wireframes into a Figma hi-fi prototype and then coded them into `index.html` + `style.css`.

---

## 🎨 Design Tokens (Colour & Typography)

### Colour Palette

| Token Name | Hex Value | Usage |
|---|---|---|
| `--primary` | `#5b21b6` | CTA buttons, active links, icons |
| `--primary-dark` | `#4c1d95` | Button hover, navbar scrolled |
| `--primary-light` | `#7c3aed` | Gradients, program card |
| `--accent` | `#f59e0b` | Hero highlight text, badges, hover |
| `--success` | `#10b981` | Placement tags, checkmarks |
| `--text-dark` | `#1e1b4b` | Headings, logo |
| `--text-body` | `#374151` | Body paragraph text |
| `--text-muted` | `#6b7280` | Subtitles, meta text |
| `--bg-light` | `#f9fafb` | Feature cards background |
| `--bg-section` | `#f3f4f6` | Alternate section background |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Headings / Display | Poppins | 700–800 | `clamp(1.6rem, 3vw, 2.2rem)` |
| Nav links / Buttons | Poppins | 500–600 | `0.88rem` – `1rem` |
| Body text | Inter | 400 | `1rem` / `0.9rem` |
| Labels / Tags | Poppins | 700 | `0.75rem` (uppercase) |
| Muted text | Inter | 400 | `0.8rem` – `0.85rem` |

---

## 📦 Component Specifications

### Button System

```
btn-primary  → bg: #5b21b6 | text: #fff  | hover: #4c1d95 + shadow
btn-outline  → bg: none    | text: #5b21b6 | border: #5b21b6 | hover: fill
btn-accent   → bg: #f59e0b | text: #1e1b4b | hover: #d97706
btn-white    → bg: #fff    | text: #5b21b6 | (used inside dark CTA band)

Sizes: btn-sm (0.82rem) | btn-md (0.9rem) | btn-lg (1rem)
Border-radius: 6px
Transition: 0.25s ease
Hover: translateY(-1px) + box-shadow
```

### Course Card

```
Border-radius : 12px
Shadow        : 0 1px 3px rgba(0,0,0,0.08)
Hover shadow  : 0 8px 32px rgba(0,0,0,0.14)
Hover move    : translateY(-4px)

Card anatomy (top → bottom):
  1. Image area (150px height, gradient background)
     └── Badge chip (absolute, top-left)
  2. Card body (padding: 1.25rem)
     ├── Category tag (uppercase, purple, 0.72rem)
     ├── Course title (Poppins 700, 0.95rem)
     ├── Meta (hours + level, icon row)
     ├── Mode tags (chip row — In-Centre / Online / Hybrid)
     └── Footer (placement badge + CTA button)
```

### Navbar

```
Height      : 68px (desktop) / 60px (mobile)
Background  : rgba(255,255,255,0.96) + backdrop-filter: blur(10px)
Scroll state: box-shadow added
Logo        : "LIVE" (purple) + "wire" (dark) — Poppins 800
Mobile      : hamburger toggle (3-bar → X animation)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Change |
|---|---|---|
| Desktop (default) | > 900px | Full grid, horizontal nav |
| Tablet | ≤ 900px | Contact stacks to 1 col, footer 2-col |
| Mobile | ≤ 680px | Hamburger menu, all grids go 1-col |
| Extra small | ≤ 400px | Hero stats stack vertically |

---

## 🔄 Interaction Notes

| Element | Interaction | How |
|---|---|---|
| Navbar | Becomes opaque + shadow on scroll | JS `scroll` + class `scrolled` |
| Hamburger | Animates to × when open | CSS `transform` on `span` elements |
| Course filter | Shows/hides cards by category | JS `classList.toggle('hidden')` |
| Cards | Fade in as you scroll down | JS `IntersectionObserver` equivalent |
| Stat counters | Count up on load | JS `setInterval` counter |
| Back-to-top | Appears after 400px scroll | JS `classList.toggle('visible')` |
| Contact form | Red border on empty, green on success | JS validation |

---

> **Files to export from Figma and place here:**  
> `homepage-hifi.png` — full desktop view  
> `mobile-view.png` — mobile 375px view  
> `component-sheet.png` — buttons, cards, nav components on one artboard
