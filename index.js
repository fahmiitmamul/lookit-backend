require('dotenv').config({
    path: '.env',
})

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const { contract } = require('./src/models/index')
const { Op } = require('sequelize')
const cron = require('node-cron')
const { sequelize } = require('./src/models')

app.use(express.json({ limit: '10mb', extended: true }))
app.use(
    express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 })
)
const PORT = process.env.PORT || 4000

const cors = require('cors')

app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200,
    })
)

const docu_token = process.env.DOCUSEAL_TOKEN

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Backend is running well',
    })
})

app.get('/docuseal-token', (req, res) => {
    if (req.query.data) {
        const token = jwt.sign(
            {
                user_email: process.env.DOCUSEAL_EMAIL,
                integration_email: process.env.DOCUSEAL_EMAIL,
                document_urls: [`${req.query.data}`],
            },
            docu_token
        )
        return res.json({
            success: true,
            results: token,
        })
    } else {
        const token = jwt.sign(
            {
                user_email: process.env.DOCUSEAL_EMAIL,
                integration_email: process.env.DOCUSEAL_EMAIL,
                document_urls: [''],
            },
            docu_token
        )
        return res.json({
            success: true,
            results: token,
        })
    }
})

app.post('/docuseal-webhook', async (req, res) => {
    try {
        if (req.body.event_type === 'form.completed') {
            await contract.update(
                { status: 'Selesai', file: req?.body?.data?.submission?.url },
                {
                    where: {
                        submission_id: {
                            [Op.eq]: req.body.data.submission_id,
                        },
                    },
                }
            )
        }

        return res.json({
            success: true,
            message: 'Signature updated successfully',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

async function updateContractStatus() {
    try {
        const expiredContracts = await contract.findAll({
            where: {
                end_date: { $lt: new Date() },
                status: 'Proses',
            },
        })

        if (expiredContracts.length > 0) {
            await Promise.all(
                expiredContracts.map(async (contract) => {
                    contract.status = 'Tidak Selesai'
                    await contract.save()
                })
            )
            console.log('Contract statuses updated successfully.')
        } else {
            console.log('No contracts to update.')
        }
    } catch (error) {
        console.error('Error updating contract statuses:', error)
    }
}

cron.schedule('0 0 * * *', () => {
    console.log('Running contract status update job...')
    updateContractStatus()
})

app.use('/', require('./src/routers/index.router'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
