const router = require('express').Router()

// Define all available routes
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')

// Use routes
router.use('/', homeRoutes)
router.use('/api', apiRoutes)

//Export modules
module.exports = router