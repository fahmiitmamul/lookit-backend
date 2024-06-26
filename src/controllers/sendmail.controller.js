const nodemailer = require('nodemailer')
const { email } = require('../models/index')
const errorhandler = require('../helpers/errorhandler.helper')

module.exports = {
    sendMail: async (req, res) => {
        try {
            const data = await email.findAll()
            const mailOptions = {
                from: req.body.from,
                to: req.body.to,
                subject: req.body.subject,
                html: `
                <div style="max-width: 600px; margin: 40px auto; padding: 30px; background-color: #ffffff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 10px;">
                  <!-- Logo -->
                  <img src="https://res.cloudinary.com/dxnewldiy/image/upload/v1701582842/ij3wsthnhsyjvmtsmpm2.png" alt="Logo" style="max-width: 120px; margin-top: 0px;">

                  <h1 style="color: #2d3748; margin-top: 20px;">Kontrak Kerjasama</h1>
                  <p style="font-size: 16px; color: #4a5568; line-height: 1.6; margin: 20px 0;">Anda diundang untuk menandatangani kontrak kerjasama. Silakan klik link di bawah ini untuk melanjutkan proses tanda tangan elektronik.</p>
                  <a href=${req.body.text} style="display: inline-block; padding: 12px 24px; margin-top: 20px; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s ease-in-out;" onmouseover="this.style.backgroundColor='#367b48'" onmouseout="this.style.backgroundColor='#4CAF50'">Tanda Tangan Kontrak</a>
                </div>
                `,
            }

            const host = data[0].smtp_host
            const port = data[0].smtp_port
            const user = data[0].email
            const pass = data[0].smtp_pass

            const transporter = nodemailer.createTransport({
                host: host,
                port: parseInt(port),
                secure: true,
                auth: {
                    user: user,
                    pass: pass,
                },
            })

            await transporter.sendMail(mailOptions)
            return res.json({
                success: true,
                message: 'Email sent successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
