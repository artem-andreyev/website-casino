import { generateLogoHtml } from '../../header/logo.js';
import { generateFooterBottom } from './footerBottom.js';
import { generateFooterVisible } from './footerVisible.js';
import { generateActionLinks } from './actionLinks.js';

export const generateFooter = (content, images, config, previewWebsite) => `
  <footer style="width: 100%; height: auto">
    <div class="footer-top">
      ${generateLogoHtml(images, config)}
      ${generateActionLinks(content, previewWebsite)}
    </div>
    ${generateFooterBottom(content)}
    ${generateFooterVisible(content)}
  </footer>
`;
