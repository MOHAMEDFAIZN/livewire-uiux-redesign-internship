# 📚 Learning Report
**Mohamed Faiz N | Livewire Internship | July 2024**

---

## About This Report

This is my personal learning log from the 15-day Web Development Internship at Livewire, Tenkasi. I wrote this to document what I knew before, what I learned during, and what I want to explore further after the internship.

---

## Before the Internship — What I Knew

Going into this internship at the end of my first year of BCA, I had:

- Basic knowledge of **HTML** (tags, structure, forms) from college coursework
- Minimal **CSS** knowledge (basic selectors, colours, some box model)
- Almost no **JavaScript** experience beyond `alert()` and `console.log()`
- Never used **Figma** or any design tool
- Never used **Git** or **GitHub** professionally
- No real-world project experience

---

## What I Learned — Week by Week

### Week 1 Skills (Design & UX)

#### ✅ UI/UX Design Thinking
Before this internship, I thought "UI" just meant making things look pretty. I learned that **UX (User Experience)** is actually about how a product *works*, not just how it looks. The best-looking website fails if users can't find what they need.

Key concepts I understood:
- **Information Architecture** — how content is organised and labelled
- **Visual Hierarchy** — using size, weight, and colour to guide the eye
- **White space** — empty space isn't wasted; it makes content breathable and readable
- **CTA (Call-to-Action)** — every page should have one primary action the user should take

#### ✅ Figma (Basic)
I had never opened Figma before this internship. By the end of Week 1, I could:
- Create frames for different device sizes
- Use auto-layout for component consistency
- Build a simple component library
- Export artboards as PNG for coding reference

**Biggest Figma lesson:** Use consistent spacing values (e.g., multiples of 8px — called the 8-point grid system). This makes layouts feel harmonious without thinking about it too much.

---

### Week 2 Skills (Frontend Development)

#### ✅ Semantic HTML5
I learned the difference between `<div>` soup and semantic HTML. Semantic tags like `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` make the document meaningful to both browsers and screen readers.

**Before internship:** `<div class="nav">...</div>`  
**After internship:** `<header class="navbar">...<nav>...</nav></header>`

#### ✅ CSS Custom Properties (Variables)
This was a game-changer. Instead of writing the same colour code (`#5b21b6`) in 50 different places, I define it once:

```css
:root {
  --primary: #5b21b6;
}

.btn-primary {
  background: var(--primary);
}
```

Now if I want to change the brand colour, I change one line. This is how professional stylesheets are written.

#### ✅ CSS Flexbox & Grid
The two most important CSS layout tools. I struggled with this initially.

**Flexbox** — arranges items in a single row or column:
```css
.navbar { display: flex; align-items: center; justify-content: space-between; }
```

**CSS Grid** — arranges items in rows AND columns:
```css
.courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
```

The `auto-fill` + `minmax` trick was the most useful thing I learned — it creates a responsive grid without any media queries.

#### ✅ Mobile-First Design
Write base CSS for mobile screens first, then add rules for larger screens using `min-width` media queries.

```css
/* Base (mobile) */
.features-grid { grid-template-columns: 1fr; }

/* Tablet and above */
@media (min-width: 680px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 900px) {
  .features-grid { grid-template-columns: repeat(4, 1fr); }
}
```

#### ✅ JavaScript DOM Manipulation
The most challenging part. Key things I learned:

**querySelector / querySelectorAll** — selecting elements
```js
const hamburger = document.getElementById('hamburger');
const cards     = document.querySelectorAll('.course-card');
```

**Event Listeners** — responding to user actions
```js
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
```

**classList** — adding/removing CSS classes from JS
```js
navbar.classList.add('scrolled');
card.classList.remove('hidden');
```

**scroll event + getBoundingClientRect** — detecting when elements enter the viewport
```js
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 80) {
      card.style.opacity = '1';
    }
  });
});
```

#### ✅ Git & GitHub
I set up Git and made my first real commits. Commands I now know:

```bash
git init
git add .
git commit -m "Add hero section HTML structure"
git push origin main
```

I learned the importance of **meaningful commit messages** — not just "update" but describing what changed and why.

---

## Self-Assessment

| Skill | Before (1–5) | After (1–5) | Improvement |
|---|---|---|---|
| HTML5 | 2 | 4 | +2 |
| CSS3 (layout) | 1 | 3 | +2 |
| CSS3 (responsive) | 1 | 3 | +2 |
| JavaScript (DOM) | 1 | 2 | +1 |
| Figma | 0 | 2 | +2 |
| Git / GitHub | 1 | 3 | +2 |
| UI/UX thinking | 0 | 3 | +3 |
| Reading existing code | 2 | 3 | +1 |

*Scale: 1 = Aware · 2 = Basic · 3 = Functional · 4 = Confident · 5 = Proficient*

---

## Biggest Lessons from the Internship

### 1. "Done is better than perfect" — especially when learning
I spent too long trying to make the hero section perfect before moving on. My mentor told me to get the full page working first, then refine. Iteration is faster than perfection on the first try.

### 2. Browser DevTools are your best friend
I started opening the browser's Inspect panel (F12) to debug CSS in real time. This saved hours of guessing.

### 3. Look at how other websites work
My mentor told me to right-click → "Inspect" on websites I liked and study their CSS. This is completely legal and how most frontend developers learn new techniques.

### 4. Naming things well matters
Bad variable and class names like `.div2` or `.blue-box` make code impossible to read later. Meaningful names like `.hero-cta-group` or `const hamburger` make the code self-documenting.

### 5. Reading documentation is a skill
I used to search YouTube for every CSS property. Now I go to MDN Web Docs first. The documentation is the most reliable and complete source.

---

## What I Want to Learn Next

After this internship, I have a clear learning roadmap:

**Short term (next 3 months):**
- [ ] JavaScript ES6+ features (arrow functions, destructuring, fetch API)
- [ ] Building multi-page websites with linked HTML files
- [ ] CSS animations and transitions in more depth
- [ ] Figma (Auto-layout, components, variants)

**Medium term (next 6 months):**
- [ ] React.js — component-based UI development
- [ ] Node.js — basic backend concepts
- [ ] REST APIs — connecting frontend to data sources
- [ ] WCAG accessibility standards

**Long term (1 year+):**
- [ ] Full-stack development (MERN or similar)
- [ ] UI/UX Design as a professional skill
- [ ] Open source contributions
- [ ] Build a portfolio of 5+ real projects

---

## Final Reflection

This was my first real working experience. The 15 days went by fast, and there is still a lot I don't know — but I now have a foundation to build on. More importantly, I understand *how to learn* frontend development: build things, break them, read the docs, and keep going.

I am grateful to the Livewire team for giving me an environment where I could learn by doing, not just by watching.

> *"The gap between reading about something and actually doing it is much larger than it looks."*  
> — Something I understood clearly during this internship.

---

*Mohamed Faiz N | BCA I Year | KARE University | July 2024*
