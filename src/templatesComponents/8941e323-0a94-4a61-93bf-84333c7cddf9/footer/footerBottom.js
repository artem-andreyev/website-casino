export const generateFooterBottom = (content) => `
  <div class="footer-bottom">
    <div class="footer-container">
      <div class="footer-logo-block">
        <p data-id="${content.footerBlock?.bottomInfo?.id || ''}">
          ${content.footerBlock?.bottomInfo?.text || ''}
        </p>
      </div>
    </div>
  </div>
`;
