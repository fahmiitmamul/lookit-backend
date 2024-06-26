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
         */ await queryInterface.bulkInsert(
            'users',
            [
                {
                    name: 'Super Administrator',
                    role_id: 1,
                    employee_id: 1,
                    email: 'superadmin',
                    password:
                        '$argon2id$v=19$m=65536,t=3,p=4$KZVmwL2JO2dcsksCANexuA$hJ6IZrJ70ClkxQDxcfRVjjUOVMhszwSE8l2+SUVOerY',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Administrator',
                    role_id: 2,
                    employee_id: 2,
                    email: 'admin',
                    password:
                        '$argon2id$v=19$m=65536,t=3,p=4$iEQn3jKdbNdWQB6lF/dnvw$2L4HSs/TQQLEGypl2zIXyIBmVM3vc2oOTCkGP4+Y9kE',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Employee',
                    role_id: 3,
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
