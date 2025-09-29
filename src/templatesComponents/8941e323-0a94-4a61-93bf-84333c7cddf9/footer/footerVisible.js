export const generateFooterVisible = (content) => `
  <div class="footer-visible">
    <div class="footer-container">
      <div class="footer-visible-block">
        <div class="footer-visible-logo">
          <div class="header-logo">
            <img
              loading="lazy"
              data-image="logo"
              src="${content.footerBlock?.visible?.logo?.url || ''}"
              alt="${content.footerBlock?.visible?.logo?.alt || ''}"
              class="logo-image"
              width="${content.footerBlock?.visible?.logo?.width || ''}"
              height="${content.footerBlock?.visible?.logo?.height || ''}"
            />
          </div>
        </div>
        <h1 data-id="${content.footerBlock?.visible?.title?.id || ''}">
          ${content.footerBlock?.visible?.title?.text || ''}
        </h1>
        <a
          href="${content.footerBlock?.visible?.action?.href || '#'}"
          target="${content.footerBlock?.visible?.action?.target || '_blank'}"
          rel="noopener noreferrer"
          class="footer-visible-action-button-link"
          data-id="${content.footerBlock?.visible?.action?.id || ''}"
        >
          ${content.footerBlock?.visible?.action?.text || ''}
        </a>
      </div>
    </div>
    <label for="hide-footer-checkbox" class="footer-visible-close-btn">&times;</label>
  </div>
`;
