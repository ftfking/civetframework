const express = require('express')
const router  = express.Router()

router.use(require('./web/AdminRoutes.js'))

module.exports = router