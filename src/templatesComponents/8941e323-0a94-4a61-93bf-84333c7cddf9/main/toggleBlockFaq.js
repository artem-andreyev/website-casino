export const generateFAQBlock = (content) => `
  <div class="plus-minus-block purple-highlight faq-plus-minus-block">
    <h2 data-id="${content.faqBlock?.heading?.id}">
      <span id="faq"></span>
      ${content.faqBlock?.heading?.text}
    </h2>
    <div class="plus-minus-content">
      <div class="plus-minus-list">

        <div class="plus-minus-item faq-item accordion-item">
          <button class="accordion-question" type="button">
            <span class="faq-question">${content.faqBlock?.faq1?.question}</span>
            <span class="accordion-arrow"></span>
          </button>
          <div class="faq-answer accordion-answer">
            ${content.faqBlock?.faq1?.answer}
          </div>
        </div>

        <div class="plus-minus-item faq-item accordion-item">
          <button class="accordion-question" type="button">
            <span class="faq-question">${content.faqBlock?.faq2?.question}</span>
            <span class="accordion-arrow"></span>
          </button>
          <div class="faq-answer accordion-answer">
            ${content.faqBlock?.faq2?.answer}
          </div>
        </div>

        <div class="plus-minus-item faq-item accordion-item">
          <button class="accordion-question" type="button">
            <span class="faq-question">${content.faqBlock?.faq3?.question}</span>
            <span class="accordion-arrow"></span>
          </button>
          <div class="faq-answer accordion-answer">
            ${content.faqBlock?.faq3?.answer}
          </div>
        </div>

        <div class="plus-minus-item faq-item accordion-item">
          <button class="accordion-question" type="button">
            <span class="faq-question">${content.faqBlock?.faq4?.question}</span>
            <span class="accordion-arrow"></span>
          </button>
          <div class="faq-answer accordion-answer">
            ${content.faqBlock?.faq4?.answer}
          </div>
        </div>

        <div class="plus-minus-item faq-item accordion-item">
          <button class="accordion-question" type="button">
            <span class="faq-question">${content.faqBlock?.faq5?.question}</span>
            <span class="accordion-arrow"></span>
          </button>
          <div class="faq-answer accordion-answer">
            ${content.faqBlock?.faq5?.answer}
          </div>
        </div>

      </div>
    </div>
  </div>
`;
