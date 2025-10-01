'use strict';
 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
 
   const names = [
     'block',
     'logo',
     'searchIcon',
     'en_flag',
     'ru_flag',
     'lv_flag',
     'index',
     'main',
     'bonuses',
     'games',
     'registration',
     'gameSlider1',
     'gameSlider2',
     'gameSlider3',
     'gameSlider4',
     'gameSlider5',
     'gameSlider6',
     'gameSlider7',
     'provider1',
     'plusIcon',
     'promoBonusBlock',
     'whyChooseBlock',
     'stepBlock1',
     'stepBlock2',
     'stepBlock3',
     'stepBlock4',
     'stepBlock5',
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
 