import { generateLogoHtml } from './logo.js';
import { generateActionLinks } from './actionLinks.js';
import { generateButtonBlock } from './buttonBlock.js';
import { generateHeroBlock } from './heroBlock.js';

const images = {
	logo: {
		url: 'https://www.howl-casino.com/images/howl-casino-logo.webp',
		width: 558,
		height: 214,
	},
	index: 'https://img.icons8.com/?size=100&id=JvzawTJthRcR&format=png&color=000000',
	bonuses: 'https://img.icons8.com/?size=100&id=ysfs9QXXXg2S&format=png&color=000000',
	games: 'https://img.icons8.com/?size=100&id=gp2EGUQ15At9&format=png&color=000000',
};

const config = {
	websiteName: 'Howl Casino',
};

const pageNames = ['Main', 'Bonuses', 'Games'];
const languages = [
	{ code: 'en', flag: 'https://www.howl-casino.com/images/Flag_of_the_United_Kingdom_(3-5).webp' },
];
const selectedLang = 'en';
const searchPlaceholder = 'Search...';
const searchIconUrl = 'https://img.icons8.com/ios-filled/24/ffffff/search--v1.png';

const heroContent = {
	hero: {
		title: { id: 'main-title', text: 'Howl Casino' },
		promoMain: 'Unleash the thrill today',
		promoAmount: '€2,000 Bonus',
		promoPlus: 'and 225 Free Spins await!',
		playNowLink: '/go',
		playNowText: 'Play Now',
	},
};

export const generateHeader = () => {
	return `
		<header class="casino-header-gradient">
			<div class="header-container">
				<div class="header-block">
					${generateLogoHtml(images, config)}
					${generateActionLinks(images, {}, pageNames, selectedLang, false)}
					${generateButtonBlock(searchPlaceholder, searchIconUrl, languages, selectedLang)}
				</div>
				${generateHeroBlock(heroContent)}
			</div>
		</header>
	`;
};
