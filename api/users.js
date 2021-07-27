
const { validationResult } = require('express-validator');
module.exports = app =>{
    const show = (req, res) =>{
        return res.status(200).send('SHOW USER WORKING!')
    }

    const save = (req, res) =>{
        
        const resp = {
            'error' : 'none',
            'data' : {
                'name' : 'Renato',
                'username' : 'rendev',
                'token' : 'ddsdosdjikjsdifd5sd65f6d5fs63s3f5s'
            }
        }
      
        return res.status(200).json(resp)

    }

    return { show, save }
}