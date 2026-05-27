import { projects } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  const project = projects[projectId];

  if (!project) {
    document.getElementById('project-container').innerHTML = `<h2>Project not found.</h2>`;
    return;
  }

  // Set Page Title
  document.title = `${project.title} — Joyal Jojo`;

  const container = document.getElementById('project-container');

  let bannerStyle = `background: ${project.gradient};`;
  let bannerImg = '';
  if (project.bannerImage) {
    bannerImg = `<img src="${project.bannerImage}" class="project-hero-img" alt="${project.title}" />`;
  }

  let tagsHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  
  let galleryHTML = '';
  if (project.images && project.images.length > 0) {
    galleryHTML = `
      <h3 class="project-section-title">Gallery</h3>
      <div class="project-gallery">
        ${project.images.map(img => `<img src="${img.src}" alt="${img.alt}" class="project-gallery-img" onclick="window.open('${img.src}', '_blank')" />`).join('')}
      </div>
    `;
  }

  let filesHTML = '';
  if (project.files && project.files.length > 0) {
    filesHTML = `
      <div class="project-sidebar-box">
        <h3 class="project-section-title" style="margin-bottom: 24px;">Attachments</h3>
        ${project.files.map(f => `
          <a href="${f.url}" target="_blank" class="project-file-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            ${f.label}
          </a>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="project-hero" style="${bannerStyle}">
      ${bannerImg}
      <div class="project-hero-overlay">
        ${project.category ? `<div class="project-page-category">${project.category}</div>` : ''}
        <h1 class="project-page-title">${project.title}</h1>
        <div class="project-page-subtitle">${project.subtitle}</div>
      </div>
    </div>

    <div class="project-content-grid">
      <div class="project-main">
        <h3 class="project-section-title">Overview</h3>
        <p class="project-page-desc">${project.description}</p>
        
        <h3 class="project-section-title">Technologies & Skills</h3>
        <div class="project-page-tags">
          ${tagsHTML}
        </div>

        ${galleryHTML}
      </div>
      <div class="project-sidebar">
        ${filesHTML}
      </div>
    </div>
  `;
});
