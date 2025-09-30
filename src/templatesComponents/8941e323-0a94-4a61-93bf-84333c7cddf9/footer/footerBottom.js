export const generateFooterBottom = (mainContent, config) => `
  <div class="footer-bottom">
    <div class="footer-container">
      <div class="footer-logo-block">
        <p data-id="${mainContent.footerBlock?.bottomInfo?.id || ''}">
          ${mainContent.footerBlock?.bottomInfo?.text || ''}
        </p>
      </div>
    </div>
  </div>
`;
