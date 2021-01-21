const { Router } = require('express')
const router = Router()

router.use('/hello', (req, res) => {
  res.json({nome: 'jonathan', idade: 35})
})

module.exports = router