const router = require('express').Router()
    // , appRoutes = require('./appRoutes')
    , authRoutes = require('./authRoutes')
    , landingRoutes = require('./landingRoutes')

// router.use('/app', appRoutes)
router.use('/auth', authRoutes)
router.use('/landing', landingRoutes)

module.exports = router