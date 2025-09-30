export const generateLangDropdown = (content, images, config) => {
  const languages = content.headerBlock?.languages || [];
  const currentLang = content.headerBlock?.selectedLang || 'en';
  const currentLangData = languages.find((lang) => lang.code === currentLang) || languages[0];

  const langItemsHtml = languages.map((lang) => `
    <div class="lang-item ${lang.code === currentLang ? 'selected' : ''}" data-lang="${lang.code}">
      <img 
        loading="lazy" 
        data-image="${lang.code}_flag" 
        src="${images[lang.code + '_flag']?.url || lang.flag}" 
        alt="${lang.code}-flag" 
        class="lang-flag" 
        width="${images[lang.code + '_flag']?.width || 24}" 
        height="${images[lang.code + '_flag']?.height || 24}" 
      />
    </div>
  `).join('\n');

  return `
    <div class="lang-dropdown">
      <div class="lang-current" id="langDropdownToggle">
        <img 
          loading="lazy" 
          src="${images[currentLangData.code + '_flag']?.url || currentLangData.flag}" 
          alt="${currentLangData.code}-flag" 
          class="lang-flag" 
          width="${images[currentLangData.code + '_flag']?.width || 24}" 
          height="${images[currentLangData.code + '_flag']?.height || 24}" 
        />
        <span class="chevron">▾</span>
      </div>
      <div class="lang-list" id="langDropdownList">
        ${langItemsHtml}
      </div>
    </div>
  `;
};
