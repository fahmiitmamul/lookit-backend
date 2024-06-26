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
        await queryInterface.bulkInsert(
            'master_salary_additions',
            [
                {
                    master_salary_code: '10',
                    master_salary_name: 'Tambahan',
                    master_salary_type: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
        await queryInterface.bulkInsert(
            'master_salary_deductions',
            [
                {
                    master_salary_code: '10',
                    master_salary_name: 'Potongan',
                    master_salary_type: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
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
