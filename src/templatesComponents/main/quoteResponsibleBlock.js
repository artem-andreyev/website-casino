export const generateQuoteResponsibleBlock = (content) => `
  <div class="main-page-block purple-highlight" style="margin: 0">
    <div id="responsible-gambling-block">
      <h2 class="responsible-title" id="responsible-gambling">
        <span id="responsible-gaming"></span>
        ${content.responsibleGambling.heading}
      </h2>
      <p>${content.responsibleGambling.intro}</p>

      <h3 class="responsible-subtitle">${content.responsibleGambling.limitsHeading}</h3>
      <p>${content.responsibleGambling.limitsIntro}</p>
      <div class="responsible-tips-list">
        <div>${content.responsibleGambling.tip1}</div>
        <div>${content.responsibleGambling.tip2}</div>
        <div>${content.responsibleGambling.tip3}</div>
        <div>${content.responsibleGambling.tip4}</div>
        <div>${content.responsibleGambling.tip5}</div>
      </div>

      <h3 class="responsible-subtitle">${content.responsibleGambling.problemHeading}</h3>
      <p>${content.responsibleGambling.problemText}</p>

      <div class="purple-quote-block">
        <svg class="purple-quote-icon" width="32" height="32" fill="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#A25DE62E" />
          <text x="10" y="23" font-size="18" fill="#fff" font-family="Arial, sans-serif">“</text>
        </svg>
        <span>${content.responsibleGambling.quote}</span>
      </div>
    </div>
  </div>
`;
