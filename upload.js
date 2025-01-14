const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    filename : (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file,cb)
    }
})

const checkFileType = (file, cb) => {
    const filetypes = /|jpg|jpeg|png|svg/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb(new Error(`Error uploading, please upload a valid filetype: ${filetypes}`))
    }
}

module.exports = upload