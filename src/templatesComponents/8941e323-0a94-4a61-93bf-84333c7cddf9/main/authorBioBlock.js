export const generateAuthorBioBlock = (content, images, config) => `
  <div class="author-bio-block-wrapper purple-highlight">
    <div class="author-bio-block">
      <div class="author-info">
        <h3 class="author-name" data-id="${content.authorBioBlock?.authorName?.id}">
          ${content.authorBioBlock?.authorName?.text || ''}
        </h3>

        <p class="author-desc" data-id="${content.authorBioBlock?.authorDescription?.id}">
          ${content.authorBioBlock?.authorDescription?.text || ''}
        </p>
      </div>
    </div>
  </div>
`;
