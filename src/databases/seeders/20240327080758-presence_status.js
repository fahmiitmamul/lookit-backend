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
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (2, 'Hadir Terlambat', 'HT', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (3, 'Pulang Cepat', 'PC', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (4, 'Tidak Absen Pulang', 'TAP', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (5, 'Alpha', 'A', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (6, 'Sakit', 'S', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (7, 'Izin', 'I', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (8, 'Cuti', 'C', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (9, 'Libur', 'L', '2024-03-14 13:34:48+07', '2024-03-14 13:34:50+07');
        INSERT INTO "public"."presence_statuses" ("id", "name", "presence_status_code", "createdAt", "updatedAt") VALUES (1, 'Hadir', 'H', '2024-03-14 19:59:52.175+07', '2024-03-14 19:59:52.175+07');
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
