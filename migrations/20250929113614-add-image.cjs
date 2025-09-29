'use strict';
 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
 
   const names = [
     'logo',
     'gameSlider1','gameSlider2','gameSlider3','gameSlider4','gameSlider5','gameSlider6','gameSlider7',
     'promoBonusBlock',
     'whyChooseBlock',
     'stepBlock1','stepBlock2','stepBlock3','stepBlock4','stepBlock5',
     'plusIcon',
     'payments1','payments2','payments3','payments4',
     'footerNavImage1','footerNavImage2','footerNavImage3',
   ];
 
   const rows = names.map((image_name) => ({
     id: Sequelize.literal('UUID()'),
     template_id: '8941e323-0a94-4a61-93bf-84333c7cddf9',
     image_name,
     file_name: null,
   }));
 
   await queryInterface.bulkInsert('template_images', rows, {});
 },
 
 async down(queryInterface, Sequelize) {
   
 },
};
 