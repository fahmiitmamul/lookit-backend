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
            'emails',
            [
                {
                    email_behalf: 'testing@runlapan.com',
                    email: 'testing@runlapan.com',
                    protocol: 'smtp',
                    smtp_host: 'mail.runlapan.com',
                    smtp_user: 'testing@runlapan.com',
                    smtp_pass: 'u9*D28eKjDGr',
                    smtp_port: '465',
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
