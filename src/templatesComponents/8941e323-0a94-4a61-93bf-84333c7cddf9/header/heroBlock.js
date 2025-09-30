export const generateHeroBlock = (content) => `
  <div class="header-text-block">
    <div class="header-info-block">
      <div class="header-title">
        <h1 class="howl-casino-title" data-id="${content.headerBlock?.title?.id}">
          ${content.headerBlock?.title?.text}
        </h1>
      </div>
      <div class="header-info-text">
        <div class="header-promo-text">
          <span class="header-promo-main">${content.headerBlock?.promoMain}</span>
          <span class="header-promo-amount">${content.headerBlock?.promoAmount}</span>
          <span class="header-promo-plus">${content.headerBlock?.promoPlus}</span>
        </div>
        <label 
          for="header-toggle" 
          class="header-read-more-btn" 
          data-read-more="Read More" 
          data-close-text="Close"
        ></label>
        <a 
          href="${content.headerBlock?.playNowLink}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="action-button-link play-now-animated"
        >
          <span class="play-now-text" style="padding-left: 0.6rem;">
            ${content.headerBlock?.playNowText}
          </span>
        </a>
      </div>
    </div>
  </div>
`;
