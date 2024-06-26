const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const errorhandler = require('../helpers/errorhandler.helper')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async () => 'png',
        public_id: () => {
            const filename = new Date().getTime().toString()
            return filename
        },
        transformation: [{ width: 300, height: 300, crop: 'limit' }],
    },
})

const limits = {
    fileSize: 1 * 2048 * 4096,
}

const fileFilter = (req, file, cb) => {
    const formatFile = [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/vnd.microsoft.icon',
        'image/x-icon',
        'image/ico',
    ]
    if (!formatFile.includes(file.mimetype)) {
        cb(Error('fileformat_error'))
    }
    cb(null, true)
}

const documentStorage = multer.memoryStorage()

const upload = multer({ storage, limits, fileFilter })
const uploadDocuments = multer({ documentStorage })

const uploadMiddleware = (field) => {
    const uploadField = upload.single(field)
    return async (req, res, next) => {
        uploadField(req, res, async (err) => {
            try {
                if (err) {
                    console.log(err)
                    throw Error(err.message)
                }
                next()
            } catch (err) {
                return errorhandler(res, err)
            }
        })
    }
}

module.exports = {
    uploadMiddleware,
    uploadDocuments,
}
