export const generateButtonBlock = (content) => {
  return `
    <div class="header-registration-row">
      ${generateSearchBlock(content.headerBlock?.searchPlaceholder, content.headerBlock?.searchIconUrl)}
      ${generateLangDropdown(content.headerBlock?.languages, content.headerBlock?.selectedLang)}
      <a href="/go" target="_blank" rel="noopener noreferrer" class="action-button-link">Registration</a>
    </div>
  `;
};
