export const generateButtonBlock = (content, images, config) => {
  return `
    <div class="header-registration-row">
      ${generateSearchBlock(content, images, config)}
      ${generateLangDropdown(content, images, config)}
      <a href="/go" target="_blank" rel="noopener noreferrer" class="action-button-link">Registration</a>
    </div>
  `;
};
