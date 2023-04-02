const jwt = require('jsonwebtoken')

const GenerateToken = async (data) =>{
    const secret = process.env.SECRET || 'meningsercretvalueim'
    const token = await jwt.sign({data},secret,{expiresIn: '48h'})
    return token;
}

module.exports = {GenerateToken}