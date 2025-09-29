export const generateHeroBlock = (content) => `
  <div class="header-text-block">
    <div class="header-info-block">
      <div class="header-title">
        <h1 class="howl-casino-title" data-id="${content.hero?.title?.id}">
          ${content.hero?.title?.text}
        </h1>
      </div>
      <div class="header-info-text">
        <div class="header-promo-text">
          <span class="header-promo-main">${content.hero?.promoMain}</span>
          <span class="header-promo-amount">${content.hero?.promoAmount}</span>
          <span class="header-promo-plus">${content.hero?.promoPlus}</span>
        </div>
        <label 
          for="header-toggle" 
          class="header-read-more-btn" 
          data-read-more="Read More" 
          data-close-text="Close"
        ></label>
        <a 
          href="${content.hero?.playNowLink}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="action-button-link play-now-animated"
        >
          <span class="play-now-text" style="padding-left: 0.6rem;">
            ${content.hero?.playNowText}
          </span>
        </a>
      </div>
    </div>
  </div>
`;
