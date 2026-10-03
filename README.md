# Eakawat Buanitisin — Portfolio

A one-page, English-language portfolio for software engineering internship applications. Built with plain HTML, CSS, and JavaScript; no build step or framework is required.

## Files

- `index.html` — page content, project cards, section IDs, and anchor links.
- `styles.css` — colors, layout, typography, and responsive breakpoints.
- `projects.js` — project detail text, tools, and image galleries.
- `script.js` — mobile navigation, project filters, detail popup, image carousel, and footer year.
- `assets/images/` — optimized WebP images extracted from the supplied portfolio PDF.
- `assets/graphics/` — a lightweight SVG circuit illustration used in the background.

## Preview

Open `index.html` in a browser, or serve this folder with any local static server. For example, `python -m http.server 8000`, then visit `http://localhost:8000`.

## Editing

1. Update page text and project cards in `index.html`. Edit popup content and gallery images in `projects.js`.
2. Add a new project card inside `.project-grid` and set its `data-category` to `web`, `iot`, or `3d` so the filter works. Give it a `data-project` value that matches a new entry in `projects.js`.
3. Put new images in `assets/images/` and update the relevant image `src`, `alt`, and `caption` values.
4. Change theme colors in the `:root` variables at the top of `styles.css`.
5. Keep section `id` values in sync with navigation `href="#..."` values so anchor links continue to work.

The IoTE Website card uses a simple text placeholder because no screenshot of that project was included in the supplied PDFs. Project descriptions reflect the PDFs; planned Digital Twin features are described as future work. The project popup supports Left/Right arrow keys for galleries and Escape to close.
