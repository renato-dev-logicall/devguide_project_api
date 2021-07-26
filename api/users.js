module.exports = app =>{
    const show = (req, res) =>{
        return res.status(200).send('SHOW USER WORKING!')
    }

    return { show }
}