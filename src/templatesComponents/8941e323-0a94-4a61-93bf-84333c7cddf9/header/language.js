export const generateLangDropdown = (content) => {
  const languages = content.headerBlock?.languages || [];
  const currentLang = content.headerBlock?.selectedLang || 'en';
  const currentLangData = languages.find((lang) => lang.code === currentLang) || languages[0];
  const langItemsHtml = languages.map((lang) => `
    <div class="lang-item ${lang.code === currentLang ? 'selected' : ''}" data-lang="${lang.code}">
      <img loading="lazy" data-image="${lang.code}_flag" src="${lang.flag}" alt="${lang.code}-flag" class="lang-flag" />
    </div>
  `).join('\n');
  return `
    <div class="lang-dropdown">
      <div class="lang-current" id="langDropdownToggle">
        <img loading="lazy" src="${currentLangData.flag}" alt="${currentLangData.code}-flag" class="lang-flag" />
        <span class="chevron">▾</span>
      </div>
      <div class="lang-list" id="langDropdownList">
        ${langItemsHtml}
      </div>
    </div>
  `;
};
