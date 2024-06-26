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
        await queryInterface.bulkInsert('shifts', [
            {
                shift_name: 'Libur',
                shift_code: 'Libur',
                start_time: '00:00',
                end_time: '00:00',
                minimal_start_time: '00:00',
                minimal_end_time: '00:00',
                maximal_start_time: '00:00',
                maximal_end_time: '00:00',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
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
