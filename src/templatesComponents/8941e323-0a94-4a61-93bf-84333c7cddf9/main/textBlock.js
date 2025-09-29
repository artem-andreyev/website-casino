export const generateTextBlock = (content) => `
  <div class="heading2-body-text-block">
    <div class="main-page-block purple-highlight" style="border: none; box-shadow: none; background: #232136;">
      <h2 data-id="${content.textBlock.heading.id}">
        <span id="payments"></span>
        ${content.textBlock.heading.text}
      </h2>
      <p data-id="${content.textBlock.content.id}">
        ${content.textBlock.content.text}
      </p>
    </div>
  </div>
`;
