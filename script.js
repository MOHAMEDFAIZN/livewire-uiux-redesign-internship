/**
 * ============================================
 *  LIVEWIRE INDIA — Responsive Frontend Redesign
 *  Internship Project by Mohamed Faiz N
 *  July 2024 | Livewire, Tenkasi
 * ============================================
 */

/* ─────────────────────────────────────────────
   1. NAVBAR — scroll shadow + hamburger toggle
   ───────────────────────────────────────────── */
const navbar      = document.getElementById('navbar');
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Add shadow when page is scrolled
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  toggleBackToTop();
  revealOnScroll();
});

// Toggle hamburger open/close
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when any link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

/* ─────────────────────────────────────────────
   2. SMOOTH SCROLL — for all anchor links
   ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navbarHeight = navbar.offsetHeight;
    const targetTop    = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 8;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────────
   3. ACTIVE NAV LINK — highlight on scroll
   ───────────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop    = section.offsetTop - navbar.offsetHeight - 40;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId     = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

/* ─────────────────────────────────────────────
   4. BACK TO TOP BUTTON
   ───────────────────────────────────────────── */
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  backToTopBtn.classList.toggle('visible', window.scrollY > 400);
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────────
   5. SCROLL REVEAL ANIMATION
   ───────────────────────────────────────────── */
const revealElements = document.querySelectorAll(
  '.feature-card, .course-card, .program-card, .contact-item, .partner-badge'
);

// Set initial hidden state
revealElements.forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(28px)';
  el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.08}s, transform 0.5s ease ${(i % 4) * 0.08}s`;
});

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Run once on load in case elements are already visible
revealOnScroll();

/* ─────────────────────────────────────────────
   6. COURSE FILTER TABS
   ───────────────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    courseCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const show     = filter === 'all' || category === filter;

      if (show) {
        card.classList.remove('hidden');
        // Re-trigger reveal animation
        card.style.opacity   = '0';
        card.style.transform = 'translateY(28px)';
        setTimeout(() => {
          card.style.opacity   = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ─────────────────────────────────────────────
   7. HERO STAT COUNTER — animate numbers up
   ───────────────────────────────────────────── */
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(el) {
  const text   = el.textContent.trim();           // e.g. "10,000+"
  const suffix = text.replace(/[\d,]/g, '');      // "+"
  const target = parseInt(text.replace(/[^0-9]/g, ''), 10); // 10000
  const duration = 1400;
  const step     = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
  }, step);
}

// Only animate when hero stats come into view (once)
let statsAnimated = false;
const heroStats   = document.querySelector('.hero-stats');

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNumbers.forEach(el => animateCounter(el));
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

if (heroStats) statsObserver.observe(heroStats);

/* ─────────────────────────────────────────────
   8. CONTACT FORM — basic client-side feedback
   ───────────────────────────────────────────── */
const sendBtn = document.querySelector('.contact-section .btn-primary');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const inputs   = document.querySelectorAll('.contact-section .form-input');
    let allFilled  = true;

    inputs.forEach(input => {
      const val = input.value.trim();
      if (!val || val === 'I\'m interested in...') {
        input.style.borderColor = '#ef4444';
        allFilled = false;
        setTimeout(() => (input.style.borderColor = ''), 2000);
      } else {
        input.style.borderColor = '#10b981';
      }
    });

    if (allFilled) {
      sendBtn.textContent = '✓ Message Sent! (Prototype)';
      sendBtn.style.background = '#10b981';
      sendBtn.disabled = true;
      setTimeout(() => {
        sendBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        sendBtn.style.background = '';
        sendBtn.disabled = false;
        inputs.forEach(i => {
          i.value = '';
          i.style.borderColor = '';
        });
      }, 3000);
    }
  });
}

/* ─────────────────────────────────────────────
   9. NAVBAR LINK ACTIVE STYLE — inject CSS
   ───────────────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: var(--primary) !important;
    background: rgba(91,33,182,0.07) !important;
  }
`;
document.head.appendChild(style);

/* ─────────────────────────────────────────────
   10. PAGE LOAD — remove jump on first render
   ───────────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
  // Trigger scroll reveal for visible elements
  revealOnScroll();
  updateActiveNavLink();
});
