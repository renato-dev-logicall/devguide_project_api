
const { userValidationRules, validateUserPost } = require('./validators/users.js')
module.exports = app =>{
    app.route('/users')
    .get(app.api.users.show)
    .post(userValidationRules(),validateUserPost,app.api.users.save)
}