export const generateActionLinks = (images, structure, pageNames, language, previewWebsite) => {
  const isoCode =
    typeof language === 'string'
      ? language.trim()
      : language?.iso_code?.trim() || 'en';

  const isDefaultLanguage =
    typeof language === 'object'
      ? Boolean(language.main_language)
      : isoCode === 'en';

  const langPrefix = isDefaultLanguage ? '' : `/${isoCode}`;

  const linksHtml = (pageNames || []).map((rawName) => {
    const pageName = String(rawName ?? '').trim();
    const pageKey = pageName.toLowerCase() === 'main' ? 'index' : pageName.toLowerCase();
    const cleanPath = pageKey === 'index' ? '/' : `/${pageKey}`;

    const href = previewWebsite
      ? (pageKey === 'index' ? 'index.html' : `${pageKey}.html`)
      : `${langPrefix}${cleanPath}`;

    return `
    <a href="${href}"
       rel="noopener noreferrer"
       class="action-link"
       data-page="${pageKey}">
      <img src="${images[pageKey]}" loading="lazy" alt="${pageName} Icon" class="games-icon" />${pageName}
    </a>`;
  }).join('\n');

  return `
    <div class="header-actions">
      ${linksHtml}
    </div>

    ${previewWebsite ? `
    <script>
      (function() {
        document.querySelectorAll('.action-link').forEach((link) => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            window.location.href = href;
          });
        });
      })();
    </script>
    ` : `
    <script>
      (function() {
        document.querySelectorAll('.action-link').forEach((link) => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            if (href.endsWith('/')) {
              window.location.href = href;
            } else {
              window.location.href = href + '.html';
            }
          });
        });
      })();
    </script>
    `}
  `;
};
