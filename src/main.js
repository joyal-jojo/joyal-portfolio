/* ═══════════════════════════════════════════════════════
   JOYAL JOJO — CINEMATIC 3D SCROLL ENGINE
   Three.js  +  GSAP ScrollTrigger
   ═══════════════════════════════════════════════════════ */

import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  profile,
  profileHighlights,
  beyondEngineering,
  skills,
  experience,
  projects,
  education,
  certifications,
  memberships,
} from './data.js';

gsap.registerPlugin(ScrollTrigger);

/* ── STATE ───────────────────────────────────────────── */
const state = {
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
  scroll: 0,
  loaded: false,
  isMobile: window.innerWidth < 768,
};

/* ═══════════════════════════════════════════════════════
   1.  THREE.JS SETUP
   ═══════════════════════════════════════════════════════ */
const canvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050510, 0.012);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(0, 0, 50);

/* ── LIGHTING ────────────────────────────────────────── */
const ambientLight = new THREE.AmbientLight(0x111133, 0.4);
scene.add(ambientLight);

const mainLight = new THREE.PointLight(0x00f5ff, 2, 100);
mainLight.position.set(10, 10, 30);
scene.add(mainLight);

const accentLight = new THREE.PointLight(0xa855f7, 1.5, 80);
accentLight.position.set(-10, -5, 20);
scene.add(accentLight);

const warmLight = new THREE.PointLight(0xfbbf24, 0.8, 60);
warmLight.position.set(5, -10, 15);
scene.add(warmLight);

/* ═══════════════════════════════════════════════════════
   2.  PARTICLES  (Star field)
   ═══════════════════════════════════════════════════════ */
function createParticles() {
  const count = state.isMobile ? 1500 : 3000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const colorPalette = [
    new THREE.Color(0x00f5ff), // cyan
    new THREE.Color(0xa855f7), // purple
    new THREE.Color(0xfbbf24), // gold
    new THREE.Color(0xffffff), // white
    new THREE.Color(0x64748b), // muted
  ];

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // Spread particles in a large sphere
    const radius = 40 + Math.random() * 60;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    // Mostly white/muted, some colored
    const c = Math.random() < 0.15
      ? colorPalette[Math.floor(Math.random() * 3)]
      : colorPalette[3 + Math.floor(Math.random() * 2)];
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;

    sizes[i] = Math.random() * 2 + 0.5;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);
  return points;
}

const particles = createParticles();

/* ═══════════════════════════════════════════════════════
   3.  FLOATING WIREFRAME GEOMETRIES
   ═══════════════════════════════════════════════════════ */
const floatingGroup = new THREE.Group();
scene.add(floatingGroup);

const geometries = [
  { geo: new THREE.IcosahedronGeometry(1.5, 1), color: 0x00f5ff, pos: [-8, 5, -10], speed: 0.003 },
  { geo: new THREE.TorusKnotGeometry(1, 0.3, 64, 8), color: 0xa855f7, pos: [10, -3, -15], speed: 0.004 },
  { geo: new THREE.OctahedronGeometry(1.2), color: 0xfbbf24, pos: [-6, -6, -8], speed: 0.005 },
  { geo: new THREE.DodecahedronGeometry(0.9), color: 0xf43f5e, pos: [7, 7, -20], speed: 0.003 },
  { geo: new THREE.TetrahedronGeometry(1), color: 0x22d3ee, pos: [-12, 2, -25], speed: 0.006 },
  { geo: new THREE.TorusGeometry(1.2, 0.15, 16, 32), color: 0x00f5ff, pos: [14, -8, -12], speed: 0.002 },
  { geo: new THREE.IcosahedronGeometry(0.7, 0), color: 0xa855f7, pos: [-4, 9, -18], speed: 0.004 },
  { geo: new THREE.RingGeometry(0.8, 1.2, 6), color: 0xfbbf24, pos: [9, 4, -22], speed: 0.005 },
];

const floatingMeshes = geometries.map(({ geo, color, pos, speed }) => {
  const mat = new THREE.MeshBasicMaterial({
    color,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.userData.speed = speed;
  mesh.userData.initialPos = [...pos];
  floatingGroup.add(mesh);
  return mesh;
});

/* ═══════════════════════════════════════════════════════
   4.  GRID PLANE (Blueprint aesthetic)
   ═══════════════════════════════════════════════════════ */
const gridHelper = new THREE.GridHelper(100, 60, 0x00f5ff, 0x0a1a3a);
gridHelper.position.y = -15;
gridHelper.material.transparent = true;
gridHelper.material.opacity = 0.08;
scene.add(gridHelper);

/* ═══════════════════════════════════════════════════════
   5.  CONNECTION LINES  (Constellation effect)
   ═══════════════════════════════════════════════════════ */
function createConstellationLines() {
  const linePositions = [];
  const meshPositions = floatingMeshes.map((m) => m.position);

  for (let i = 0; i < meshPositions.length; i++) {
    for (let j = i + 1; j < meshPositions.length; j++) {
      const dist = meshPositions[i].distanceTo(meshPositions[j]);
      if (dist < 25) {
        linePositions.push(
          meshPositions[i].x, meshPositions[i].y, meshPositions[i].z,
          meshPositions[j].x, meshPositions[j].y, meshPositions[j].z
        );
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(linePositions, 3)
  );

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x00f5ff,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
  });

  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);
  return lines;
}

const constellationLines = createConstellationLines();

/* ═══════════════════════════════════════════════════════
   6.  POPULATE HTML FROM DATA
   ═══════════════════════════════════════════════════════ */

// ── About ──
document.getElementById('about-summary').textContent = profile.summary;

// If a photo is provided, swap the placeholder
if (profile.photo) {
  const wrap = document.getElementById('about-photo-wrap');
  wrap.innerHTML = `
    <img src="${profile.photo}" alt="${profile.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
    <div class="photo-glow"></div>
  `;
}

// ── Profile Highlight Badges ──
const badgesWrap = document.getElementById('profile-badges');
profileHighlights.forEach((h) => {
  const badge = document.createElement('div');
  badge.className = 'profile-badge';
  badge.innerHTML = `<span class="badge-icon">${h.icon}</span><span class="badge-label">${h.label}</span>`;
  badgesWrap.appendChild(badge);
});

// ── Beyond Engineering ──
const beyondGrid = document.getElementById('beyond-grid');
beyondEngineering.forEach((b) => {
  const card = document.createElement('div');
  card.className = 'beyond-card reveal-card';
  card.innerHTML = `
    <div class="beyond-icon">${b.icon}</div>
    <div class="beyond-content">
      <div class="beyond-role">${b.role}</div>
      <div class="beyond-company">${b.company} · ${b.period}</div>
      <p class="beyond-desc">${b.description}</p>
    </div>
  `;
  beyondGrid.appendChild(card);
});

// ── Skills ──
const skillsGrid = document.getElementById('skills-grid');
const skillCategories = [
  { title: 'Technical', items: skills.technical, cls: 'technical' },
  { title: 'Software', items: skills.software, cls: 'software' },
  { title: 'Soft Skills', items: skills.soft, cls: 'soft' },
];

skillCategories.forEach(({ title, items }) => {
  const div = document.createElement('div');
  div.className = 'skill-category reveal-card';
  div.innerHTML = `
    <h3>${title}</h3>
    <div class="skill-tags">
      ${items.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
    </div>
  `;
  skillsGrid.appendChild(div);
});

// ── Experience ──
const timeline = document.getElementById('timeline');
experience.forEach((exp, idx) => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  
  let filesHTML = '';
  if (exp.files && exp.files.length > 0) {
    filesHTML = `
      <div class="timeline-files">
        ${exp.files.map(f => `
          <a href="${f.url}" target="_blank" class="timeline-file-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            ${f.label}
          </a>
        `).join('')}
      </div>
    `;
  }

  let imagesHTML = '';
  if (exp.images && exp.images.length > 0) {
    imagesHTML = `
      <div class="timeline-gallery">
        ${exp.images.map(img => `
          <img src="${img.src}" alt="${img.alt}" class="timeline-gallery-img" onclick="window.open('./experience.html?id=${idx}', '_blank')" />
        `).join('')}
      </div>
    `;
  }

  item.innerHTML = `
    <div class="timeline-dot" style="border-color: ${exp.color}; box-shadow: 0 0 12px ${exp.color}40;"></div>
    <div class="timeline-header" style="cursor: pointer;" onclick="window.open('./experience.html?id=${idx}', '_blank')">
      <span class="timeline-role" style="transition: color 0.3s;" onmouseover="this.style.color='var(--accent-cyan)'" onmouseout="this.style.color=''">${exp.icon} ${exp.role}</span>
      <span class="timeline-period">${exp.period}</span>
    </div>
    <div class="timeline-company" style="color: ${exp.color}">${exp.company}</div>
    <div class="timeline-location">${exp.location}</div>
    <ul class="timeline-highlights">
      ${exp.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>
    ${imagesHTML}
    ${filesHTML}
  `;
  timeline.appendChild(item);
});

// ── Projects ──
const projectsGrid = document.getElementById('projects-grid');
projects.forEach((proj, idx) => {
  const card = document.createElement('div');
  card.className = 'project-card reveal-card';
  card.dataset.index = idx;
  card.innerHTML = `
    <div class="project-card-header" style="background: ${proj.gradient}">
      ${proj.bannerImage ? `<img src="${proj.bannerImage}" class="project-banner-img" alt="${proj.title}" />` : ''}
      <span class="project-icon-overlay">${proj.icon}</span>
      ${proj.category ? `<div class="project-category-badge">${proj.category}</div>` : ''}
      ${proj.award ? '<div class="project-award-badge">Award Winner</div>' : ''}
    </div>
    <div class="project-card-body">
      <div class="project-card-title">${proj.title}</div>
      <div class="project-card-subtitle">${proj.subtitle}</div>
      <div class="project-card-tags">
        ${proj.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="project-card-expand">
      <span>View Details</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
  `;
  card.addEventListener('click', () => {
    window.open('./project.html?id=' + idx, '_blank');
  });
  projectsGrid.appendChild(card);
});

// ── Education ──
const eduCards = document.getElementById('education-cards');
education.forEach((edu) => {
  const card = document.createElement('div');
  card.className = 'edu-card reveal-card';
  
  let filesHTML = '';
  if (edu.files && edu.files.length > 0) {
    filesHTML = `
      <div class="edu-files" style="margin-top: 16px;">
        ${edu.files.map(f => `
          <a href="${f.url}" target="_blank" class="timeline-file-link" style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--accent-cyan); text-decoration:none; background:rgba(0, 245, 255, 0.1); padding:6px 12px; border-radius:4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            ${f.label}
          </a>
        `).join('')}
      </div>
    `;
  }

  card.innerHTML = `
    <div class="edu-degree">${edu.degree}</div>
    <div class="edu-institution">${edu.institution}</div>
    <div class="edu-meta">${edu.location} · ${edu.period}</div>
    <ul class="edu-highlights">
      ${edu.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>
    ${filesHTML}
  `;
  eduCards.appendChild(card);
});

// ── Certifications (enhanced icon cards) ──
const certIcons = {
  'Lean Six Sigma Green Belt (SSGI)': '📊',
  'Machine Design (Coursera)': '⚙️',
  'Applications in Engineering Mechanics (Coursera)': '🔧',
  'Learning SOLIDWORKS (Udemy)': '💻',
  'AI for Everyone (DeepLearning.AI)': '🤖',
  'Python Programming (U-Michigan)': '🐍',
  'Business Analytics (LinkedIn)': '📈',
  'Working with Children Check': '🛡️',
};
const certGrid = document.getElementById('cert-tags');
certifications.forEach((c) => {
  const isObj = typeof c === 'object';
  const name = isObj ? c.name : c;
  const icon = certIcons[name] || '📜';
  
  const tag = isObj && c.file ? 'a' : 'div';
  const card = document.createElement(tag);
  card.className = 'cert-card';
  if (isObj && c.file) {
    card.href = c.file;
    card.target = '_blank';
    card.style.textDecoration = 'none';
  }
  
  card.innerHTML = `<span class="cert-icon">${icon}</span><span class="cert-name">${name}</span>`;
  certGrid.appendChild(card);
});

// ── Memberships ──
const memberTags = document.getElementById('membership-tags');
memberships.forEach((m) => {
  const span = document.createElement('span');
  span.className = 'membership-tag';
  span.textContent = m;
  memberTags.appendChild(span);
});

/* ═══════════════════════════════════════════════════════
   8.  GSAP — SCROLL ANIMATIONS
   ═══════════════════════════════════════════════════════ */

// ── 8a.  Camera path along scroll ──
const totalSections = 7;
const cameraKeyframes = [
  { x: 0, y: 0, z: 50 },   // hero — far
  { x: 4, y: 2, z: 30 },   // about — closer, pan right
  { x: -2, y: 3, z: 25 },  // skills — pan left, up
  { x: 0, y: 4, z: 28 },   // education — center, up
  { x: 3, y: -2, z: 22 },  // projects — pan right, down
  { x: -5, y: 0, z: 20 },  // experience — further left
  { x: 0, y: 0, z: 18 },   // contact — approach center
];

const lightColorKeyframes = [
  { main: 0x00f5ff, accent: 0xa855f7 }, // hero
  { main: 0x22d3ee, accent: 0x00f5ff }, // about
  { main: 0xa855f7, accent: 0x6366f1 }, // skills
  { main: 0x00f5ff, accent: 0x22d3ee }, // education
  { main: 0xfbbf24, accent: 0xa855f7 }, // projects
  { main: 0xf43f5e, accent: 0xfbbf24 }, // experience
  { main: 0xa855f7, accent: 0x00f5ff }, // contact
];

// Master scroll progress tracker
const scrollState = { progress: 0 };

ScrollTrigger.create({
  trigger: '#scroll-container',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 1.5,
  onUpdate: (self) => {
    scrollState.progress = self.progress;
  },
});

// ── 8b.  Hero entrance animations ──
const heroTL = gsap.timeline({ delay: 0.5 });

heroTL
  .to('.hero-greeting', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .to(
    '.hero-name',
    {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power4.out',
      onComplete: () => {
        document.querySelector('.hero-name').classList.add('revealed');
      },
    },
    '-=0.4'
  )
  .to('.hero-title', { opacity: 1, y: 0, duration: 0.6 }, '-=0.6')
  .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
  .to('.hero-scroll-cue', { opacity: 1, duration: 0.8 }, '-=0.2');

// Hero scroll-out
gsap.to('.hero-content', {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#hero',
    start: 'center center',
    end: 'bottom top',
    scrub: 1,
  },
});

// ── 8c.  Section reveal animations ──
const sections = ['#about', '#skills', '#education', '#projects', '#experience', '#contact'];

sections.forEach((sec) => {
  // Reveal section label
  gsap.from(`${sec} .section-label`, {
    scrollTrigger: {
      trigger: sec,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  });

  // Reveal section title
  gsap.from(`${sec} .section-title`, {
    scrollTrigger: {
      trigger: sec,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });

  // Reveal cards with stagger
  const cards = document.querySelectorAll(`${sec} .reveal-card`);
  if (cards.length) {
    gsap.to(cards, {
      scrollTrigger: {
        trigger: sec,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  // Reveal text elements
  const texts = document.querySelectorAll(`${sec} .reveal-text`);
  if (texts.length) {
    gsap.to(texts, {
      scrollTrigger: {
        trigger: sec,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }
});

// ── 8d.  Timeline items (experience) ──
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    x: 0,
    opacity: 1,
    duration: 0.7,
    delay: i * 0.05,
    ease: 'power3.out',
  });
});

// ── 8e.  Stat counter animation ──
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach((el) => {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  gsap.to(el, {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
    },
    textContent: target,
    duration: 1.5,
    ease: 'power2.out',
    snap: { textContent: 1 },
    onUpdate: function () {
      el.textContent = Math.round(parseFloat(el.textContent)) + suffix;
    },
  });
});

// ── 8f.  Scroll nav update ──
const scrollNav = document.getElementById('scroll-nav');
const navDots = document.querySelectorAll('.nav-dot');
const sectionIds = ['hero', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];

// Show nav after hero
ScrollTrigger.create({
  trigger: '#about',
  start: 'top 90%',
  onEnter: () => scrollNav.classList.add('visible'),
  onLeaveBack: () => scrollNav.classList.remove('visible'),
});

// Update active dot
sectionIds.forEach((id, i) => {
  ScrollTrigger.create({
    trigger: `#${id}`,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActiveDot(i),
    onEnterBack: () => setActiveDot(i),
  });
});

function setActiveDot(index) {
  navDots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// Click-to-scroll on nav dots
navDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetSection = document.getElementById(dot.dataset.section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════════════════
   9.  CUSTOM CURSOR
   ═══════════════════════════════════════════════════════ */
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

if (!state.isMobile) {
  document.addEventListener('mousemove', (e) => {
    state.mouse.targetX = e.clientX;
    state.mouse.targetY = e.clientY;

    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });

    gsap.to(cursorRing, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll(
    'a, button, .project-card, .skill-tag, .nav-dot, .stat-card, .contact-card, .resume-btn, .cert-tag, .membership-tag'
  );

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ═══════════════════════════════════════════════════════
   10.  ANIMATION LOOP
   ═══════════════════════════════════════════════════════ */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  const delta = clock.getDelta();

  // ── Smooth mouse tracking ──
  state.mouse.x += (state.mouse.targetX / window.innerWidth - 0.5 - state.mouse.x) * 0.05;
  state.mouse.y += (state.mouse.targetY / window.innerHeight - 0.5 - state.mouse.y) * 0.05;

  // ── Camera interpolation based on scroll progress ──
  const progress = scrollState.progress;
  const segmentCount = cameraKeyframes.length - 1;
  const rawIndex = progress * segmentCount;
  const index = Math.min(Math.floor(rawIndex), segmentCount - 1);
  const t = rawIndex - index;
  const smoothT = t * t * (3 - 2 * t); // smoothstep

  const from = cameraKeyframes[index];
  const to = cameraKeyframes[Math.min(index + 1, segmentCount)];

  const targetX = from.x + (to.x - from.x) * smoothT + state.mouse.x * 2;
  const targetY = from.y + (to.y - from.y) * smoothT + state.mouse.y * 1.5;
  const targetZ = from.z + (to.z - from.z) * smoothT;

  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (targetY - camera.position.y) * 0.05;
  camera.position.z += (targetZ - camera.position.z) * 0.05;

  camera.lookAt(state.mouse.x * 0.5, state.mouse.y * 0.3, 0);

  // ── Light color interpolation ──
  const fromLight = lightColorKeyframes[index];
  const toLight = lightColorKeyframes[Math.min(index + 1, segmentCount)];

  const mainColor = new THREE.Color(fromLight.main).lerp(
    new THREE.Color(toLight.main),
    smoothT
  );
  const accentColor = new THREE.Color(fromLight.accent).lerp(
    new THREE.Color(toLight.accent),
    smoothT
  );

  mainLight.color.copy(mainColor);
  accentLight.color.copy(accentColor);

  // Move lights subtly
  mainLight.position.x = 10 + Math.sin(elapsed * 0.3) * 5;
  mainLight.position.y = 10 + Math.cos(elapsed * 0.2) * 3;
  accentLight.position.x = -10 + Math.cos(elapsed * 0.4) * 4;
  accentLight.position.y = -5 + Math.sin(elapsed * 0.3) * 3;

  // ── Particle drift ──
  const positions = particles.geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(elapsed * 0.2 + positions[i] * 0.01) * 0.003;
    positions[i] += Math.cos(elapsed * 0.15 + positions[i + 2] * 0.01) * 0.002;
  }
  particles.geometry.attributes.position.needsUpdate = true;
  particles.rotation.y = elapsed * 0.01;

  // ── Floating geometry rotation ──
  floatingMeshes.forEach((mesh, i) => {
    mesh.rotation.x += mesh.userData.speed;
    mesh.rotation.y += mesh.userData.speed * 0.7;
    mesh.rotation.z += mesh.userData.speed * 0.3;

    // Subtle floating motion
    const ip = mesh.userData.initialPos;
    mesh.position.y = ip[1] + Math.sin(elapsed * 0.5 + i * 1.3) * 0.8;
    mesh.position.x = ip[0] + Math.cos(elapsed * 0.3 + i * 0.7) * 0.5;
  });

  // ── Grid scroll effect ──
  gridHelper.position.z = -progress * 30;
  gridHelper.material.opacity = 0.08 + Math.sin(elapsed * 0.5) * 0.02;

  // ── Update constellation lines ──
  const linePositions = [];
  for (let i = 0; i < floatingMeshes.length; i++) {
    for (let j = i + 1; j < floatingMeshes.length; j++) {
      const dist = floatingMeshes[i].position.distanceTo(floatingMeshes[j].position);
      if (dist < 25) {
        linePositions.push(
          floatingMeshes[i].position.x, floatingMeshes[i].position.y, floatingMeshes[i].position.z,
          floatingMeshes[j].position.x, floatingMeshes[j].position.y, floatingMeshes[j].position.z
        );
      }
    }
  }
  constellationLines.geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(linePositions, 3)
  );
  constellationLines.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();

/* ═══════════════════════════════════════════════════════
   11.  EVENT HANDLERS
   ═══════════════════════════════════════════════════════ */
window.addEventListener('resize', () => {
  state.isMobile = window.innerWidth < 768;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/* ═══════════════════════════════════════════════════════
   12.  PRELOADER
   ═══════════════════════════════════════════════════════ */
const preloader = document.getElementById('preloader');
const preloaderFill = document.getElementById('preloader-fill');

// Simulate loading progress
let loadProgress = 0;
const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 15 + 5;
  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);
    preloaderFill.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('loaded');
      // Start hero animation after preloader
      heroTL.play();
    }, 500);
  } else {
    preloaderFill.style.width = loadProgress + '%';
  }
}, 200);

// Pause hero TL until preloader done
heroTL.pause();

/* ═══════════════════════════════════════════════════════
   13.  3D TILT ON PROJECT CARDS  (Mouse parallax)
   ═══════════════════════════════════════════════════════ */
if (!state.isMobile) {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════
   14.  CLEAN UP TEMP FILES
   ═══════════════════════════════════════════════════════ */
// Log that the portfolio is running
console.log(
  '%c✦ Joyal Jojo Portfolio — Running',
  'color: #00f5ff; font-weight: bold; font-size: 14px;'
);
