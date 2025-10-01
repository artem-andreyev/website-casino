export const generateProviderSliderBlock = (content, images, config) => {
  return `
  <div class="game-slider-block">
    <h3 data-id="${content.gameProviderBlock?.popularSlotsHeading?.id}">
      ${content.gameProviderBlock?.popularSlotsHeading?.text}
    </h3>
    <div class="game-slider-wrapper">
      <button class="slider-arrow slider-arrow-left" aria-label="Previous game">&#8592;</button>
      <div class="game-slider">

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider1" src="${images.provider1?.url}" width="${images.provider1?.width}" height="${images.provider1?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider1?.id}">${content.gameProviderBlock?.provider1?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider2" src="${images.provider2?.url}" width="${images.provider2?.width}" height="${images.provider2?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider2?.id}">${content.gameProviderBlock?.provider2?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider3" src="${images.provider3?.url}" width="${images.provider3?.width}" height="${images.provider3?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider3?.id}">${content.gameProviderBlock?.provider3?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider4" src="${images.provider4?.url}" width="${images.provider4?.width}" height="${images.provider4?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider4?.id}">${content.gameProviderBlock?.provider4?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider5" src="${images.provider5?.url}" width="${images.provider5?.width}" height="${images.provider5?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider5?.id}">${content.gameProviderBlock?.provider5?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider6" src="${images.provider6?.url}" width="${images.provider6?.width}" height="${images.provider6?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider6?.id}">${content.gameProviderBlock?.provider6?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="provider7" src="${images.provider7?.url}" width="${images.provider7?.width}" height="${images.provider7?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameProviderBlock?.playNow?.id}">${content.gameProviderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameProviderBlock?.provider7?.id}">${content.gameProviderBlock?.provider7?.text}</p>
        </div>

      </div>
      <button class="slider-arrow slider-arrow-right" aria-label="Next game">&#8594;</button>
    </div>
  </div>
`;
};
