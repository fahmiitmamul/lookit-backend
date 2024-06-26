const presenceRouter = require('express').Router()
const presenceController = require('../controllers/presence.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

presenceRouter.get('/', presenceController.getAll)
presenceRouter.get('/employee', presenceController.getEmployeePresence)
presenceRouter.get('/present', presenceController.getPresent)
presenceRouter.get('/present/employee', presenceController.getEmployeePresent)
presenceRouter.get('/arrive-late', presenceController.getArrivingLate)
presenceRouter.get(
    '/arrive-late/employee',
    presenceController.getEmployeeArrivingLate
)
presenceRouter.get('/go-early', presenceController.getGoEarly)
presenceRouter.get('/go-early/employee', presenceController.getEmployeeGoEarly)
presenceRouter.get('/not-absent', presenceController.getNotAbsent)
presenceRouter.get(
    '/not-absent/employee',
    presenceController.getEmployeeNotAbsent
)
presenceRouter.get('/alpha', presenceController.getAlpha)
presenceRouter.get('/alpha/employee', presenceController.getEmployeeAlpha)
presenceRouter.get('/sick', presenceController.getSick)
presenceRouter.get('/sick/employee', presenceController.getEmployeeSick)
presenceRouter.get('/permission', presenceController.getPermission)
presenceRouter.get(
    '/permission/employee',
    presenceController.getEmployeePermission
)
presenceRouter.get('/leave-type', presenceController.getLeaveType)
presenceRouter.get(
    '/leave-type/employee',
    presenceController.getEmployeeLeaveType
)
presenceRouter.get('/holiday', presenceController.getHoliday)
presenceRouter.get('/holiday/employee', presenceController.getEmployeeHoliday)
presenceRouter.get('/overtime', presenceController.getOvertime)
presenceRouter.get('/overtime/employee', presenceController.getEmployeeOvertime)
presenceRouter.get('/:id', presenceController.findOneById)
presenceRouter.get('/employee/:id', presenceController.findOneByEmployeeId)
presenceRouter.post('/in', presenceController.AbsentIn)
presenceRouter.post('/out', presenceController.AbsentOut)
presenceRouter.post('/overtime', presenceController.AbsentOvertime)
presenceRouter.post(
    '/manual',
    uploadDocuments.fields([
        {
            name: 'file_in',
            maxCount: 1,
        },
        {
            name: 'file_out',
            maxCount: 1,
        },
    ]),
    presenceController.AbsentManual
)
presenceRouter.patch('/:id', presenceController.update)
presenceRouter.delete('/:id', presenceController.delete)

module.exports = presenceRouter
