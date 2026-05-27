import { experience } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const idStr = params.get('id');
  
  if (idStr === null) {
    document.getElementById('experience-container').innerHTML = '<h2>Experience not found.</h2>';
    return;
  }

  const id = parseInt(idStr, 10);
  const exp = experience[id];

  if (!exp) {
    document.getElementById('experience-container').innerHTML = '<h2>Experience not found.</h2>';
    return;
  }

  const container = document.getElementById('experience-container');

  let imagesHTML = '';
  if (exp.images && exp.images.length > 0) {
    imagesHTML = `
      <div class="project-section-title">Photo Gallery</div>
      <div class="project-gallery">
        ${exp.images.map(img => `
          <img src="${img.src}" alt="${img.alt}" class="project-gallery-img" onclick="window.open('${img.src}', '_blank')" />
        `).join('')}
      </div>
    `;
  }

  let filesHTML = '';
  if (exp.files && exp.files.length > 0) {
    filesHTML = `
      <div class="project-section-title">Documents</div>
      ${exp.files.map(f => `
        <a href="${f.url}" target="_blank" class="project-file-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          ${f.label}
        </a>
      `).join('')}
    `;
  } else {
    filesHTML = `
      <div class="project-section-title">Documents</div>
      <p style="color: var(--text-muted); font-size: 14px;">No documents attached.</p>
    `;
  }

  container.innerHTML = `
    <div class="project-hero" style="background: linear-gradient(135deg, ${exp.color}40 0%, #000000 100%); border-color: ${exp.color}80;">
      <div class="project-page-category">${exp.period}</div>
      <h1 class="project-page-title">${exp.icon} ${exp.role}</h1>
      <div class="project-page-subtitle" style="color: ${exp.color};">${exp.company} &mdash; ${exp.location}</div>
    </div>

    <div class="project-content-grid">
      <div class="project-main-col">
        <div class="project-section-title">Key Highlights</div>
        <ul class="exp-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        
        ${imagesHTML}
      </div>
      
      <div class="project-sidebar-col">
        <div class="project-sidebar-box">
          ${filesHTML}
        </div>
      </div>
    </div>
  `;
});
