const router = require('express').Router()
    , controllers = require('../controllers')

router.route('/register').post(controllers.regUser)
router.route('/login').post(controllers.loginUser)
router.route('/logout').post(controllers.logoutUser)
router.route('/admin/login').post(controllers.adminLogin)
router.route('/delete/user').post(controllers.deleteUser)
router.route('/update/user').post(controllers.updateUser)

module.exports = router