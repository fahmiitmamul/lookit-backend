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
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (1, 'BANK BRI', '002', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (2, 'BANK EKSPOR INDONESIA', '003', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (3, 'BANK MANDIRI', '008', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (4, 'BANK BNI', '009', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (5, 'BANK BNI SYARIAH', '427', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (6, 'BANK DANAMON', '011', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (7, 'PERMATA BANK', '013', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (8, 'BANK BCA', '014', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (9, 'BANK BII', '016', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (10, 'BANK PANIN', '019', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (11, 'BANK ARTA NIAGA KENCANA', '020', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (12, 'BANK NIAGA', '022', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (13, 'BANK BUANA IND', '023', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (14, 'BANK LIPPO', '026', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (15, 'BANK NISP', '028', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (16, 'AMERICAN EXPRESS BANK LTD', '030', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (17, 'CITIBANK N.A.', '031', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (18, 'JP. MORGAN CHASE BANK, N.A.', '032', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (19, 'BANK OF AMERICA, N.A', '033', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (20, 'ING INDONESIA BANK', '034', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (21, 'BANK MULTICOR TBK.', '036', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (22, 'BANK ARTHA GRAHA', '037', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (23, 'BANK CREDIT AGRICOLE INDOSUEZ', '039', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (24, 'THE BANGKOK BANK COMP. LTD', '040', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (25, 'THE HONGKONG & SHANGHAI B.C.', '041', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (26, 'THE BANK OF TOKYO MITSUBISHI UFJ LTD', '042', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (27, 'BANK SUMITOMO MITSUI INDONESIA', '045', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (28, 'BANK DBS INDONESIA', '046', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (29, 'BANK RESONA PERDANIA', '047', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (30, 'BANK MIZUHO INDONESIA', '048', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (31, 'STANDARD CHARTERED BANK', '050', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (32, 'BANK ABN AMRO', '052', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (33, 'BANK KEPPEL TATLEE BUANA', '053', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (34, 'BANK CAPITAL INDONESIA, TBK.', '054', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (35, 'BANK BNP PARIBAS INDONESIA', '057', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (36, 'BANK UOB INDONESIA', '058', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (37, 'KOREA EXCHANGE BANK DANAMON', '059', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (38, 'RABOBANK INTERNASIONAL INDONESIA', '060', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (39, 'ANZ PANIN BANK', '061', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (40, 'DEUTSCHE BANK AG.', '067', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (41, 'BANK WOORI INDONESIA', '068', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (42, 'BANK OF CHINA LIMITED', '069', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (43, 'BANK BUMI ARTA', '076', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (44, 'BANK EKONOMI', '087', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (45, 'BANK ANTARDAERAH', '088', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (46, 'BANK HAGA', '089', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (47, 'BANK IFI', '093', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (48, 'BANK CENTURY, TBK.', '095', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (49, 'BANK MAYAPADA', '097', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (50, 'BANK JABAR', '110', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (51, 'BANK DKI', '111', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (52, 'BPD DIY', '112', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (53, 'BANK JATENG', '113', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (54, 'BANK JATIM', '114', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (55, 'BPD JAMBI', '115', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (56, 'BPD ACEH', '116', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (57, 'BANK SUMUT', '117', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (58, 'BANK NAGARI', '118', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (59, 'BANK RIAU', '119', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (60, 'BANK SUMSEL', '120', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (61, 'BANK LAMPUNG', '121', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (62, 'BPD KALSEL', '122', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (63, 'BPD KALIMANTAN BARAT', '123', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (64, 'BPD KALTIM', '124', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (65, 'BPD KALTENG', '125', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (66, 'BPD SULSEL', '126', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (67, 'BANK SULUT', '127', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (68, 'BPD NTB', '128', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (69, 'BPD BALI', '129', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (70, 'BANK NTT', '130', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (71, 'BANK MALUKU', '131', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (72, 'BPD PAPUA', '132', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (73, 'BANK BENGKULU', '133', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (74, 'BPD SULAWESI TENGAH', '134', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (75, 'BANK SULTRA', '135', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (76, 'BANK NUSANTARA PARAHYANGAN', '145', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (77, 'BANK SWADESI', '146', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (78, 'BANK MUAMALAT', '147', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (79, 'BANK MESTIKA', '151', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (80, 'BANK METRO EXPRESS', '152', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (81, 'BANK SHINTA INDONESIA', '153', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (82, 'BANK MASPION', '157', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (83, 'BANK HAGAKITA', '159', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (84, 'BANK GANESHA', '161', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (85, 'BANK WINDU KENTJANA', '162', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (86, 'HALIM INDONESIA BANK', '164', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (87, 'BANK HARMONI INTERNATIONAL', '166', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (88, 'BANK KESAWAN', '167', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (89, 'BANK TABUNGAN NEGARA (PERSERO)', '200', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (90, 'BANK HIMPUNAN SAUDARA 1906, TBK .', '212', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (91, 'BANK TABUNGAN PENSIUNAN NASIONAL', '213', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (92, 'BANK SWAGUNA', '405', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (93, 'BANK JASA ARTA', '422', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (94, 'BANK MEGA', '426', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (95, 'BANK JASA JAKARTA', '427', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (96, 'BANK BUKOPIN', '441', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (97, 'BANK SYARIAH MANDIRI', '451', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (98, 'BANK BISNIS INTERNASIONAL', '459', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (99, 'BANK SRI PARTHA', '466', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (100, 'BANK JASA JAKARTA', '472', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (101, 'BANK BINTANG MANUNGGAL', '484', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (102, 'BANK BUMIPUTERA', '485', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (103, 'BANK YUDHA BHAKTI', '490', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (104, 'BANK MITRANIAGA', '491', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (105, 'BANK AGRO NIAGA', '494', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (106, 'BANK INDOMONEX', '498', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (107, 'BANK ROYAL INDONESIA', '501', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (108, 'BANK ALFINDO', '503', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (109, 'BANK SYARIAH MEGA', '506', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (110, 'BANK INA PERDANA', '513', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (111, 'BANK HARFA', '517', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (112, 'PRIMA MASTER BANK', '520', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (113, 'BANK PERSYARIKATAN INDONESIA', '521', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (114, 'BANK AKITA', '525', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (115, 'LIMAN INTERNATIONAL BANK', '526', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (116, 'ANGLOMAS INTERNASIONAL BANK', '531', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (117, 'BANK DIPO INTERNATIONAL', '523', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (118, 'BANK KESEJAHTERAAN EKONOMI', '535', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (119, 'BANK UIB', '536', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (120, 'BANK ARTOS IND', '542', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (121, 'BANK PURBA DANARTA', '547', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (122, 'BANK MULTI ARTA SENTOSA', '548', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (123, 'BANK MAYORA', '553', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (124, 'BANK INDEX SELINDO', '555', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (125, 'BANK VICTORIA INTERNATIONAL', '566', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (126, 'BANK EKSEKUTIF', '558', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (127, 'CENTRATAMA NASIONAL BANK', '559', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (128, 'BANK FAMA INTERNASIONAL', '562', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (129, 'BANK SINAR HARAPAN BALI', '564', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (130, 'BANK HARDA', '567', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (131, 'BANK FINCONESIA', '945', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (132, 'BANK MERINCORP', '946', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (133, 'BANK MAYBANK INDOCORP', '947', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (134, 'BANK OCBC – INDONESIA', '948', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (135, 'BANK CHINA TRUST INDONESIA', '949', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (136, 'BANK COMMONWEALTH', '950', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (137, 'BANK BJB SYARIAH', '425', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (138, 'BPR KS (KARYAJATNIKA SEDAYA)', '688', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (139, 'INDOSAT DOMPETKU', '789', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (140, 'TELKOMSEL TCASH', '911', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');
        INSERT INTO "public"."bank_names" ("id", "name", "code", "createdAt", "updatedAt") VALUES (141, 'LINKAJA', '911', '2023-10-17 23:00:00+07', '2023-10-17 23:00:00+07');    
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
