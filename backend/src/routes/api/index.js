const router = require('express').Router()

router.get('/', (req, res) => {
  return res.json({ message: 'enjoy the silence!' })
})

/**
 * * Developers router
 */
router.use('/devs', require('./developers'))

module.exports = router
