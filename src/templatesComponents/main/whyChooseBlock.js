export const generateWhyChooseBlock = (content, images) => `
  <div class="main-page-block">
    <div class="main-page-block purple-highlight">
      <h2 data-id="${content.whyChooseBlock?.heading?.id}">
        <span id="howl-best-online-casino"></span>
        ${content.whyChooseBlock?.heading?.text}
      </h2>
      <img
        loading="lazy"
        class="main-block-img"
        src="${images.whyChooseBlock?.url}"
        alt="${content.whyChooseBlock?.imageAlt}"
      />
      <p data-id="${content.whyChooseBlock?.paragraph?.id}">
        ${content.whyChooseBlock?.paragraph?.text}
      </p>
    </div>
  </div>
`;
