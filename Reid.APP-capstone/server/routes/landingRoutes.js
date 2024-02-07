const router = require('express').Router()
    , controllers = require('../controllers')

router.route('/').get(controllers.userLanding)
router.route('/general').get(controllers.generalLanding)

module.exports = router