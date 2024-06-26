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
        INSERT INTO "public"."bpjs" ("id", "bpjs_type", "bpjs_code", "createdAt", "updatedAt") VALUES (2, 'BPJS Kesehatan', '10', '2024-03-09 13:11:07.863+07', '2024-03-09 13:11:07.863+07');
        INSERT INTO "public"."bpjs" ("id", "bpjs_type", "bpjs_code", "createdAt", "updatedAt") VALUES (3, 'BPJS Ketenagakerjaan', '20', '2024-03-09 13:31:02.6+07', '2024-03-09 13:31:17.085+07');
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
