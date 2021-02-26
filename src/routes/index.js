const { Router } = require('express');
const UserController = require('../controllers/UserController')

const router = Router();

router.route('/user/:id')
  .get(UserController.getById)

module.exports = router;