# 📐 Week 1 — Low-Fidelity Wireframes
**Date:** 01–06 July 2024 | Livewire, Tenkasi (On-site)

---

## What Are Lo-Fi Wireframes?

Low-fidelity wireframes are rough, black-and-white sketches that focus purely on **layout and structure** — not colours, fonts, or visuals. They are the first step in the UX design process and let you quickly try out different layouts before writing any code.

During Week 1 of my internship, I:
1. Studied the existing `livewireindia.com` website
2. Identified layout problems (dense nav, no mobile layout, weak CTA hierarchy)
3. Sketched lo-fi wireframes on paper and then recreated them digitally

---

## 🏠 Homepage — Lo-Fi Wireframe

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR                                                 │
│  [ Logo ]    [ Home | Courses | Programs | Contact ]    │
│                                          [ Login Btn ]  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO SECTION                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │                                                   │  │
│  │   [ Badge: Now Enrolling ]                        │  │
│  │                                                   │  │
│  │   H1: Build Skills.                               │  │
│  │       Shape Careers.                              │  │
│  │                                                   │  │
│  │   Sub: Short description text here...            │  │
│  │                                                   │  │
│  │   [ CTA: Explore Courses → ]  [ View Programs ]  │  │
│  │                                                   │  │
│  │   10,000+ Students  |  50+ Courses  |  500+ Jobs │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  PARTNERS BAR                                           │
│  [ NASSCOM ] [ EC-Council ] [ CompTIA ] [ Oracle ] ...  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FEATURES STRIP  (3-4 column grid)                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐            │
│  │  Icon     │  │  Icon     │  │  Icon     │            │
│  │  Title    │  │  Title    │  │  Title    │            │
│  │  Desc...  │  │  Desc...  │  │  Desc...  │            │
│  └───────────┘  └───────────┘  └───────────┘            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TRENDING COURSES                                       │
│  [ Filter: All | Web Dev | Embedded | Java | Network ]  │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │   │
│  │ Category │ │ Category │ │ Category │ │ Category │   │
│  │ Title    │ │ Title    │ │ Title    │ │ Title    │   │
│  │ Meta     │ │ Meta     │ │ Meta     │ │ Meta     │   │
│  │[Know More│ │[Know More│ │[Know More│ │[Know More│   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
│                                                         │
│              [ View All Courses ]                       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CERTIFICATION PROGRAMS  (3 columns)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ [Featured]   │  │              │  │              │  │
│  │ Icon         │  │ Icon         │  │ Icon         │  │
│  │ Program Name │  │ Program Name │  │ Program Name │  │
│  │ Description  │  │ Description  │  │ Description  │  │
│  │ Highlights   │  │ Highlights   │  │ Highlights   │  │
│  │ [Enrol Now]  │  │ [Know More]  │  │ [Know More]  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  CTA BAND                                               │
│  "Ready to Start?" — [ Apply Internship ] [ Counsellor ]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CONTACT SECTION  (2 columns)                           │
│  [ Contact Info ]         [ Contact Form ]              │
│   Phone / Email / Map      Name / Email / Select / Msg  │
│                            [ Send Message ]             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER  (4 columns)                                    │
│  [ Brand + Social ]  [ Links ]  [ Company ]  [ Partners]│
│  ─────────────────────────────────────────────────────  │
│  © 2024 Livewire India Pvt. Ltd.  |  MIT — Mohamed Faiz │
└─────────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Wireframe (375px)

```
┌─────────────────────┐
│ NAVBAR              │
│ [Logo]     [☰ Menu] │
├─────────────────────┤
│ HERO                │
│                     │
│  [ Badge ]          │
│  H1 Title           │
│  Subtitle text...   │
│                     │
│  [ Explore Courses ]│
│  [ View Programs ]  │
│                     │
│  10k+ Students      │
│  50+ Courses        │
│  500+ Jobs          │
├─────────────────────┤
│ PARTNERS (scroll →) │
│ [NASSCOM][EC-C][..] │
├─────────────────────┤
│ FEATURE CARDS       │
│  ┌─────────────┐    │
│  │ Icon + Title│    │
│  │ Desc text   │    │
│  └─────────────┘    │
│  ┌─────────────┐    │
│  │ Icon + Title│    │
│  └─────────────┘    │
│  ... (stacked)      │
├─────────────────────┤
│ COURSES             │
│ [Filter tabs →]     │
│  ┌─────────────┐    │
│  │ [Img]       │    │
│  │ Category    │    │
│  │ Title       │    │
│  │ [Know More] │    │
│  └─────────────┘    │
│  (single column)    │
├─────────────────────┤
│ PROGRAMS (stacked)  │
├─────────────────────┤
│ CTA BAND            │
│ (centered, stacked) │
├─────────────────────┤
│ CONTACT (stacked)   │
├─────────────────────┤
│ FOOTER (stacked)    │
└─────────────────────┘
```

---

## 📋 Design Issues Identified in the Original Site

| Issue | Severity | My Solution |
|---|---|---|
| No hamburger menu on mobile | High | Added sticky hamburger with animated toggle |
| Navigation too dense (8+ links visible) | High | Grouped into 5 clean links |
| Hero section has cluttered text | High | Single H1, short subtitle, 2 CTAs max |
| Course cards show minimal info | Medium | Added duration, mode tags, placement badge |
| No scroll animations | Low | Fade-in on scroll for cards |
| Generic CTA buttons | Medium | Primary + outline variants with icons |
| No stats / social proof | Medium | Added animated counters in hero |

---

> **Tool used:** Paper sketches → recreated in Figma → exported as PNG  
> **Files:** `homepage-lofi.png`, `courses-lofi.png`, `contact-lofi.png` *(export from Figma and place here)*
