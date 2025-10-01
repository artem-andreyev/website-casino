export const generatePlusMinusBlock = (content, images, config) => {
  return `
  <div class="plus-minus-block purple-highlight">
    <h2 style="margin-bottom: 2rem" data-id="${content.plusMinusBlock?.heading?.id}">
      <span id="pros-and-cons"></span>
      ${content.plusMinusBlock?.heading?.text || ''}
    </h2>
    <div class="plus-minus-content">
      <div class="plus-minus-list">
        <div class="plus-minus-item">
          <div class="plus-minus-item-img">
            <img loading="lazy" data-image="plusIcon" src="${images.plusIcon?.url}" width="${images.plusIcon?.width}" height="${images.plusIcon?.height}" alt="Icon"/>
          </div>
          <p data-id="${content.plusMinusBlock?.advantage1?.id || ''}">
            ${content.plusMinusBlock?.advantage1?.text || ''}
          </p>
        </div>
        <div class="plus-minus-item">
          <div class="plus-minus-item-img">
            <img loading="lazy" data-image="plusIcon" src="${images.plusIcon?.url}" width="${images.plusIcon?.width}" height="${images.plusIcon?.height}" alt="Icon"/>
          </div>
          <p data-id="${content.plusMinusBlock?.advantage2?.id || ''}">
            ${content.plusMinusBlock?.advantage2?.text || ''}
          </p>
        </div>
        <div class="plus-minus-item">
          <div class="plus-minus-item-img">
            <img loading="lazy" data-image="plusIcon" src="${images.plusIcon?.url}" width="${images.plusIcon?.width}" height="${images.plusIcon?.height}" alt="Icon"/>
          </div>
          <p data-id="${content.plusMinusBlock?.advantage3?.id || ''}">
            ${content.plusMinusBlock?.advantage3?.text || ''}
          </p>
        </div>
        <div class="plus-minus-item">
          <div class="plus-minus-item-img">
            <img loading="lazy" data-image="plusIcon" src="${images.plusIcon?.url}" width="${images.plusIcon?.width}" height="${images.plusIcon?.height}" alt="Icon"/>
          </div>
          <p data-id="${content.plusMinusBlock?.advantage4?.id || ''}">
            ${content.plusMinusBlock?.advantage4?.text || ''}
          </p>
        </div>
        <div class="plus-minus-item">
          <div class="plus-minus-item-img">
            <img loading="lazy" data-image="plusIcon" src="${images.plusIcon?.url}" width="${images.plusIcon?.width}" height="${images.plusIcon?.height}" alt="Icon"/>
          </div>
          <p data-id="${content.plusMinusBlock?.advantage5?.id || ''}">
            ${content.plusMinusBlock?.advantage5?.text || ''}
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
};
