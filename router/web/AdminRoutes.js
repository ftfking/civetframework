const express = require('express')
const router  = express.Router()
const AdminController = require('../../controllers/AdminController')

router.get('/api/admin',AdminController.getByPagination)
router.get('/api/admin/:id',AdminController.getById)
router.get('/api/admin/limit/:limit',AdminController.getByLimit)
router.post('/api/admin',AdminController.store)
router.put('/api/admin/:id',AdminController.update)
router.delete('/api/admin/:id',AdminController.destroy)

module.exports = router