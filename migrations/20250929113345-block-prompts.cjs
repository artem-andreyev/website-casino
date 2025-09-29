'use strict';
 
const { randomUUID } = require('crypto');
 
const TEMPLATE_ID = '8941e323-0a94-4a61-93bf-84333c7cddf9';
 
const BLOCK_PROMPTS_MAP = {
 footerBlock: ['navigation', 'blockH3', 'blockP1', 'blockP2', 'takeBonus', 'copyrightText', 'bonusOffer'],
 headerBlock: ['title', 'description', 'readMore', 'closeText', 'takeBonus'],
 '2CTAButtons': ['button1', 'button2'],
 authorBioBlock: ['authorName', 'authorTitle', 'authorDescription', 'authorEmail'],
 buttonBlock: ['anotherBonuses', 'datingBonuses', 'countryRestrictions', 'registration', 'hallOfFame', 'customerSupport', 'prosAndCons', 'gameDevelopers', 'mobileCasino', 'casinoInformation', 'gameOffer', 'userExperience'],
 cardSection: ['heading', 'content'],
 casinoInformationBlock: [
   'casinoHeading',
   'casinoNameLabel', 'casinoName',
   'websiteLabel', 'websiteName',
   'launchDateLabel', 'launchDate',
   'welcomeBonusLabel', 'welcomeBonus',
   'payoutTimeLabel', 'payoutTime',
   'depositMethodsLabel', 'depositMethods',
   'withdrawalMethodsLabel', 'withdrawalMethods',
   'gameTypesLabel', 'gameTypes',
   'availableGamesLabel', 'availableGames',
   'wageringRequirementsLabel', 'wageringRequirements',
   'licenseLabel', 'license',
   'languagesLabel', 'languages',
   'currenciesLabel', 'currencies',
   'emailLabel', 'email',
   'ownerLabel', 'owner',
 ],
 CTAButton: ['button'],
 CTACard: ['heading', 'button'],
 gameBlock2: ['sectionHeading', 'sectionContent', 'playBtn'],
 gameBlock: ['sectionHeading', 'sectionContent', 'playBtn'],
 gameDescriptionBlock: [
   'title', 'description',
   'gameTitle1', 'gameDescription1', 'gameExamples1',
   'gameTitle2', 'gameDescription2', 'gameExamples2',
   'gameTitle3', 'gameDescription3', 'gameExamples3',
   'gameTitle4', 'gameDescription4', 'gameExamples4',
 ],
 gameSliderBlock: [
   'popularSlotsHeading',
   'game1', 'game1Text', 'game1Type', 'game1TypePercent',
   'game2', 'game2Text', 'game2Type', 'game2TypePercent',
   'game3', 'game3Text', 'game3Type', 'game3TypePercent',
   'game4', 'game4Text', 'game4Type', 'game4TypePercent',
   'game5', 'game5Text', 'game5Type', 'game5TypePercent',
   'game6', 'game6Text', 'game6Type', 'game6TypePercent',
   'game7', 'game7Text', 'game7Type', 'game7TypePercent',
   'game8', 'game8Text', 'game8Type', 'game8TypePercent',
   'game9', 'game9Text', 'game9Type', 'game9TypePercent',
   'game10', 'game10Text', 'game10Type', 'game10TypePercent',
   'playNow', 'playDemo',
 ],
 heading2BodyText: ['heading', 'content'],
 heading2BodyTextCtaBtn: ['heading', 'content', 'button'],
 heading3BodyTextTwoColumns: ['heading1', 'content1', 'heading2', 'content2'],
 infoBlock: [
   'cashbackBonusHeading', 'cashbackBonusContent',
   'everyWeekBonusHeading', 'everyWeekBonusContent',
   'wheelOfFortuneHeading', 'wheelOfFortuneContent',
   'bettingRequirementsHeading', 'bettingRequirementsContent',
   'loyaltyProgramHeading', 'loyaltyProgramContent1', 'loyaltyProgramContent2',
   'paymentInfoHeading', 'paymentInfoIntroHeading', 'paymentInfoIntro',
   'paymentCardMethodsHeading', 'paymentCardMethodsContent',
   'eWalletMethodsHeading', 'eWalletMethodsContent',
   'minDepositHeading', 'minDepositContent',
   'acceptedCurrenciesHeading', 'acceptedCurrenciesContent',
   'payoutSpeedHeading', 'payoutSpeedIntroHeading', 'payoutSpeedIntro',
   'payoutSmallAmountHeading', 'payoutSmallAmountContent',
   'payoutMediumAmountHeading', 'payoutMediumAmountContent',
   'payoutLargeAmountHeading', 'payoutLargeAmountContent',
   'payoutVeryLargeAmountHeading', 'payoutVeryLargeAmountContent',
   'gameOfferHeading', 'gameOfferContent', 'allCasinoGames',
 ],
 infoBlock2: [
   'heading',
   'layoutAndDesign', 'mainMenu', 'mobileVersion', 'gameCategories',
   'mobileCasinoHeading', 'mobileCasinoIntro', 'mobileCasinoCompatibility', 'goToCasinoWebsite',
   'hallOfFameHeading', 'hallOfFameIntro', 'hallOfFameDescription', 'hallOfFameGames',
   'customerSupportHeading', 'customerSupportIntro', 'customerSupportOptions',
   'licenseHeading', 'licenseDetails',
   'securityHeading', 'securityDetails',
   'restrictedCountriesHeading', 'restrictedCountriesText',
   'summaryHeading', 'summaryText1', 'summaryText2',
 ],
 paymentsBlock: ['title'],
 paymentsCardsSection: ['paymentsCardTitle1', 'paymentsCardContent1', 'button1', 'paymentsCardTitle2', 'paymentsCardContent2', 'paymentsCardTitle3', 'paymentsCardContent3'],
 plusMinusBlock: ['heading', 'advantagesHeading', 'advantagesList', 'disadvantagesHeading', 'disadvantagesList'],
 registrationBlock: [
   'gameProvidersHeading', 'gameProvidersIntro', 'gameProvidersQuantity', 'gameProvidersList',
   'registrationHeading', 'registrationContent', 'registrationStepsList',
   'bonusBannerAlert', 'bonusBannerHeading', 'takeBonus', 'identityVerificationNotice',
 ],
 reviewSection: ['cardHeader1', 'avatarName1', 'opinion1', 'reviewDate', 'cardHeader2', 'avatarName2', 'opinion2', 'reviewDate2', 'cardHeader3', 'avatarName3', 'opinion3', 'reviewDate3', 'playBtn'],
 stepsBlock: [
   'title',
   'step1Heading', 'step1Body',
   'step2Heading', 'step2Body',
   'step3Heading', 'step3Body',
   'step4Heading', 'step4Body',
   'step5Heading', 'step5Body',
 ],
 sameCasinosBlock: ['title', 'playBtn'],
 toggleBlock: ['faqHeading', 'faqList'],
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
 