export const generateActionLinks = (content, previewWebsite) => {
  const blocks = content.footerBlock?.infoNavigation?.blocks || [];

  const blocksHtml = blocks.map(block => {
    const linksHtml = (block.links || []).map(link => `
      <a href="${previewWebsite ? link.hrefPreview || '#' : link.href || '#'}" class="footer-link">
        <p data-id="${link.id || ''}">${link.text || ''}</p>
      </a>
    `).join('');

    const imgHtml = block.image ? `
      <img
        loading="lazy"
        src="${block.image.src}"
        alt="${block.image.alt || ''}"
        width="${block.image.width || ''}"
        height="${block.image.height || ''}"
      />
    ` : '';

    return `
      <div class="footer-info-block">
        <div class="footer-info">
          <h3 data-id="${block.title?.id || ''}">${block.title?.text || ''}</h3>
          ${linksHtml}
          ${imgHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="footer-container">
      <div class="footer-info-navigation-block">
        ${blocksHtml}
      </div>
    </div>
  `;
};
