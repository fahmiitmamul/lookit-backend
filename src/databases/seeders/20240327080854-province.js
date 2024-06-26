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
        INSERT INTO "provinces" VALUES
        (11,'ACEH','10/18/2023','10/18/2023'),
        (12,'SUMATERA UTARA','10/18/2023','10/18/2023'),
        (13,'SUMATERA BARAT','10/18/2023','10/18/2023'),
        (14,'RIAU','10/18/2023','10/18/2023'),
        (15,'JAMBI','10/18/2023','10/18/2023'),
        (16,'SUMATERA SELATAN','10/18/2023','10/18/2023'),
        (17,'BENGKULU','10/18/2023','10/18/2023'),
        (18,'LAMPUNG','10/18/2023','10/18/2023'),
        (19,'KEPULAUAN BANGKA BELITUNG','10/18/2023','10/18/2023'),
        (21,'KEPULAUAN RIAU','10/18/2023','10/18/2023'),
        (31,'DKI JAKARTA','10/18/2023','10/18/2023'),
        (32,'JAWA BARAT','10/18/2023','10/18/2023'),
        (33,'JAWA TENGAH','10/18/2023','10/18/2023'),
        (34,'DI YOGYAKARTA','10/18/2023','10/18/2023'),
        (35,'JAWA TIMUR','10/18/2023','10/18/2023'),
        (36,'BANTEN','10/18/2023','10/18/2023'),
        (51,'BALI','10/18/2023','10/18/2023'),
        (52,'NUSA TENGGARA BARAT','10/18/2023','10/18/2023'),
        (53,'NUSA TENGGARA TIMUR','10/18/2023','10/18/2023'),
        (61,'KALIMANTAN BARAT','10/18/2023','10/18/2023'),
        (62,'KALIMANTAN TENGAH','10/18/2023','10/18/2023'),
        (63,'KALIMANTAN SELATAN','10/18/2023','10/18/2023'),
        (64,'KALIMANTAN TIMUR','10/18/2023','10/18/2023'),
        (65,'KALIMANTAN UTARA','10/18/2023','10/18/2023'),
        (71,'SULAWESI UTARA','10/18/2023','10/18/2023'),
        (72,'SULAWESI TENGAH','10/18/2023','10/18/2023'),
        (73,'SULAWESI SELATAN','10/18/2023','10/18/2023'),
        (74,'SULAWESI TENGGARA','10/18/2023','10/18/2023'),
        (75,'GORONTALO','10/18/2023','10/18/2023'),
        (76,'SULAWESI BARAT','10/18/2023','10/18/2023'),
        (81,'MALUKU','10/18/2023','10/18/2023'),
        (82,'MALUKU UTARA','10/18/2023','10/18/2023'),
        (91,'PAPUA BARAT','10/18/2023','10/18/2023'),
        (94,'PAPUA','10/18/2023','10/18/2023');
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
