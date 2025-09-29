import { generateLogoHtml } from './logo.js';
import { generateActionLinks } from './actionLinks.js';
import { generateButtonBlock } from './buttonBlock.js';
import { generateHeroBlock } from './heroBlock.js';

export const generateHeader = (structure, images, config, pageNames, language, websiteLanguage, previewWebsite) => `
    <header class="casino-header-gradient">
        <div class="header-container">
            <div class="header-block">
                ${generateLogoHtml(images, config)}
                ${generateActionLinks(images, structure, pageNames, language, previewWebsite)}
                ${generateButtonBlock(structure.searchPlaceholder, structure.searchIconUrl, structure.languages, language)}
            </div>
            ${generateHeroBlock(structure.heroContent)}
        </div>
    </header>
`;
