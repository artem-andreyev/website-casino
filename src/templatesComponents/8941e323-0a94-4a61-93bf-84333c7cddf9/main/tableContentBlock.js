export const generateTOCSliderBlock = () => `
  <div class="toc-slider-block">
    <h4 class="toc-slider-title">Table of Contents</h4>
    <div class="toc-slider-wrapper">
      <button
        class="slider-arrow toc-slider-arrow-left"
        aria-label="Previous section"
      >
        &#8592;
      </button>
      <div class="toc-slider" id="tocSlider"></div>
      <button
        class="slider-arrow toc-slider-arrow-right"
        aria-label="Next section"
      >
        &#8594;
      </button>
    </div>
  </div>
`;
