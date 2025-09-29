export const generateMainCSS = (colors, mainContent) => `

@media (max-width: 700px) {
  .header-block,
  .header-block.sticky-header {
    display: none !important;
  }
}

@media (max-width: 700px) {
  .header-block.sticky-header {
    background: rgba(24, 16, 43, 0.96) !important;
    box-shadow: 0 2px 10px 0 rgba(24, 16, 43, 0.13) !important;
    padding: 0.4rem 0.2rem 0.4rem 0.2rem !important;
    min-height: 54px !important;
    height: auto !important;
    z-index: 2000 !important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
  .action-button-link{
    width: 1rem !important;
  }
  .heading3-tody-text-block{
    margin-left: -1rem !important;
  }
  .header-block {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: rgba(30, 20, 60, 0.92);
    box-shadow: 0 2px 10px 0 rgba(24, 16, 43, 0.10);
    border-radius: 0 0 1.1rem 1.1rem;
    padding: 0.25rem 0.6rem 0.25rem 0.6rem !important;
    min-height: 44px;
    height: 44px;
    width: 100vw;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    font-size: 1rem;
    gap: 0.3rem;
    transition: background 0.2s, box-shadow 0.2s;
  }
  @media (max-width: 700px) {
    .header-block {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: rgba(30, 20, 60, 0.92);
      box-shadow: 0 2px 10px 0 rgba(24, 16, 43, 0.10);
      border-radius: 0 0 1.1rem 1.1rem;
      padding: 0.25rem 0.6rem 0.25rem 0.6rem !important;
      min-height: 44px;
      height: 44px;
      width: 100vw;
      max-width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
      font-size: 1rem;
      gap: 0.3rem;
      transition: background 0.2s, box-shadow 0.2s;
    }
    .header-block .header-logo img {
      max-width: 80px !important;
      height: 32px !important;
      margin: 0 !important;
      display: block !important;
    }
    .header-block .header-actions,
    .header-block .header-registration-row {
      flex-direction: row !important;
      align-items: center !important;
      gap: 0.3rem !important;
      margin: 0 !important;
    }
    .header-block .header-search-block,
    .header-block .lang-dropdown,
    .header-block .action-button-link {
      width: auto !important;
      min-width: 0 !important;
      max-width: 60px !important;
      font-size: 0.95rem !important;
      padding: 0.2em 0.3em !important;
      margin: 0 !important;
    }
    .header-block .search-form {
      padding: 0.1em 0.2em 0.1em 0.5em !important;
      border-radius: 1em !important;
      min-width: 0;
      width: 60px !important;
      box-shadow: none !important;
    }
    .header-block .search-input {
      font-size: 0.95rem !important;
      padding: 0.2em 0.2em 0.2em 0 !important;
      width: 30px !important;
      min-width: 0;
    }
    .header-block .search-button {
      padding: 0 0.1em !important;
    }
  }
  .footer-info-block:nth-child(3){
    margin-right: -11rem !important;
  }
  .footer-info-block{
    margin-left: -6rem !important;
  }
  .header-block.sticky-header .header-logo img {
    max-width: 120px !important;
    height: auto !important;
    margin: 0 auto !important;
    display: block !important;
  }
  .header-block.sticky-header .header-actions {
    flex-direction: row !important;
    gap: 0.5rem !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.2rem !important;
  }
  .header-block.sticky-header .header-registration-row {
    flex-direction: row !important;
    gap: 0.5rem !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100%;
    margin: 0 !important;
  }
  .header-block.sticky-header .header-search-block,
  .header-block.sticky-header .lang-dropdown,
  .header-block.sticky-header .action-button-link {
    width: auto !important;
    min-width: 0 !important;
    max-width: 100px !important;
    font-size: 0.98rem !important;
    padding: 0.3em 0.5em !important;
    margin: 0 !important;
  }
  .header-block.sticky-header .search-input {
    font-size: 0.98rem !important;
    padding: 0.3em 0.3em 0.3em 0 !important;
    width: 70px !important;
  }
  .header-block.sticky-header .search-form {
    padding: 0.1em 0.3em 0.1em 0.7em !important;
    border-radius: 1.2em !important;
  }
}

@media (max-width: 700px) {
  body .header-block.sticky-header,
  html .header-block.sticky-header {
    position: static !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
    z-index: initial !important;
    background: inherit !important;
    background-color: inherit !important;
    box-shadow: none !important;
    transition: none !important;
  }
}

@media (max-width: 700px) {
  .header-block.sticky-header {
    position: static !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
    z-index: initial !important;
    background-color: inherit !important;
    box-shadow: none !important;
  }
}

@media (max-width: 700px) {
  html, body {
    width: 100vw;
    min-width: 0;
    overflow-x: hidden;
  }
  .container, .page-wrapper, .header-container {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  .main-page-block,
  .main-page-block.purple-highlight,
  .promo-bonus-block,
  .plus-minus-block.purple-highlight,
  .steps-block,
  .heading2-body-text-block,
  .heading3-tody-text-block,
  .CTA-card-block,
  .author-bio-block-wrapper,
  .faq-plus-minus-block {
    max-width: 100vw;
    width: 100%;
    min-width: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 1.1rem !important;
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
    box-sizing: border-box;
  }
  .promo-bonus-block,
  .steps-block {
    flex-direction: column !important;
    gap: 1.1rem !important;
    align-items: stretch !important;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem !important;
  }
  .promo-bonus-image img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .steps-horizontal-wrapper {
    flex-direction: column !important;
    gap: 1.1rem !important;
    width: 100%;
    min-width: 0;
  }
  .step-card {
    width: 100%;
    min-width: 0;
    max-width: 100vw;
    margin: 0 auto;
    border-radius: 1.1rem;
    box-sizing: border-box;
  }
  .header-block {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
  .header-logo img {
    max-width: 80vw;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  .header-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    width: 100%;
    margin-bottom: 0.7rem;
  }
  .header-text-block {
    padding: 0.5rem 0;
  }
  .howl-casino-title {
    font-size: 2rem;
    word-break: break-word;
  }
  .header-promo-amount {
    font-size: 1.5rem;
  }
  .header-promo-main, .header-promo-plus {
    font-size: 1rem;
  }
  .action-button-link, .play-now-animated {
    width: 100%;
    min-width: 0;
    font-size: 1.08rem;
    padding: 0.9em 0;
    margin-top: 0.3rem;
    text-align: center;
  }
  .game-slider-block, .game-slider-wrapper, .game-slider {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    overflow-x: auto;
    box-sizing: border-box;
  }
  .game-slider-card {
    min-width: 220px;
    max-width: 90vw;
    margin: 0 auto 1rem auto;
  }
  .game-slider-image img, .provider-slider-img {
    max-width: 90vw;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .heading3-tody-text-block .page-block h3 {
    font-size: 1.1rem;
    padding: 1rem;
  }
  .heading3-tody-text-block .page-block p {
    font-size: 0.98rem;
    padding: 1rem;
  }
  .footer-top, .footer-container {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  .footer-info-block, .footer-info-navigation-block {
    width: 100%;
    min-width: 0;
    max-width: 100vw;
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .header-registration-row {
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    width: 100%;
    margin-top: 1.1rem;
    margin-bottom: 0.7rem;
  }
  .header-search-block {
    margin-right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .search-form {
    width: 100%;
    min-width: 0;
    padding: 0.12em 0.5em 0.12em 0.9em;
    border-radius: 1.5em;
    box-shadow: 0 1px 6px 0 #a259e622;
  }
  .search-input {
    width: 100%;
    font-size: 1rem;
    padding: 0.5em 0.5em 0.5em 0;
    min-width: 0;
  }
  .search-button {
    padding: 0 0.2em;
  }
  .lang-dropdown {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .action-button-link {
    width: 100%;
    min-width: 0;
    text-align: center;
    font-size: 1.08rem;
    padding: 0.9em 0;
    margin-top: 0.3rem;
  }
}

.header-registration-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.header-search-block {
  display: flex;
  align-items: center;
  margin-right: 1.2rem;
}

.search-form {
  display: flex;
  align-items: center;
  background: var( --button-bg, linear-gradient(98.07deg, #691aea -16.15%, #6711f1 146.12%));
  border-radius: 0.5rem;
  padding: 0.18em 0.7em 0.18em 1.1em;
  box-shadow: 0 2px 12px 0 #a259e633;
  position: relative;
  margin-bottom: 2rem;
  min-height: 48px;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  padding: 0.5em 0.7em 0.5em 0;
  width: 10em;
  min-width: 0;
  border-radius: 2em 0 0 2em;
  transition: background 0.2s, color 0.2s;
}

.search-input::placeholder {
  color: #f3eaffcc;
  opacity: 1;
}

.search-button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 0.3em;
  margin-left: -0.2em;
}

.search-icon {
  width: 1.3em;
  height: 1.3em;
  filter: drop-shadow(0 1px 4px #a259e655);
}

.howl-casino-title {
  font-size: 3.2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3.2rem;
  background: #ffe259;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 12px #a259e633;
}

.header-promo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  margin-bottom: 2.2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
}

.header-promo-main {
  font-size: 1.25rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-align: center;
  width: 100%;
}

.header-promo-amount {
  font-size: 2.6rem;
  color: #ffe259;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.01em;
  margin: 0.1em 0 0.1em 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
}

.header-promo-plus {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-align: center;
  width: 100%;
}

@keyframes play-now-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 24px 0 #a259e655;
  }
  50% {
    transform: scale(1.12);
    box-shadow: 0 8px 32px 0 #a259e6aa;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 24px 0 #a259e655;
  }
}

.play-now-animated {
  font-size: 1.5rem;
  padding: 1.1em 2.5em;
  border-radius: 2.5em;
  min-width: 180px;
  min-height: 60px;
  box-shadow: 0 4px 24px 0 #a259e655;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  z-index: 1;
  animation: play-now-pulse 1.6s infinite;
}

.play-now-text {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.games-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
  margin-right: 0.4em;
  filter: brightness(0) invert(1);
  display: inline-block;
  margin-bottom: 0.2rem;
}

.provider-slider-img {
  width: 210px;
  height: 210px;
  object-fit: cover;
  border-radius: 5px;
  max-height: 100%;
  max-width: 100%;
  display: block;
}

.provider-slider-link {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: block;
}

.provider-slider-img {
  width: 210px;
  height: 210px;
  object-fit: cover;
  border-radius: 5px;
}

.game-slider-image {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsible-title {
  margin-bottom: 2rem;
}

.responsible-subtitle {
  margin-bottom: 2rem;
  margin-top: 3rem;
}

.purple-quote-icon {
  vertical-align: middle;
  margin-right: 0.7rem;
}

.payment-method-item {
  min-height: 3.5rem;
}

.payment-method-item-inner {
  display: flex;
  align-items: flex-start;
}

.payment-method-btc-logo {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-left: -2rem;
  margin-top: 0.1rem;
}

.casino-header-gradient {
background-color: #350085;
background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23d8d1e3' fill-opacity='0.34' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.promo-bonus-block {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: #232136;
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  margin: 2.5rem 0;
  gap: 2.5rem;
  border: none;
  min-width: 0;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
}

.promo-bonus-content {
  flex: 1 1 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.promo-bonus-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(124, 58, 237, 0.12);
  margin-left: 1.2rem;
}

.promo-bonus-list {
  list-style: disc inside;
  font-size: 1.15rem;
  line-height: 1.7;
  margin: 0;
  padding-left: 1.2rem;
}

.promo-bonus-list li {
  margin-bottom: 0.7rem;
}

.promo-bonus-image {
  flex: 0 0 240px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.promo-bonus-image img {
  max-width: 220px;
  height: auto;
}

@media (max-width: 900px) {
  .promo-bonus-block {
    flex-direction: column;
    padding: 1.2rem 1rem;
    gap: 1.2rem;
  }
  .promo-bonus-image {
    flex: 0 0 auto;
    justify-content: center;
    margin-top: 1.2rem;
  }
  .promo-bonus-title {
    font-size: 1.3rem;
  }
}

.footer-info-block:nth-child(3) {
  margin-left: 40rem;
}

.heading3-tody-text-block .page-block p {
  color: #f3f3f3;
  margin-bottom: 1.3rem;
  margin-top: 0;
  margin-left: 0.5rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  font-size: 1.08rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.heading3-tody-text-block .page-block h3 {
  background: #232136;
  color: #f3f3f3;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(30, 20, 60, 0.18);
  padding: 1.5rem;
  position: relative;
  font-size: 1.08rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border: 3px solid #2d2a45;
  margin-left: 1rem;
}

.header-block {
  position: fixed;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #191924;
}

.header-block.sticky-header {
  background-color: #18102b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 2000;
  background: #18102b;
  box-shadow: 0 4px 24px 0 rgba(24, 16, 43, 0.18);
}

.accordion-question {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0;
  margin: 0 0 0.2rem 0;
  outline: none;
  gap: 1.1rem;
}

.accordion-arrow {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  transform: rotate(45deg);
  margin-left: 0.5rem;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.accordion-item.open .accordion-arrow {
  transform: rotate(-135deg);
}

.accordion-answer {
  display: none;
  margin-top: 0.5rem;
}

.accordion-item.open .accordion-answer {
  display: block;
}

.faq-plus-minus-block {
  border: 1.5px solid #b993f7;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  background: linear-gradient(120deg, #b993f7 0%, #a259e6 100%);
  border-radius: 2.5rem;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin: 2.5rem 0;
  position: relative;
  overflow: hidden;
  color: #fff;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
}

.faq-plus-minus-block h2 {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.2rem;
  margin-top: 0;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
}

.faq-plus-minus-block .plus-minus-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-plus-minus-block .plus-minus-item {
  background: var( --button-bg, linear-gradient(98.07deg, #691aea -16.15%, #6711f1 146.12%));
  border-radius: 1.3rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  padding: 1.3rem 1.5rem 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.2rem;
  border: 1.2px solid #b993f7;
  position: relative;
  min-width: 0;
  color: #fff;
}

.faq-plus-minus-block .plus-minus-item .plus-minus-item-img,
.faq-plus-minus-block .plus-minus-item .accordion-question {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.faq-plus-minus-block .plus-minus-item .plus-minus-item-img {
  margin-bottom: 0;
  margin-right: 0.7rem;
  margin-top: 0.2rem;
}

.faq-plus-minus-block .plus-minus-item .accordion-question {
  flex: 1 1 auto;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
}

.faq-plus-minus-block .plus-minus-item .accordion-question .faq-question {
  margin-bottom: 0;
}

.faq-plus-minus-block .plus-minus-item-img {
  flex-shrink: 0;
  margin-right: 0.7rem;
  margin-top: 0.2rem;
}

.faq-plus-minus-block .plus-minus-item-img img {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.7rem;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  background: #fff2;
  object-fit: cover;
}

.faq-plus-minus-block .faq-question {
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
}

.faq-plus-minus-block .faq-answer {
  color: #f0eaff;
  font-size: 1.07rem;
  font-weight: 400;
  margin-bottom: 0.1rem;
}

.toggle-block.purple-highlight {
  background: linear-gradient(120deg, #b993f7 0%, #a259e6 100%);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(162, 93, 230, 0.13),
    0 1.5px 6px 0 rgba(162, 93, 230, 0.09);
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  margin: 2.5rem 0 2.5rem 0;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.toggle-block.purple-highlight h2 {
  color: #fff;
  margin-bottom: 2.2rem;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.toggle-block.purple-highlight .toggle-block-content {
  margin-top: 0;
}

.toggle-block.purple-highlight .faq-item {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1.1rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px 0 rgba(162, 93, 230, 0.08);
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;
  transition: box-shadow 0.2s;
}

.toggle-block.purple-highlight .faq-item:last-child {
  margin-bottom: 0;
}

.toggle-block.purple-highlight .faq-item details[open] {
  box-shadow: 0 4px 16px 0 rgba(162, 93, 230, 0.13);
}

.toggle-block.purple-highlight .faq-item summary {
  color: #f0eaff;
  font-size: 1.13rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  padding: 0.2rem 0;
  transition: color 0.2s;
}

.toggle-block.purple-highlight .faq-item details[open] summary {
  color: #fff;
}

.toggle-block.purple-highlight .faq-content p {
  color: #f7f3ff;
  font-size: 1.07rem;
  margin: 0.7rem 0 0.2rem 0;
}

.main-page-block.purple-highlight#responsible-gambling-block h2 {
  margin-bottom: 1.3rem;
  margin-top: 0;
}

.main-page-block.purple-highlight#responsible-gambling-block h3 {
  margin-top: 2.1rem;
  margin-bottom: 0.7rem;
  margin-top: 0;
  margin-bottom: 12px;
  margin-bottom: 1.1rem;
  margin-top: 0;
}

.responsible-tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1.2rem 0 1.7rem 0;
}

.responsible-tips-list > div {
  padding-left: 0.2rem;
  font-size: 1.08rem;
  color: #f0eaff;
  position: relative;
}

.purple-quote-block {
  background: linear-gradient(98.07deg, #a259e6 0%, #ab81f3 100%);
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.13);
  padding: 1.7rem 2.2rem;
  margin: 2.2rem 0 0.5rem 0;
  color: #fff;
  font-size: 1.13rem;
  font-style: italic;
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.purple-quote-block svg {
  vertical-align: middle;
  margin-right: 0.7rem;
  flex-shrink: 0;
}

.purple-quote-block span {
  display: inline-block;
}

.purple-quote-remember {
  font-size: 1.08rem;
  font-style: normal;
  font-weight: 500;
  display: block;
  margin-top: 0.7rem;
}

.payment-methods-list {
  list-style: none;
  padding: 0;
  margin-top: -2.5rem;
  margin-bottom: 2.2rem;
}

.payment-methods-list:not(:last-child) {
  margin-bottom: 2.2rem;
}

.payment-methods-list li {
  background: linear-gradient(98.07deg, #a259e6 0%, #ab81f3 100%);
  color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  margin-bottom: 1.3rem;
  padding: 1.5rem 1.7rem 1.2rem 3.2rem;
  position: relative;
  font-size: 1.08rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.payment-method-title {
  font-weight: 700;
  font-size: 1.13rem;
  margin-bottom: 0.2rem;
  color: #fff;
}

.payment-method-desc {
  color: #f0eaff;
  font-size: 1.05rem;
  font-weight: 400;
}

.plus-minus-block.purple-highlight .plus-minus-item-img {
  align-self: flex-start;
  margin-bottom: 1rem;
}

.plus-minus-block.purple-highlight .plus-minus-item {
  background: linear-gradient(
    120deg,
    rgba(162, 89, 230, 0.18) 0%,
    rgba(124, 58, 237, 0.16) 100%
  );
  border-radius: 1.3rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  padding: 1.3rem 1.5rem 1.1rem 1.5rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border: 1.2px solid #b993f7;
  transition: box-shadow 0.18s, transform 0.18s;
  position: relative;
  min-width: 0;
}

.plus-minus-block.purple-highlight .plus-minus-item-img {
  flex-shrink: 0;
  margin-right: 0.7rem;
}

.plus-minus-block.purple-highlight .plus-minus-item-img img {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 0.7rem;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  background: #fff2;
  object-fit: cover;
}

.plus-minus-block.purple-highlight .plus-minus-item p {
  margin: 0;
  font-size: 1.08rem;
  color: #f0eaff;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.plus-minus-block.purple-highlight {
  background: linear-gradient(
    120deg,
    rgba(162, 89, 230, 0.22) 0%,
    rgba(124, 58, 237, 0.18) 100%
  );
  border-radius: 2.5rem;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  border: 1.5px solid #b993f7;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin: 2.5rem 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
  color: #fff;
}

.plus-minus-block.purple-highlight h2,
.plus-minus-block.purple-highlight h4 {
  color: #fff;
}

.plus-minus-block.purple-highlight .plus-minus-item p {
  color: #f0eaff;
}

@media (max-width: 900px) {
  .plus-minus-block.purple-highlight {
    border-radius: 1.2rem;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    margin: 1.2rem 0 1.2rem 0;
  }
}

.main-page-block.purple-highlight {
  background: #232136;
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  margin: 2.5rem 0;
  gap: 2.5rem;
  border: none;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
  color: #fff;

  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  margin: 2.5rem 0;
  color: #fff;
  position: relative;
  overflow: hidden;
  border: 1.5px solid #b993f7;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
}

.purple-highlight-steps h2 {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
}

.steps-block .steps-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.steps-block .steps-card {
  background: linear-gradient(
    120deg,
    rgba(162, 89, 230, 0.28) 0%,
    rgba(124, 58, 237, 0.28) 100%
  );
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  min-width: 0;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
}

.steps-block .steps-card:hover {
  box-shadow: 0 4px 32px 0 #a259e6cc;
  transform: translateY(-4px) scale(1.03);
}

.steps-block .steps-card-img img {
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.1);
  margin-bottom: 1.2rem;
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 3/2;
}

.steps-block .steps-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #fff;
  text-align: center;
}

.steps-block .steps-card-info {
  font-size: 1.08rem;
  color: #f0eaff;
  margin-top: 0.7rem;
  text-align: left;
  max-width: 520px;
  width: 100%;
}

.steps-block .read-more-btn {
  margin-top: 0.8rem;
  background: linear-gradient(98.07deg, #a259e6 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.4rem 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background 0.2s, color 0.2s;
}

.steps-block .read-more-btn:hover,
.steps-block .read-more-btn:focus {
  background: linear-gradient(98.07deg, #7c3aed 0%, #a259e6 100%);
  color: #fff;
}

@media (max-width: 900px) {
  .steps-block .steps-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.main-page-block.purple-highlight {
  background: rgba(162, 89, 230, 0.18);
  border-radius: 2.5rem;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  margin: 1rem 0 2.5rem 0;
  color: #fff;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(6px) saturate(1.2);
  border: 1.5px solid #b993f7;
}

.main-page-block.purple-highlight h2 {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
}

.main-page-block.purple-highlight p {
  color: #f0eaff;
  font-size: 1.15rem;
  line-height: 1.7;
}

.main-page-block.purple-highlight .main-block-img {
  display: block;
  margin: 0 auto 2.5rem auto;
  max-width: 560px;
  width: 99%;
  height: auto;
  border-radius: 2rem;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 40px 0 #a259e6cc;
  border: 4px solid #fff4;
}

.toc-slider-block {
  width: 100%;
  margin: 1.5rem 0;
}

.toc-slider-title {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #a259e6;
}

.toc-slider-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(162, 89, 230, 0.1);
  border-radius: 1rem;
  padding: 1rem 2rem;
  overflow-x: auto;
}

.toc-slider {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1 1 auto;
  min-width: 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.toc-slider::-webkit-scrollbar {
  display: none;
}

.toc-slider-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(98.07deg, #a259e6 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  cursor: pointer;
  scroll-snap-align: start;
}

.toc-slider-link:hover,
.toc-slider-link:focus {
  background: linear-gradient(98.07deg, #7c3aed 0%, #a259e6 100%);
  color: #fff;
}

.toc-slider-arrow-left,
.toc-slider-arrow-right {
  background: linear-gradient(135deg, #a259e6 60%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  transition: background 0.2s, box-shadow 0.2s;
  z-index: 2;
}

.toc-slider-arrow-left:active,
.toc-slider-arrow-right:active {
  background: linear-gradient(135deg, #7c3aed 60%, #a259e6 100%);
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.18);
}

.toc-slider-outer-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 0.5rem;
}

.toc-slider-wrapper {
  flex: 1 1 auto;
  overflow: hidden;
  padding: 0;
  margin: 0 0.5rem;
  background: none;
  border-radius: 0;
  box-shadow: none;
}

.toc-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  min-width: 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
}

.toc-slider::-webkit-scrollbar {
  display: none;
}

.toc-slider-link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(98.07deg, #a259e6 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  cursor: pointer;
  scroll-snap-align: start;
}

.toc-slider-link:hover,
.toc-slider-link:focus {
  background: linear-gradient(98.07deg, #7c3aed 0%, #a259e6 100%);
  color: #fff;
}

.toc-slider-arrow-left,
.toc-slider-arrow-right {
  background: linear-gradient(135deg, #a259e6 60%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  min-height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  transition: background 0.2s, box-shadow 0.2s;
  z-index: 2;
}

.toc-slider-arrow-left:active,
.toc-slider-arrow-right:active {
  background: linear-gradient(135deg, #7c3aed 60%, #a259e6 100%);
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.18);
}

.toc-slider-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(162, 89, 230, 0.1);
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.toc-slider {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1 1 auto;
  min-width: 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.toc-slider::-webkit-scrollbar {
  display: none;
}

.toc-slider-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(98.07deg, #a259e6 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  cursor: pointer;
  scroll-snap-align: start;
  pointer-events: auto;
  user-select: auto;
}

.toc-slider-link:hover,
.toc-slider-link:focus {
  background: linear-gradient(98.07deg, #7c3aed 0%, #a259e6 100%);
  color: #fff;
}

.toc-slider-arrow-left,
.toc-slider-arrow-right {
  background: linear-gradient(135deg, #a259e6 60%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  transition: background 0.2s, box-shadow 0.2s;
  z-index: 2;
}

.toc-slider-arrow-left:active,
.toc-slider-arrow-right:active {
  background: linear-gradient(135deg, #7c3aed 60%, #a259e6 100%);
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.18);
}

.game-slider-image {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto 2rem auto;
  background: rgba(162, 89, 230, 0.1);
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.08);
  padding: 2rem 2.5rem;
  margin-top: 1rem;
}

.game-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
}

.game-slider-card {
  background: #221a36;
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  min-width: 220px;
  max-width: 260px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1.5rem 1rem;
  transition: box-shadow 0.2s;
}

.game-slider-card:hover {
  box-shadow: 0 4px 24px 0 rgba(162, 89, 230, 0.18);
}

.game-slider-image {
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.game-slider-image img {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.game-slider-overlay {
  display: block;
  margin-top: 0.5rem;
  background: linear-gradient(98.07deg, #a259e6 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1.2rem;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.2s;
}

.game-slider-overlay:hover {
  background: linear-gradient(98.07deg, #7c3aed 0%, #a259e6 100%);
}

.slider-arrow {
  background: linear-gradient(135deg, #a259e6 60%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(162, 89, 230, 0.1);
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  z-index: 2;
}

.slider-arrow:active {
  background: linear-gradient(135deg, #7c3aed 60%, #a259e6 100%);
  box-shadow: 0 2px 16px 0 rgba(162, 89, 230, 0.18);
}

.slider-arrow-left {
  margin-right: 1rem;
}

.slider-arrow-right {
  margin-left: 1rem;
}

.author-bio-block-wrapper.purple-highlight {
  background: linear-gradient(
    120deg,
    rgba(162, 89, 230, 0.22) 0%,
    rgba(124, 58, 237, 0.18) 100%
  );
  border-radius: 2.5rem;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  border: 1.5px solid #b993f7;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin: 2.5rem 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(6px) saturate(1.2);
  -webkit-backdrop-filter: blur(6px) saturate(1.2);
  color: #fff;
}

.stylish-slot-paragraph {
  background: rgba(162, 89, 230, 0.18);
  border-radius: 2.5rem;
  box-shadow: 0 8px 48px 0 rgba(124, 58, 237, 0.18), 0 0 80px 0 #a259e6cc;
  padding: 1rem 1rem 1em 1rem;
  margin: 1rem 0 2.5rem 0;
  color: #fff;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(6px) saturate(1.2);
  border: 1.5px solid #b993f7;
}

`;