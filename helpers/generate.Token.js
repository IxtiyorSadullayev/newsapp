const jwt = require('jsonwebtoken')

const secret = process.env.SECRET || 'meningsercretvalueim'
const GenerateToken = async (data) =>{
    const token = await jwt.sign({data},secret,{expiresIn: '48h'})
    return token;
}


const GenerateUser = (role)=> async(req, res, next) =>{
    try {
        const token = req.headers.authorization;
        const tekshiruv = await jwt.verify(token, secret)
        if(role != tekshiruv.data.role){
            return await res.status(400).json("Sizning huquqingiz mavjud emas.")
        }
        req.user = tekshiruv.data
        next()
    } catch (e) {
        await res.status(500).json(e.message)
    }
}


module.exports = {GenerateToken, GenerateUser}