export const generateButtonBlock = (searchPlaceholder, searchIconUrl, languages, selectedLang) => {
  return `
    <div class="header-registration-row">
      ${generateSearchBlock(searchPlaceholder, searchIconUrl)}
      ${generateLangDropdown(languages, selectedLang)}
      <a href="/go" target="_blank" rel="noopener noreferrer" class="action-button-link">Registration</a>
    </div>
  `;
};
