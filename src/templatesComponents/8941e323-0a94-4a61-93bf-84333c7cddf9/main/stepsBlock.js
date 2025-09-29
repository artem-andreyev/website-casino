export const generateStepsBlock = (content, images, config) => `
  <div class="steps-block">
    <h2 data-id="${content.stepsBlock?.title?.id}">
      <span id="join-steps"></span>
      ${content.stepsBlock?.title?.text}
    </h2>
    <div class="steps-horizontal-wrapper">
      <div class="step-card">
        <img
          loading="lazy"
          src="${images.stepBlock1?.url}"
          alt="${content.stepsBlock?.step1Heading?.text}"
          class="step-card-img"
          width="${images.stepBlock1?.width}"
          height="${images.stepBlock1?.height}"
        />
        <div class="step-card-title">${content.stepsBlock?.step1Heading?.text}</div>
        <div class="step-card-desc">${content.stepsBlock?.step1Body?.text}</div>
      </div>

      <div class="step-card">
        <img
          loading="lazy"
          src="${images.stepBlock2?.url}"
          alt="${content.stepsBlock?.step2Heading?.text}"
          class="step-card-img"
          width="${images.stepBlock2?.width}"
          height="${images.stepBlock2?.height}"
        />
        <div class="step-card-title">${content.stepsBlock?.step2Heading?.text}</div>
        <div class="step-card-desc">${content.stepsBlock?.step2Body?.text}</div>
      </div>

      <div class="step-card">
        <img
          loading="lazy"
          src="${images.stepBlock3?.url}"
          alt="${content.stepsBlock?.step3Heading?.text}"
          class="step-card-img"
          width="${images.stepBlock3?.width}"
          height="${images.stepBlock3?.height}"
        />
        <div class="step-card-title">${content.stepsBlock?.step3Heading?.text}</div>
        <div class="step-card-desc">${content.stepsBlock?.step3Body?.text}</div>
      </div>

      <div class="step-card">
        <img
          loading="lazy"
          src="${images.stepBlock4?.url}"
          alt="${content.stepsBlock?.step4Heading?.text}"
          class="step-card-img"
          width="${images.stepBlock4?.width}"
          height="${images.stepBlock4?.height}"
        />
        <div class="step-card-title">${content.stepsBlock?.step4Heading?.text}</div>
        <div class="step-card-desc">${content.stepsBlock?.step4Body?.text}</div>
      </div>

      <div class="step-card">
        <img
          loading="lazy"
          src="${images.stepBlock5?.url}"
          alt="${content.stepsBlock?.step5Heading?.text}"
          class="step-card-img"
          width="${images.stepBlock5?.width}"
          height="${images.stepBlock5?.height}"
        />
        <div class="step-card-title">${content.stepsBlock?.step5Heading?.text}</div>
        <div class="step-card-desc">${content.stepsBlock?.step5Body?.text}</div>
      </div>
    </div>
  </div>
`;
