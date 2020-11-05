const config = require('config')
const jwt = require('jsonwebtoken')


module.exports = (req, res, next)=>{
    const token = req.header('auth-token')

    if(!token){
      return  res.status(401).json({msg : 'No token access denied'})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({msg:'No valid token '})
        
    }
}