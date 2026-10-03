const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const dialog = document.querySelector('#project-dialog');
const dialogImage = dialog.querySelector('.dialog-image');
const dialogPlaceholder = dialog.querySelector('.dialog-placeholder');
const galleryControls = dialog.querySelector('.gallery-controls');
const galleryCount = dialog.querySelector('.gallery-count');
const galleryCaption = dialog.querySelector('.gallery-caption');
let activeProject = null;
let activeImageIndex = 0;

function showGalleryImage() {
  const images = activeProject.images;
  const hasImages = images.length > 0;
  dialogImage.hidden = !hasImages;
  dialogPlaceholder.hidden = hasImages;
  galleryControls.hidden = images.length < 2;

  if (!hasImages) {
    dialogImage.removeAttribute('src');
    galleryCaption.textContent = 'No project screenshots available yet.';
    return;
  }

  const image = images[activeImageIndex];
  dialogImage.src = image.src;
  dialogImage.alt = image.alt;
  galleryCaption.textContent = image.caption;
  galleryCount.textContent = `${activeImageIndex + 1} / ${images.length}`;
}

function moveGallery(direction) {
  if (!activeProject || activeProject.images.length < 2) return;
  activeImageIndex = (activeImageIndex + direction + activeProject.images.length) % activeProject.images.length;
  showGalleryImage();
}

function openProject(projectId) {
  const project = window.portfolioProjects[projectId];
  if (!project) return;
  activeProject = project;
  activeImageIndex = 0;
  dialog.querySelector('#dialog-title').textContent = project.title;
  dialog.querySelector('.dialog-meta').textContent = project.meta;
  dialog.querySelector('.dialog-summary').textContent = project.summary;
  dialog.querySelector('.dialog-points').replaceChildren(...project.points.map((point) => {
    const item = document.createElement('li');
    item.textContent = point;
    return item;
  }));
  dialog.querySelector('.dialog-tags').replaceChildren(...project.tools.map((tool) => {
    const tag = document.createElement('span');
    tag.textContent = tool;
    return tag;
  }));
  showGalleryImage();
  dialog.showModal();
  dialog.querySelector('.dialog-close').focus();
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.gallery-prev').addEventListener('click', () => moveGallery(-1));
dialog.querySelector('.gallery-next').addEventListener('click', () => moveGallery(1));
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') moveGallery(-1);
  if (event.key === 'ArrowRight') moveGallery(1);
});
dialog.addEventListener('close', () => {
  activeProject = null;
  dialogImage.removeAttribute('src');
});

document.querySelector('#year').textContent = new Date().getFullYear();
