export const generateGameSliderBlock = (content, images, config) => {
  return `
  <div class="game-slider-block">
    <h3 data-id="${content.gameSliderBlock?.slotsHeading?.id}">
      ${content.gameSliderBlock?.slotsHeading?.text}
    </h3>
    <div class="game-slider-wrapper">
    <button class="slider-arrow slider-arrow-left" aria-label="Previous game">&#8592;</button>
    <div class="game-slider">

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider1" src="${images.gameSlider1?.url}" class="game-slider-image" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game1?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game1?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider2" src="${images.gameSlider2?.url}" class="game-slider-img" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game2?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game2?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider3" src="${images.gameSlider3?.url}" class="game-slider-img" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game3?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game3?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider4" src="${images.gameSlider4?.url}" class="game-slider-img" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game4?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game4?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider5" src="${images.gameSlider5?.url}" class="game-slider-img" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game5?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game5?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider6" src="${images.gameSlider6?.url}" class="game-slider-image" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game6?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game6?.text}</p>
      </div>

      <div class="game-slider-card">
        <div class="game-slider-image">
          <img loading="lazy" data-image="gameSlider7" src="${images.gameSlider7?.url}" class="game-slider-image" alt="game-slider-image"/>
          <a href="/go" target="_blank" class="game-slider-overlay" data-id="${content.gameSliderBlock?.game7?.id}">Play Now</a>
        </div>
        <p>${content.gameSliderBlock?.game7?.text}</p>
      </div>

    </div>
    <button class="slider-arrow slider-arrow-right" aria-label="Next game">&#8594;</button>
  </div>
  `;
};
