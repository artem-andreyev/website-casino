export const generateDefaultCSS = (colors, mainContent) => `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: 20vh;
}

body,
header {
  background-color: ${colors.background};
  color: ${colors.text};
  margin-top: 5rem;
}

body {
  font-family: ${mainContent.fontFamily};
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  padding: 6rem 5rem 5rem;
  margin-top: 2rem;
  box-shadow: 0 4px 32px 0 ${colors.border};
  background: ${colors.actionLinkBg};
  background-clip: padding-box;
}

.page-wrapper {
  padding-bottom: 120px;
  width: 100%;
}

.container,
.page-section,
body {
  display: flex;
  flex-direction: column;
}

.container,
.page-section {
  width: 100%;
}

.container {
  max-width: 1240px;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
}

.page-section {
  gap: 3rem;
}

.header-block,
.header-container,
.page-section {
  justify-content: space-between;
  align-items: center;
}

.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
  gap: 3rem;
}

.header-block {
  flex-direction: row;
}

.header-block,
.header-text-block {
  display: flex;
  width: 100vw;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
}

.header-logo {
  width: 100px;
  object-fit: contain;
}

.header-logo img {
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
}

.header-actions {
  flex: 0 0 auto;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.header-registration-button {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-dropdown {
  position: relative;
  display: inline-block;
}

.lang-current {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.actionLinkBg};
  color: ${colors.text};
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  height: 48px;
  min-height: 48px;
  cursor: pointer;
  box-shadow: 0 2px 12px ${colors.border};
  border: 0;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  font-family: sans-serif;
  margin-bottom: 2rem;
  transition: background 0.2s, box-shadow 0.2s;
}

.lang-flag {
  width: 28px;
  height: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 4px ${colors.border};
  object-fit: cover;
  border: 1px solid ${colors.primary};
}

.lang-text {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: ${colors.text};
  text-shadow: 0 1px 6px ${colors.border};
}

.chevron {
  font-size: 1.2rem;
  margin-left: 0.3rem;
  color: ${colors.secondary};
  transition: color 0.2s;
}

.lang-list {
  display: none;
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 120px;
  background: ${colors.actionLinkBg};
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px ${colors.border};
  border: 0;
  z-index: 10;
  padding: 0.5rem 0;
  overflow: hidden;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  height: 32px;
  min-height: 32px;
  cursor: pointer;
  color: ${colors.text};
  font-size: 14px;
  background: ${colors.actionLinkBg};
  border-radius: 0.5rem;
  border: 0;
  text-transform: uppercase;
  font-weight: 800;
  font-family: sans-serif;
  transition: background 0.18s;
}

.lang-item.selected,
  .lang-item:hover {
  background: ${colors.border};
  color: ${colors.text};
}

.action-button-link {
  color: ${colors.text};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  background: ${colors.actionLinkBg};
  border-radius: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  text-decoration: none;
  padding: 1rem 2rem;
  font-family: sans-serif;
  margin-bottom: 2rem;
}

.header-info-block {
  align-self: center;
}

.header-title h1 {
  font-weight: 800;
  font-size: 40px;
  margin-top: 1.3rem;
}

.header-info-block,
.header-info-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: sans-serif;
  width: 100%;
}

.description {
  line-height: 2;
  font-size: 18px;
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  display: block;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.header-toggle {
  display: none;
}

.header-toggle:checked + .description {
  max-height: 100%;
}

.header-read-more-btn {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  display: inline-block;
}

.header-read-more-btn::after {
  content: attr(data-read-more);
}

.header-toggle:checked + .description + .header-read-more-btn::after {
  content: attr(data-close-text);
}

main {
  background-color: ${colors.background};
  max-width: 1240px;
  margin: 0 auto;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}

.button-block,
.button-block-list,
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.button-block-list {
  flex-direction: row;
  align-items: center;
  list-style: none;
  scrollbar-width: none;
  overflow-x: auto;
  white-space: nowrap;
}

.button-block::-webkit-scrollbar {
  display: none;
}

.button-block-list li {
  border-radius: 0.5rem;
  text-decoration: none;
  background-color: ${colors.secondary};
  display: inline-block;
  padding: 0.5rem 0;
  cursor: pointer;
  box-shadow: 0 4px 6px ${colors.border};
}

.button-block-list li a {
  text-decoration: none;
  color: ${colors.text};
  line-height: 2.1rem;
  font-family: sans-serif;
  font-weight: 400;
  white-space: nowrap;
  padding: 1rem 2rem;
}

.button-block-line {
  width: 100%;
  height: 8px;
  background-color: ${colors.background};
  border-radius: 0.8rem;
}

.same-casinos-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  font-family: sans-serif;
}

.same-casinos-block h2 {
  font-size: 28px;
  color: ${colors.title};
}

.same-casinos-card,
.same-casinos-content {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.same-casinos-content {
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}

.same-casinos-card {
  flex: 1 1 calc(25% - 1rem);
  max-width: 300px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${colors.sameCasinosCardBg};
  border-radius: 10px;
}

.same-casinos-card-image,
.same-casinos-card-info {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.same-casinos-card-image {
  height: 140px;
  overflow: hidden;
  border-radius: 10px;
}

.same-casinos-card-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.same-casinos-card-info {
  flex-direction: row;
  gap: 0.5rem;
}

.same-casino-card-icon {
  width: 20px;
  height: 20px;
}

.same-casino-card-icon img {
  width: 100%;
  height: auto;
}

.same-casinos-card-info p:nth-child(2) {
  color: ${colors.border};
  font-size: 16px;
  font-weight: 600;
}

.same-casinos-card-info p:nth-child(3) {
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: 600;
}

.same-casinos-card-info a {
  text-decoration: none;
}

.same-casinos-card-info a > p {
  color: ${colors.border};
  font-size: 16px;
  font-weight: 600;
}

.custom-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
}

.custom-content {
  text-align: center;
  padding: 0 1rem;
  max-width: 600px;
}

.custom-content h1 {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  margin: 0;
  color: ${colors.background};
}

.custom-content p {
  margin: 1.5rem 0;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  line-height: 1.4;
  color: ${colors.text};
}

.custom-btn {
  display: inline-block;
  padding: 0;
  width: 117px;
  min-width: 117px;
  max-width: 117px;
  height: 48px;
  min-height: 48px;
  max-height: 48px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 2px 8px ${colors.border};
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-btn:hover {
  filter: brightness(0.8);
  transform: translateY(-2px);
}

.action-link {
  color: ${colors.text};
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border-collapse: collapse;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 0.3rem;
}

.action-link-icon {
  width: 25px;
  height: 25px;
}

.game-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
}

.game-block h2,
.info-content h2,
.registration-gamer h2,
.registration-steps-block h2 {
  font-size: 28px;
  color: ${colors.title};
}

.game-block p,
.info-content p {
  font-size: 16px;
}

.game-card,
.game-list {
  display: flex;
  width: 100%;
  gap: 1rem;
}

.game-list {
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.game-card {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 255px;
  text-align: center;
}

.game-image {
  width: 255px;
  height: 255px;
  overflow: hidden;
  border-radius: 1rem;
  flex-shrink: 0;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.game-block-action-button-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: ${colors.text};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 16px;
  background: ${colors.secondary};
  border-radius: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: sans-serif;
}

.info-block,
.info-block-part,
.info-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 2rem;
}

.info-block-part,
.info-content {
  flex-direction: row;
  align-items: flex-start;
}

.info-content {
  flex-direction: column;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.game-slider-block h3,
.info-content h3 {
  font-size: 24px;
  color: ${colors.title};
}

.info-content h4 {
  font-size: 20px;
  color: ${colors.title};
}

.info-content-image {
  width: 100%;
  height: 400px;
}

.info-content-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.info-block-action-button-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.text};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 16px;
  background: ${colors.actionLinkBg};
  border-radius: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: sans-serif;
  padding: 1rem 3rem;
}

.info-block-list {
  padding-left: 2rem;
  padding-bottom: 1rem;
}

.info-read-toggle {
  display: none;
}

.info-read-wrapper {
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
}

.info-read-toggle2:checked ~ .info-read-wrapper2,
.info-read-toggle:checked ~ .info-read-wrapper {
  -webkit-line-clamp: unset;
  overflow: visible;
}

.info-read-wrapper2::after,
.info-read-wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2em;
  width: 100%;
  background: linear-gradient(to bottom, transparent, ${colors.text});
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s;
}

.info-read-toggle:checked ~ .info-read-wrapper::after {
  opacity: 0;
  pointer-events: none;
}

.info-read-more-label {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  display: inline-block;
  margin-top: 0.5em;
}

.info-read-toggle:not(:checked) ~ .info-read-more-label::after {
  content: "undefined";
}

.info-read-toggle:checked ~ .info-read-more-label::after {
  content: "undefined";
}

.info-read-toggle2 {
  display: none;
}

.info-read-wrapper2 {
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
}

.info-read-more-label2 {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  display: inline-block;
}

.info-read-toggle2:checked ~ .info-read-wrapper2::after {
  opacity: 0;
}

.info-read-toggle2:not(:checked) ~ .info-read-more-label2::after {
  content: "undefined";
}

.info-read-toggle2:checked ~ .info-read-more-label2::after {
  content: "undefined";
}

.game-slider-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 1rem;
}

.game-slider-wrapper {
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.game-slider-wrapper::-webkit-scrollbar {
  display: none;
}

.game-slider,
.game-slider-card {
  display: flex;
  align-items: center;
  width: 100%;
}

.game-slider {
  flex-direction: row;
  gap: 1rem;
  scroll-behavior: smooth;
}

.game-slider-card {
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  scroll-snap-align: start;
  gap: 0.5rem;
}

.game-slider-card p {
  font-size: 14px;
  font-weight: 600;
}

.game-slider-image {
  width: 210px;
  height: 210px;
  position: relative;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
}

.game-slider-image img,
.game-slider-overlay {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.game-slider-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${colors.actionLinkBg};
  color: ${colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  z-index: 2;
  margin: 0;
  padding: 0;
}

.game-slider-image:hover .game-slider-overlay,
.game-slider-overlay:focus {
  opacity: 1;
}

.game-slider-image:hover img {
  opacity: 0.7;
}

.registration-block,
.registration-gamer,
.registration-steps-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 1rem;
}

.registration-gamer,
.registration-steps-block {
  gap: 0.5rem;
}

.registration-gamer p,
.registration-steps-block p {
  font-size: 16px;
}

.registration-steps {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
}

.registration-steps-list {
  width: 100%;
  padding: 2rem;
}

.registration-banner-navigation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 4rem;
  border-radius: 1rem;
  background-color: ${colors.background};
  text-align: center;
  color: ${colors.text};
}

.registration-banner-navigation h2 {
  font-size: 28px;
  color: ${colors.text};
}

.game-providers-list {
  margin-left: 1.5rem;
}

.registration-banner-navigation p {
  font-size: 14px;
}

.casino-information-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 1rem;
}

.casino-information-block h2,
.game-description-block h2,
.main-page-block h2,
.payments-block h2,
.plus-minus-block h2,
.steps-block h2,
.toggle-block h2 {
  font-size: 28px;
  color: ${colors.title};
}

.casino-information-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 1rem;
  background-color: ${colors.background};
  table-layout: fixed;
  box-shadow: 10px 10px 50px 0 ${colors.border};
  padding: 1.2rem 2rem;
  font-family: sans-serif;
}

.casino-information-table td {
  border-bottom: 1px solid ${colors.text};
  width: 50%;
  font-size: 16px;
  padding: 0.8rem;
}

.casino-information-table tr:last-child td,
.table-block tbody tr:last-child td {
  border-bottom: none;
}

.casino-information-table td:first-child {
  font-weight: 700;
}

.casino-information-table a {
  color: ${colors.title};
  text-decoration: underline;
  font-weight: 600;
}

.plus-minus-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 1rem;
}

.faq-item summary,
.plus-minus-content {
  display: flex;
  justify-content: space-between;
}

.plus-minus-content,
.plus-minus-list {
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  gap: 2rem;
}

.plus-minus-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.plus-minus-list h4 {
  font-size: 18px;
  color: ${colors.title};
}

.plus-minus-item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1.6rem 2rem;
  background-color: ${colors.background};
  box-shadow: 5px 5px 50px 0 ${colors.border};
  width: 100%;
}

.plus-minus-item p {
  font-weight: 500;
  font-size: 16px;
}

.plus-minus-item-img {
  width: 30px;
  height: 30px;
}

.plus-minus-item-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.toggle-block,
.toggle-block-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toggle-block {
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
}

.toggle-block-content {
  justify-content: center;
  align-items: center;
}

.faq-item,
footer {
  background-color: ${colors.background};
}

.faq-item {
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 5px 5px 50px 0 ${colors.border};
}

.faq-item details {
  border: 0;
}

.faq-item summary {
  align-items: center;
  list-style: none;
  font-size: 16px;
  font-weight: 600;
}

.faq-item summary::after {
  content: "+";
  font-size: 28px;
  line-height: 2rem;
  transition: transform 0.5s ease;
}

.faq-item details[open] summary::after {
  content: "-";
}

.faq-content {
  cursor: text;
  font-size: 14px;
  padding-top: 0.5rem;
}

footer {
  text-align: center;
}

.footer-top {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 1rem;
}

.footer-bottom,
.footer-visible {
  padding: 2rem;
  max-width: 100%;
  width: 100%;
  background-color: ${colors.background};
  height: 70px;
}

.footer-visible {
  padding: 1rem;
  background-color: ${colors.primary};
  position: fixed;
  bottom: 0;
  z-index: 999;
  color: ${colors.text};
}

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

.footer-info-block,
.footer-info-navigation-block {
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
}

.footer-info-block {
  flex-direction: column;
  gap: 3rem;
  font-family: sans-serif;
  text-align: left;
  width: 100%;
}

.footer-info {
  gap: 1rem;
  color: ${colors.text};
  width: 100%;
}

.footer-info h3 {
  font-size: 18px;
}

.footer-info p {
  font-weight: 400;
  font-size: 14px;
}

.footer-actions,
.footer-actions-block,
.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 3rem;
}

.footer-actions-block {
  font-family: sans-serif;
  gap: 1rem;
}

.footer-actions {
  gap: 0.7rem;
}

.footer-action-link {
  color: ${colors.text};
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
}

.footer-logo-block {
  width: 100%;
  font-family: sans-serif;
}

.footer-logo-block p {
  font-size: 13px;
  color: ${colors.text};
  text-align: left;
  align-self: flex-start;
}

.footer-logo-block,
.footer-logos,
.footer-visible-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer-logos {
  gap: 2rem;
}

.footer-visible-block {
  width: 100%;
  font-family: sans-serif;
}

.footer-actions-block h3,
.footer-visible-block h1 {
  font-size: 18px;
  color: ${colors.text};
  margin-bottom: 3.6rem;
}

.footer-visible-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  color: ${colors.text};
  font-size: 32px;
  cursor: pointer;
  margin-right: 5px;
}

.footer-visible-action-button-link {
  margin-top: -3.8rem;
  color: ${colors.text};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  padding-bottom: 10rem;
  background: ${colors.actionLinkBg};
  border-radius: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  text-decoration: none;
  padding: 1rem 2rem;
  font-family: sans-serif;
}

.hide-footer-checkbox:checked ~ .page-wrapper {
  padding-bottom: 0;
}

.hide-footer-checkbox:checked ~ .page-wrapper footer .footer-visible {
  display: none;
}

.steps-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.steps-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  align-items: stretch;
}

.steps-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-width: 240px;
  width: 100%;
  min-height: 450px;
  background-color: ${colors.background};
  font-family: sans-serif;
  text-align: center;
}

.steps-card-img {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.steps-card-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  display: block;
}

.steps-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${colors.text};
  text-align: center;
}

.steps-card-info {
  font-size: 1.08rem;
  color: ${colors.secondary};
  margin-top: 0.7rem;
  text-align: left;
  max-width: 520px;
  width: 100%;
}

.steps-card-info {
  font-size: 14px;
  font-weight: 400;
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  flex-grow: 1;
}

.toggle {
  display: none;
}

.toggle:checked + .steps-card-info {
  max-height: 1000px;
}

.read-more-btn::after {
  content: "Read more";
}

.toggle:checked + .steps-card-info + .read-more-btn::after {
  content: "Close";
}

.read-more-btn {
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  color: ${colors.text};
  padding-bottom: 20px;
}

.payments-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.payments-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  align-items: stretch;
}

.payments-img {
  width: 150px;
  height: 110px;
  background-color: ${colors.text};
  border-radius: 10px;
}

.payments-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.game-description-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.game-description-block p,
.game-description-card p,
.game-description-card-content p {
  font-size: 16px;
  color: ${colors.text};
}

.game-description-card,
.game-description-card-wrapper,
.game-description-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.game-description-card,
.game-description-card-wrapper {
  flex-direction: row;
  gap: 1rem;
}

.game-description-card-wrapper {
  flex-direction: column;
  align-items: flex-start;
}

.game-description-card-img {
  width: 200px;
  height: 200px;
}

.game-description-card-img img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.game-description-card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
}

.game-description-card-content h3 {
  font-size: 21px;
  color: ${colors.title};
}

.table-block {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.table-block table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px ${colors.border};
}

.table-block th {
  background-color: ${colors.border};
  color: ${colors.text};
  font-weight: 700;
}

.table-block td,
.table-block th {
  padding: 20px;
  font-size: 16px;
  text-align: left;
}

.table-block tbody tr:nth-child(2n),
.table-block tbody tr:nth-child(odd) {
  background-color: ${colors.text};
}

.table-block tbody tr:hover {
  background-color: ${colors.text};
}

.author-bio-block-wrapper {
  width: 100%;
}

.author-bio-block {
  width: 100%;
  display: block;
  padding: 0;
  font-family: inherit;
  margin: 0;
}

.author-bio-block-wrapper.purple-highlight .author-info {
  width: 100%;
  padding: 0;
  margin: 0;
  display: block;
}

.author-bio-block-wrapper.purple-highlight .author-name,
.author-bio-block-wrapper.purple-highlight .author-desc {
  width: 100%;
  text-align: left;
  margin: 0 0 1.2rem 0;
  padding: 0;
}

.author-bio-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;
}

.author-bio-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.author-info {
  flex: 1;
}

.author-name {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  color: ${colors.title};
  display: flex;
  align-items: center;
  gap: 6px;
}

.author-desc,
.author-title {
  font-size: 14px;
  color: ${colors.text};
}

.author-title {
  margin: 4px 0 10px;
}

.author-desc {
  line-height: 1.4;
  margin-bottom: 8px;
}

.author-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: ${colors.title};
  border-radius: 6px;
  text-decoration: none;
}

.author-contact svg {
  fill: ${colors.text};
  width: 18px;
  height: 18px;
}

.heading2-body-text-block,
.main-page-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.main-page-block {
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.main-page-block p,
.page-block p {
  font-size: 16px;
}

.heading3-tody-text-block,
.page-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  gap: 2rem;
}

.page-block {
  flex-direction: column;
  justify-content: flex-start;
  font-family: sans-serif;
  gap: 0.5rem;
}

.page-block h3 {
  font-size: 24px;
  color: ${colors.title};
}

.cta2-buttons-block {
  flex-direction: row;
  gap: 2rem;
}

.CTA-button-block,
.CTA-card-block,
.cta2-buttons-block {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}

.CTA-card-block {
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.CTA-card-block h2 {
  font-size: 28px;
  color: ${colors.text};
}

.steps-horizontal-wrapper {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}

.step-card {
  background: ${colors.background};
  color: ${colors.secondary};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 ${colors.border};
  padding: 2.5rem 2rem 2rem 2rem;
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.border};
  overflow: visible;
}

.step-card-img {
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 ${colors.border};
  margin-bottom: 1.5rem;
  max-width: 200px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
}

.step-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.9rem;
  color: ${colors.text};
  text-align: center;
}

.step-card-desc {
  font-size: 1.08rem;
  color: ${colors.secondary};
  text-align: left;
  margin-top: 0.7rem;
  word-break: break-word;
  overflow-wrap: break-word;
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  display: block;
}

.footer-link {
  color: ${colors.text};
  text-decoration: none;
  display: inline-block;
}

.footer-link p {
  color: ${colors.text};
  text-decoration: none;
}

@media (max-width: 900px) {
  .header-info-block,
  .header-info-text {
    align-items: center;
    justify-content: center;
  }
  .header-info-block {
    align-self: center;
    gap: 1rem;
    width: 100%;
  }
  .header-info-text {
    text-align: center;
  }
  .header-title h1 {
    font-size: 26px;
  }
  .header-info-text p {
    font-size: 14px;
  }
  .action-button-link {
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 900px) {
  .steps-horizontal-wrapper {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  .step-card {
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
}

`;