const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next();
  }
  return res.status(400).json(err.array());
};

router.post(
  '/signin',
  [
    body('email').notEmpty().isEmail().withMessage('email is required'),
    body('password').notEmpty().isString().withMessage('password is required)'),
    validate
  ],
  userController.signIn
);

router.post(
  '/signup', 
  [
    body('email').notEmpty().isEmail().withMessage('email is required'),
    body('name').notEmpty().isString().withMessage('name is string'),
    body('birth').notEmpty().isDate().withMessage('birth is date'),
    body('password').notEmpty().isString().withMessage('password is required)').isLength({ min: 4, max: 20}),
    validate
  ],
  userController.signUp
);

router
  .route('/users')
  .get(
    [
      body('email').notEmpty().isEmail().withMessage('email is required'),
      validate
    ],
    userController.inquiryUser
  )

  .delete(
    [
      body('email').notEmpty().isEmail().withMessage('email is required'),
      validate
    ],
    userController.deleteUser
  )

module.exports = router;