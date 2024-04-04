const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const blogController = require('../controllers/blogController');

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next();
  }
  return res.status(400).json(err.array());
};

router
  .route('/')
  .get(
    [
      body('userId').notEmpty().isInt().withMessage('userId is number'),
      validate
    ],
    blogController.inquiryUserBlog
  )
  .post(
    [
      body('userId').notEmpty().isInt().withMessage('userId is number'),
      body('title').notEmpty().isString().withMessage('title is string').isLength({ min: 4, max: 20 }),
      validate
    ],
    blogController.createBlog
  )
  
router
  .route('/:id')
  .get(
    [
      param('id').notEmpty().isInt().withMessage('blog id required'),
      validate
    ],
    blogController.inquiryBlog  
  )
  .put(
    [
      param('id').notEmpty().isInt().withMessage('blog id required'),
      body('title').notEmpty().isString().withMessage('blog title required').isLength({ min: 4, max: 20 }),
      validate
    ],
    blogController.updateBlog  
  )
  .delete(
    [
      body('id').notEmpty().isInt().withMessage('blog id required'),
      validate
    ],
    blogController.deleteBlog
  )

module.exports = router;