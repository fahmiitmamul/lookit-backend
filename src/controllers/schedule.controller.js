const errorhandler = require('../helpers/errorhandler.helper')
const { schedule } = require('../models/index')
const { shift } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const { rows } = await schedule.findAndCountAll({
                include: [
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all schedule successfully',
                results: {
                    data: rows,
                },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await schedule.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get schedule successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const employeeIds = req.body.employee.split(',').map(Number)

            await schedule.destroy({
                where: {
                    employee_id: employeeIds,
                    start: {
                        [Op.between]: [
                            req.body.early_period,
                            req.body.final_period,
                        ],
                    },
                },
            })

            const generateSchedule = async (
                startDate,
                endDate,
                employeeIds
            ) => {
                const start = new Date(startDate)
                const end = new Date(endDate)
                if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                    throw new Error('Invalid startDate or endDate')
                }

                const schedules = []
                let currentDate = new Date(start)

                const shiftData = [
                    req.body.minggu_shift_id,
                    req.body.senin_shift_id,
                    req.body.selasa_shift_id,
                    req.body.rabu_shift_id,
                    req.body.kamis_shift_id,
                    req.body.jumat_shift_id,
                    req.body.sabtu_shift_id,
                ]

                while (currentDate <= end) {
                    const dayOfWeek = currentDate.getDay()
                    const shiftId = shiftData[dayOfWeek]
                    const shiftDatas = await shift.findOne({
                        where: {
                            id: shiftId,
                        },
                    })

                    if (!shiftDatas) {
                        throw new Error(`Shift Data Not Found`)
                    }

                    for (let employeeId of employeeIds) {
                        const schedule = await createScheduleForEmployee(
                            currentDate,
                            shiftDatas,
                            employeeId
                        )
                        schedules.push(schedule)
                    }

                    currentDate = new Date(
                        currentDate.setDate(currentDate.getDate() + 1)
                    )
                }

                return schedules
            }

            async function createScheduleForEmployee(
                currentDate,
                currentShiftId,
                employeeId
            ) {
                await new Promise((resolve) => setTimeout(resolve, 100))

                let is_holiday

                if (currentShiftId.shift_name === 'Libur') {
                    is_holiday = true
                } else {
                    is_holiday = false
                }

                return {
                    title: currentShiftId.shift_code,
                    start: currentDate.toISOString().split('T')[0],
                    end: currentDate.toISOString().split('T')[0],
                    start_time: currentShiftId
                        ? currentShiftId.start_time
                        : '00:00',
                    end_time: currentShiftId
                        ? currentShiftId.end_time
                        : '00:00',
                    is_holiday: is_holiday,
                    shift_id: currentShiftId.id,
                    employee_id: employeeId,
                    is_reguler: true,
                }
            }

            const generatedSchedules = await generateSchedule(
                req.body.early_period,
                req.body.final_period,
                employeeIds
            )

            const data = await schedule.bulkCreate(generatedSchedules)

            return res.json({
                success: true,
                message: 'Create schedule successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    createFlexible: async (req, res) => {
        try {
            const shiftData = await shift.findOne({
                where: { id: req.body.shift_id },
            })

            let is_holiday

            if (shiftData.shift_name === 'Libur') {
                is_holiday = true
            } else {
                is_holiday = false
            }

            const employeeIds = req.body.employee.split(',').map(Number)

            for (const employeeId of employeeIds) {
                await schedule.create({
                    title: shiftData.shift_code,
                    start: req?.body?.start,
                    end: req?.body?.end,
                    start_time: shiftData?.start_time,
                    end_time: shiftData?.end_time,
                    shift_id: shiftData?.id,
                    is_holiday: is_holiday,
                    employee_id: employeeId,
                    is_reguler: false,
                })
            }

            return res.json({
                success: true,
                message: 'Create schedule successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const shiftId = req.body.shift_id

            const shiftData = await shift.findOne({ where: { id: shiftId } })

            let is_holiday

            if (shiftData.shift_name === 'Libur') {
                is_holiday = true
            } else {
                is_holiday = false
            }

            const data = await schedule.update(
                {
                    title: shiftData.shift_code,
                    shift_id: req.body.shift_id,
                    start_time: shiftData.start_time,
                    end_time: shiftData.end_time,
                    is_holiday: is_holiday,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )

            return res.json({
                success: true,
                message: 'Update schedule successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await schedule.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete schedule successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
