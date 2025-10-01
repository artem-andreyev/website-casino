'use strict';
 
const { randomUUID } = require('crypto');
 
const TEMPLATE_ID = '8941e323-0a94-4a61-93bf-84333c7cddf9';

const BLOCK_PROMPTS_MAP = {
  authorBioBlock: ['authorName', 'authorDescription'],
  casinoGamesBlock: ['item1', 'item2'],
  gameProviderBlock: ['popularSlotsHeading', 'playNow', 'provider1', 'provider2', 'provider3', 'provider4', 'provider5', 'provider6', 'provider7'],
  gameSliderBlock: ['game1', 'game2', 'game3', 'game4', 'game5', 'game6', 'game7', 'slotsHeading'],
  bestOnlineBonusesBlock: ['heading', 'description', 'welcomeBonusHeading', 'welcomeBonusBody', 'noDepositBonusHeading', 'noDepositBonusBody', 'freeSpinsHeading', 'freeSpinsBody', 'cashbackHeading', 'cashbackBody', 'ctaHeading', 'ctaButton'],
  optionsMethodBlock: ['item1', 'item2', 'item3', 'item4'],
  plusMinusBlock: ['heading', 'advantage1', 'advantage2', 'advantage3', 'advantage4', 'advantage5'],
  promoBonusBlock: ['title', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'imageAlt'],
  responsibleGambling: ['heading', 'intro', 'limitsHeading', 'limitsIntro', 'tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'problemHeading', 'problemText', 'quote'],
  stepsBlock: ['title', 'step1Heading', 'step1Body', 'step2Heading', 'step2Body', 'step3Heading', 'step3Body', 'step4Heading', 'step4Body', 'step5Heading', 'step5Body'],
  tableContentBlock: [],
  textBlock: ['heading', 'content'],
  faqBlock: ['heading', 'faq1', 'faq2', 'faq3', 'faq4', 'faq5'],
  whyChooseBlock: ['heading', 'imageAlt', 'paragraph'],
  headerBlock: [
    'title', 'text', 'promoMain', 'promoAmount', 'promoPlus', 'playNowLink', 'playNowText', 'languages', 'selectedLang', 'searchPlaceholder'
  ],
  footerBlock: [
    'infoNavigation', 'bottomInfo', 'visible', 'action', 'title', 'text'
  ]
};
 
module.exports = {
 async up(queryInterface) {
   const t = await queryInterface.sequelize.transaction();
   try {
     let totalInserted = 0;
 
     for (const [blockName, headers] of Object.entries(BLOCK_PROMPTS_MAP)) {
       const blockId = await queryInterface.rawSelect(
         'template_block',
         { where: { name: blockName, template_id: TEMPLATE_ID }, transaction: t },
         ['id']
       );
 
       if (!blockId) {
         continue;
       }
 
       const toInsert = [];
 
       for (const prompt_header of headers) {
         const exists = await queryInterface.rawSelect(
           'template_block_prompt',
           { where: { block_id: blockId, prompt_header }, transaction: t },
           ['id']
         );
 
         if (!exists) {
           toInsert.push({
             id: randomUUID(),
             block_id: blockId,
             prompt_header,
           });
         }
       }
 
       if (toInsert.length) {
         await queryInterface.bulkInsert('template_block_prompt', toInsert, { transaction: t });
         totalInserted += toInsert.length;
       }
     }
 
     await t.commit();
   } catch (err) {
     await t.rollback();
     throw err;
   }
 },
 
 async down() {
   return Promise.resolve();
 },
};
 