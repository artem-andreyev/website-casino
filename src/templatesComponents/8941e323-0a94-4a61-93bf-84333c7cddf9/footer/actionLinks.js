export const generateActionLinks = (content, pageNames, language, previewWebsite) => {
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
    const pageKey =
      pageName.toLowerCase() === 'main' ? 'index' : pageName.toLowerCase();
    const filePath = pageKey === 'index' ? '/' : `/${pageKey}`;

    const href = previewWebsite
      ? pageKey === 'index'
        ? 'index.html'
        : `${pageKey}.html`
      : `${langPrefix}${filePath}`;

    return `
      <a href="${href}"
         rel="noopener noreferrer"
         class="footer-link"
         data-page="${pageKey}">
        <p>${pageName}</p>
      </a>`;
  }).join('');

  return `
    <div class="footer-container">
      <div class="footer-info-navigation-block">
        <div class="footer-info-block">
          <div class="footer-info">
            <h3 data-id="${content.footerBlock?.navigation.id}">
              ${content.footerBlock?.navigation.text ?? ''}
            </h3>
            ${linksHtml}
          </div>
        </div>
      </div>
    </div>

    ${previewWebsite ? `
    <script>
      (function() {
        const links = document.querySelectorAll('.footer-link');
        links.forEach((link) => {
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
        const links = document.querySelectorAll('.footer-link');
        links.forEach((link) => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            const target = href.endsWith('/') ? href + 'index.html' : href + '.html';
            window.location.href = target;
          });
        });

        window.addEventListener('DOMContentLoaded', () => {
          const page = window.location.pathname;
          if (page.endsWith('.html')) {
            const clean = page.replace(/\\.html$/, '') || '/';
            history.replaceState({}, '', clean);
          }
        });
      })();
    </script>
    `}
  `;
};
