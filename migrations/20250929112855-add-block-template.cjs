'use strict';
 
const { v4: uuidv4 } = require('uuid');
 
module.exports = {
 async up(queryInterface, Sequelize) {
   const newBlocks = [
     'reviewSection',
     'heading2BodyTextImageTwoColumnsCtaBtn',
     'heading2BodyTextCtaBtn',
     'cardSection',
     'paymentsCardsSection'
   ];
 
   for (const blockName of newBlocks) {
     await queryInterface.bulkInsert('template_block', [
       {
         id: uuidv4(),
         name: blockName,
         settings: null,
         template_id: '8941e323-0a94-4a61-93bf-84333c7cddf9'
       }
     ]);
   }
 },
 
 async down(queryInterface, Sequelize) {
   await queryInterface.sequelize.query(`
     DELETE FROM template_block
     WHERE template_id = '8941e323-0a94-4a61-93bf-84333c7cddf9'
       AND name IN (
       );
   `);
 }
};