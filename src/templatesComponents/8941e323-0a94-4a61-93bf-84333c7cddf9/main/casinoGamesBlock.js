export const generateCasinoGamesBlock = (content, images, config) => `
  <div class="heading3-tody-text-block">
    <div class="page-block">
      <div class="stylish-slot-paragraph" data-id="${content.casinoGamesBlock?.item1?.id}" style="border: none; box-shadow: none; background: #232136;">
        <h3 data-id="${content.casinoGamesBlock?.item1?.headingId}">${content.casinoGamesBlock?.item1?.heading}</h3>
        <p>${content.casinoGamesBlock?.item1?.text}</p>
      </div>
    </div>
    <div class="page-block">
      <div class="stylish-slot-paragraph" data-id="${content.casinoGamesBlock?.item2?.id}" style="border: none; box-shadow: none; background: #232136;">
        <h3 data-id="${content.casinoGamesBlock?.item2?.headingId}">${content.casinoGamesBlock?.item2?.heading}</h3>
        <p>${content.casinoGamesBlock?.item2?.text}</p>
      </div>
    </div>
  </div>
`;
