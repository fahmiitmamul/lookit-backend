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
        await queryInterface.sequelize.query(
            `INSERT INTO "public"."branches" ("branch_code", "branch_name", "latitude", "longitude", "maps", "radius", "full_address", "company_id", "createdAt", "updatedAt") VALUES (10, 'PT ARYA KEMUNING ABADI', '-6.3697339', '106.8857245', 'Radar Auri', '500', 'Jl.Radar Auri', 1, '2024-03-08 11:26:09.479+07', '2024-03-08 11:26:09.479+07')`
        )
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
