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
            'employees',
            [
                {
                    profile_photo: 'uploads/1714376290002',
                    name: 'Super Administrator',
                    nik_ktp: '12345678901234567',
                    employee_nik: 'EMP001',
                    npwp: '98765432109876564',
                    birth_place: 'Jakarta',
                    age: '30',
                    religion: 'Islam',
                    gender: 'Male',
                    email: 'johndoe@example.com',
                    batch: '1',
                    bank_owner_name: 'Super Administrator',
                    phone_number: '081234567890',
                    marital_status: 'Menikah',
                    employee_height: '170',
                    employee_weight: '70',
                    blood_type: 'O',
                    e_ktp_province_id: null,
                    e_ktp_regency_id: null,
                    e_ktp_district_id: null,
                    e_ktp_village_id: null,
                    e_ktp_full_address: 'Jl. Kemerdekaan No. 70',
                    e_ktp_postal_code: '12345',
                    domicile_province_id: null,
                    domicile_regency_id: null,
                    domicile_district_id: null,
                    domicile_village_id: null,
                    domicile_full_address: 'Jl. Kemerdekaan No. 70',
                    domicile_postal_code: '12345',
                    vaccine_status: 'Vaksin Pertama (I)',
                    urgent_full_name: 'Jane Doe',
                    urgent_phone_number: '0987654321',
                    urgent_full_address: 'Jl. Kemerdekaan No. 70',
                    area_id: null,
                    branch_id: null,
                    departement_id: null,
                    position_id: null,
                    level_id: null,
                    employee_status: 'Nonaktif',
                    educations: JSON.stringify([
                        {
                            level: 'S1',
                            institution: 'University of Example',
                            major: 'Computer Science',
                            year: 2010,
                        },
                    ]),
                    work_history: JSON.stringify([
                        {
                            company: 'Example Corp',
                            position: 'Software Engineer',
                            start_year: 2010,
                            end_year: 2020,
                        },
                    ]),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    profile_photo: 'uploads/1714376290002',
                    name: 'Administrator',
                    nik_ktp: '1234567890123456',
                    employee_nik: 'EMP002',
                    npwp: '9876543210987654',
                    birth_place: 'Jakarta',
                    age: '30',
                    religion: 'Islam',
                    gender: 'Male',
                    email: 'johndoe@example1.com',
                    batch: '1',
                    bank_owner_name: 'Super Administrator',
                    phone_number: '081234567890',
                    marital_status: 'Menikah',
                    employee_height: '170',
                    employee_weight: '70',
                    blood_type: 'O',
                    e_ktp_province_id: null,
                    e_ktp_regency_id: null,
                    e_ktp_district_id: null,
                    e_ktp_village_id: null,
                    e_ktp_full_address: 'Jl. Kemerdekaan No. 70',
                    e_ktp_postal_code: '12345',
                    domicile_province_id: null,
                    domicile_regency_id: null,
                    domicile_district_id: null,
                    domicile_village_id: null,
                    domicile_full_address: 'Jl. Kemerdekaan No. 70',
                    domicile_postal_code: '12345',
                    vaccine_status: 'Vaksin Pertama (I)',
                    urgent_full_name: 'Jane Doe',
                    urgent_phone_number: '0987654321',
                    urgent_full_address: 'Jl. Kemerdekaan No. 70',
                    area_id: null,
                    branch_id: null,
                    departement_id: null,
                    position_id: null,
                    level_id: null,
                    employee_status: 'Nonaktif',
                    educations: JSON.stringify([
                        {
                            level: 'S1',
                            institution: 'University of Example',
                            major: 'Computer Science',
                            year: 2010,
                        },
                    ]),
                    work_history: JSON.stringify([
                        {
                            company: 'Example Corp',
                            position: 'Software Engineer',
                            start_year: 2010,
                            end_year: 2020,
                        },
                    ]),
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
