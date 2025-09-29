'use strict';
 
module.exports = {
 async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('template_list', [
     {
       id: '8941e323-0a94-4a61-93bf-84333c7cddf9',
       name: 'Second Template'
     }
   ], {});
 },
 
 async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('template_list', {
     id: '8941e323-0a94-4a61-93bf-84333c7cddf9'
   }, {});
 }
};