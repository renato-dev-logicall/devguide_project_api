const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    // username must be an email
    body('username').isEmail().withMessage('Não é um e-mail válido'),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }).withMessage('Mínimo de 5 caracteres'),
  ]
}

const validateUserPost = (req, res, next) => {
  
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validateUserPost,
}