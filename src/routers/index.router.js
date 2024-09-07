const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')

router.use('/area', authMiddleware, require('./area.router'))
router.use('/activity', authMiddleware, require('./activity.router'))
router.use('/assets', authMiddleware, require('./makeassets.router'))
router.use('/auth', require('./auth.router'))
router.use('/bank', require('./bank.router'))
router.use('/document', require('./document.router'))
router.use('/bpjs', require('./bpjs.router'))
router.use('/chat', require('./chat.router'))
router.use('/insurance', require('./insurance.router'))
router.use('/vaccine', require('./vaccine.router'))
router.use('/schedule', require('./schedule.router'))
router.use('/contract', require('./contract.router'))
router.use('/cost', require('./cost.router'))
router.use('/announcement', authMiddleware, require('./announcement.router'))
router.use(
    '/incoming-assets',
    authMiddleware,
    require('./incomingassets.router')
)
router.use(
    '/outgoing-assets',
    authMiddleware,
    require('./outgoingassets.router')
)
router.use('/employee', require('./employee.router'))
router.use('/sendmail', require('./sendmail.router'))
router.use('/branch', authMiddleware, require('./branch.router'))
router.use('/division', authMiddleware, require('./division.router'))
router.use('/kpi', authMiddleware, require('./kpi.router'))
router.use('/events', authMiddleware, require('./events.router'))
router.use(
    '/national-holiday',
    authMiddleware,
    require('./nationalholiday.router')
)
router.use('/permissions', authMiddleware, require('./permissions.router'))
router.use(
    '/permission-type',
    authMiddleware,
    require('./permissiontype.router')
)
router.use(
    '/leave-type-master',
    authMiddleware,
    require('./leavetypemaster.router')
)
router.use('/company', authMiddleware, require('./company.router'))
router.use('/guarantee', authMiddleware, require('./guarantee.router'))
router.use(
    '/incoming-guarantee',
    authMiddleware,
    require('./incomingguarantee.router')
)
router.use(
    '/outgoing-guarantee',
    authMiddleware,
    require('./outgoingguarantee.router')
)
router.use('/level', authMiddleware, require('./level.router'))
router.use('/loan', authMiddleware, require('./loan.router'))
router.use(
    '/position-of-work',
    authMiddleware,
    require('./position-of-work.router')
)
router.use('/leave-type', authMiddleware, require('./leavetype.router'))
router.use('/users', authMiddleware, require('./user.router'))
router.use('/overtime', authMiddleware, require('./overtime.router'))
router.use('/overtime-type', authMiddleware, require('./overtime-type.router'))
router.use('/province', authMiddleware, require('./province.router'))
router.use('/regency', authMiddleware, require('./regency.router'))
router.use('/district', authMiddleware, require('./district.router'))
router.use('/village', authMiddleware, require('./village.router'))
router.use('/tasks', authMiddleware, require('./task.router'))
router.use('/tickets', authMiddleware, require('./ticket.router'))
router.use('/requests', authMiddleware, require('./request.router'))
router.use('/role', authMiddleware, require('./role.router'))
router.use('/mutation', authMiddleware, require('./mutation.router'))
router.use('/shift', authMiddleware, require('./shift.router'))
router.use('/presence', authMiddleware, require('./presence.router'))
router.use(
    '/master-salary-addition',
    authMiddleware,
    require('./master-salary-addition.router')
)
router.use(
    '/master-salary-deduction',
    authMiddleware,
    require('./master-salary-deduction.router')
)
router.use(
    '/master-salary-insurance',
    authMiddleware,
    require('./master-salary-insurance.router')
)
router.use(
    '/master-salary-tax',
    authMiddleware,
    require('./master-salary-tax.router')
)
router.use(
    '/presence-status',
    authMiddleware,
    require('./presence-status.router')
)
router.use('/main-salary', authMiddleware, require('./main-salary.router'))
router.use(
    '/main-salary-addition',
    authMiddleware,
    require('./main-salary-addition.router')
)
router.use(
    '/main-salary-deduction',
    authMiddleware,
    require('./main-salary-deduction.router')
)
router.use(
    '/main-salary-bpjs',
    authMiddleware,
    require('./main-salary-bpjs.router')
)
router.use(
    '/main-salary-insurance',
    authMiddleware,
    require('./main-salary-insurance.router')
)
router.use(
    '/main-salary-tax',
    authMiddleware,
    require('./main-salary-tax.router')
)
router.use('/total-salary', authMiddleware, require('./total-salary.router'))

router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Backend is running well',
    })
})

module.exports = router
