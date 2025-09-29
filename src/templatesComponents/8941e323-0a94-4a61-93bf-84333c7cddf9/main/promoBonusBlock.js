export const generatePromoBonusBlock = (content, images) => `
  <div class="promo-bonus-block">
    <div class="promo-bonus-content">
      <h2 class="promo-bonus-title">${content.promoBonusBlock?.title}</h2>
      <ul class="promo-bonus-list">
        <li>${content.promoBonusBlock?.item1}</li>
        <li>${content.promoBonusBlock?.item2}</li>
        <li>${content.promoBonusBlock?.item3}</li>
        <li>${content.promoBonusBlock?.item4}</li>
        <li>${content.promoBonusBlock?.item5}</li>
        <li>${content.promoBonusBlock?.item6}</li>
      </ul>
    </div>
    <div class="promo-bonus-image">
      <img
        loading="lazy"
        src="${images.promoBonusBlock?.url}"
        alt="${content.promoBonusBlock?.imageAlt}"
        width="${images.promoBonusBlock?.width}"
        height="${images.promoBonusBlock?.height}"
      />
    </div>
  </div>
`;
