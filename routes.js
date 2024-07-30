const express = require('express');
const upload = require('./upload');
const {postImage} = require('./controller');
const Router = express.Router();


Router.post('/', upload.single("image"),postImage)

module.exports = {Router};