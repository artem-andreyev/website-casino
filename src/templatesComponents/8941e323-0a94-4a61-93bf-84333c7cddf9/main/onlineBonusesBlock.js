export const generateBestOnlineBonusesBlock = (content, images) => `
  <div class="main-page-block purple-highlight" style="border: none; box-shadow: none; background: #232136;">
    <h2 data-id="${content.bestOnlineBonusesBlock?.heading.id}">
      <span id="best-online-bonuses"></span>
      ${content.bestOnlineBonusesBlock?.heading.text}
    </h2>
    <p data-id="${content.bestOnlineBonusesBlock?.description.id}">
      ${content.bestOnlineBonusesBlock?.description.text}
    </p>

    <div class="heading3-tody-text-block">
      <div class="page-block">
        <h3 data-id="${content.bestOnlineBonusesBlock?.welcomeBonusHeading.id}">
          ${content.bestOnlineBonusesBlock?.welcomeBonusHeading.text}
        </h3>
        <p data-id="${content.bestOnlineBonusesBlock?.welcomeBonusBody.id}">
          ${content.bestOnlineBonusesBlock?.welcomeBonusBody.text}
        </p>
      </div>
      <div class="page-block">
        <h3 data-id="${content.bestOnlineBonusesBlock?.noDepositBonusHeading.id}">
          ${content.bestOnlineBonusesBlock?.noDepositBonusHeading.text}
        </h3>
        <p data-id="${content.bestOnlineBonusesBlock?.noDepositBonusBody.id}">
          ${content.bestOnlineBonusesBlock?.noDepositBonusBody.text}
        </p>
      </div>
    </div>

    <div class="heading3-tody-text-block">
      <div class="page-block">
        <h3 data-id="${content.bestOnlineBonusesBlock?.freeSpinsHeading.id}">
          ${content.bestOnlineBonusesBlock?.freeSpinsHeading.text}
        </h3>
        <p data-id="${content.bestOnlineBonusesBlock?.freeSpinsBody.id}">
          ${content.bestOnlineBonusesBlock?.freeSpinsBody.text}
        </p>
      </div>
      <div class="page-block">
        <h3 data-id="${content.bestOnlineBonusesBlock?.cashbackHeading.id}">
          ${content.bestOnlineBonusesBlock?.cashbackHeading.text}
        </h3>
        <p data-id="${content.bestOnlineBonusesBlock?.cashbackBody.id}">
          ${content.bestOnlineBonusesBlock?.cashbackBody.text}
        </p>
      </div>
    </div>

    <div class="CTA-card-block">
      <h2 data-id="${content.bestOnlineBonusesBlock?.ctaHeading.id}">
        ${content.bestOnlineBonusesBlock?.ctaHeading.text}
      </h2>
      <a href="/go" target="_blank" rel="noopener noreferrer" class="info-block-action-button-link" data-id="${content.bestOnlineBonusesBlock?.ctaButton.id}">
        ${content.bestOnlineBonusesBlock?.ctaButton.text}
      </a>
    </div>
  </div>
`;
