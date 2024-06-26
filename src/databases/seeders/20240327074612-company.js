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
            'companies',
            [
                {
                    logo: 'uploads/1707191882431',
                    company_name: 'PT INSPIRASI BISNIS NUSANTARA',
                    brand_name: 'HAUS',
                    business_type: 'Food & Beverages',
                    email: 'bisnis@haus.com',
                    company_phone_number: '08123456789',
                    latitude: '-6.2838182',
                    longitude: '106.8048633',
                    maps: 'Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Jawa, Indonesia',
                    radius: '500',
                    full_address: 'Jakarta Selatan',
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
