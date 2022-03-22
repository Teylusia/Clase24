const express = require('express');
const {check} = require('express-validator')
const router = express.Router();


const controller = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/admin')

let validateRegister = [
  check('name').notEmpty().withMessage('Debes completar el nombre'),
  check('email').isEmail().withMessage('Debes completar el email'),
  check('colors').isLength({min: 2}).withMessage('Debes elegir un color'),
  check('edad').isNumeric().withMessage('Tu edad debe ser un numero')
]
router.get('/', controller.index);
router.get('/admin', adminMiddleware, controller.admin);

router.get('/form', controller.formShow);
router.post('/form', validateRegister, controller.formSubmit);

module.exports = router;