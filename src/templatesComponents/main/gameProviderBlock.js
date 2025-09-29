export const generateProviderSliderBlock = (content, images, config) => {
  return `
  <div class="game-slider-block">
    <h3 data-id="${content.gameSliderBlock?.popularSlotsHeading?.id}">
      ${content.gameSliderBlock?.popularSlotsHeading?.text}
    </h3>
    <div class="game-slider-wrapper">
      <button class="slider-arrow slider-arrow-left" aria-label="Previous game">&#8592;</button>
      <div class="game-slider">

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider1" src="${images.gameSlider1?.url}" width="${images.gameSlider1?.width}" height="${images.gameSlider1?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game1?.id}">${content.gameSliderBlock?.game1?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider2" src="${images.gameSlider2?.url}" width="${images.gameSlider2?.width}" height="${images.gameSlider2?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game2?.id}">${content.gameSliderBlock?.game2?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider3" src="${images.gameSlider3?.url}" width="${images.gameSlider3?.width}" height="${images.gameSlider3?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game3?.id}">${content.gameSliderBlock?.game3?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider4" src="${images.gameSlider4?.url}" width="${images.gameSlider4?.width}" height="${images.gameSlider4?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game4?.id}">${content.gameSliderBlock?.game4?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider5" src="${images.gameSlider5?.url}" width="${images.gameSlider5?.width}" height="${images.gameSlider5?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game5?.id}">${content.gameSliderBlock?.game5?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider6" src="${images.gameSlider6?.url}" width="${images.gameSlider6?.width}" height="${images.gameSlider6?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game6?.id}">${content.gameSliderBlock?.game6?.text}</p>
        </div>

        <div class="game-slider-card">
          <div class="game-slider-image">
            <img loading="lazy" data-image="gameSlider7" src="${images.gameSlider7?.url}" width="${images.gameSlider7?.width}" height="${images.gameSlider7?.height}" alt="game-slider-image"/>
            <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.playNow?.id}">${content.gameSliderBlock?.playNow?.text}</a>
          </div>
          <p data-id="${content.gameSliderBlock?.game7?.id}">${content.gameSliderBlock?.game7?.text}</p>
        </div>

      </div>
      <button class="slider-arrow slider-arrow-right" aria-label="Next game">&#8594;</button>
    </div>
  </div>
`;
};
