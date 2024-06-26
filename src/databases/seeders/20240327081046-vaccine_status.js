'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.sequelize.query(`
        INSERT INTO "public"."vaccine_statuses" ("id", "vaccine_code", "vaccine_status", "createdAt", "updatedAt") VALUES (1, '10', 'Vaksin Pertama (I)', '2024-03-09 13:58:46.06+07', '2024-03-09 14:02:22.787+07');
        `)
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}
