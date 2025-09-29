export const generateOptionsMethodBlock = (content, images, config) => `
  <div class="heading3-tody-text-block">
    <ul class="payment-methods-list">
      <li class="payment-method-item">
        <div class="payment-method-item-inner">
          <img loading="lazy" src="${content.optionsMethodBlock?.item1?.image}" alt="${content.optionsMethodBlock?.item1?.alt}" class="payment-method-btc-logo" />
          <div>
            <span class="payment-method-title">${content.optionsMethodBlock?.item1?.title}</span>
            <span class="payment-method-desc">${content.optionsMethodBlock?.item1?.desc}</span>
          </div>
        </div>
      </li>
      <li class="payment-method-item">
        <div class="payment-method-item-inner">
          <img loading="lazy" src="${content.optionsMethodBlock?.item2?.image}" alt="${content.optionsMethodBlock?.item2?.alt}" class="payment-method-btc-logo" />
          <div>
            <span class="payment-method-title">${content.optionsMethodBlock?.item2?.title}</span>
            <span class="payment-method-desc">${content.optionsMethodBlock?.item2?.desc}</span>
          </div>
        </div>
      </li>
      <li class="payment-method-item">
        <div class="payment-method-item-inner">
          <img loading="lazy" src="${content.optionsMethodBlock?.item3?.image}" alt="${content.optionsMethodBlock?.item3?.alt}" class="payment-method-btc-logo" />
          <div>
            <span class="payment-method-title">${content.optionsMethodBlock?.item3?.title}</span>
            <span class="payment-method-desc">${content.optionsMethodBlock?.item3?.desc}</span>
          </div>
        </div>
      </li>
      <li class="payment-method-item">
        <div class="payment-method-item-inner">
          <img loading="lazy" src="${content.optionsMethodBlock?.item4?.image}" alt="${content.optionsMethodBlock?.item4?.alt}" class="payment-method-btc-logo" />
          <div>
            <span class="payment-method-title">${content.optionsMethodBlock?.item4?.title}</span>
            <span class="payment-method-desc">${content.optionsMethodBlock?.item4?.desc}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
`;
