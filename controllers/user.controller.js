const { GenerateToken } = require('../helpers/generate.Token');
const UserSchema = require('./../models/user.model')

exports.Createuser = async (req, res, next) =>{
    try {
        const {name, fam, email, phone, login, password, professia, work, role } = req.body;
        const condidate = await UserSchema.findOne({login: login});
        if(condidate){
            return await res.status(400).json("Bunday loginli foydalanuvchi mavjud.")
        }
        const user = await UserSchema.create({name, fam, email, phone, login, password, professia, work, role})
        const token = await GenerateToken(user)
        await res.status(201).json({
            message: "Foydalanuvchi yaratildi.",
            token: token,
            role: user.role
        })
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.SignIn = async (req,res,next) =>{
    try {
        const {login, password} = req.body;
        const condidate = await UserSchema.findOne({login: login});
        if(!condidate || condidate.password != password){
            return await res.status(400).json("Loginingiz yoki Parolingiz noto'g'ri")
        }
        const token = await GenerateToken(condidate);
        await res.status(200).json({
            message: "Ma'lumotlaringiz to'g'ri",
            token: token,
            role: condidate.role
        })
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.UpdateUser = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await UserSchema.findById(id)
        if(!condidate){
            return await res.status(400).json("Kechirasiz. Ushbu foydalanuvchi topilmadi.")
        }
        await UserSchema.findByIdAndUpdate(id, req.body)
        await res.status(200).json("Ma'lumotlar yangilandi.")
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.DeleteUser = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await UserSchema.findById(id)
        if(!condidate){
            return await res.status(400).json("Kechirasiz. Ushbu foydalanuvchi topilmadi.")
        }
        await UserSchema.findByIdAndDelete(id)
        await res.status(200).json("Foydalanuvchi o'chirildi.")
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.GetAllUsers = async (req,res,next) =>{
    try {
        const users = await UserSchema.find()
        await res.status(200).json(users)
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.GetOneUser = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await UserSchema.findById(id);
        if(!condidate){
            return await res.status(400).json("Kechirasiz. Ushbu foydalanuvchi topilmadi.")
        }
        await res.status(200).json(condidate)
    } catch (e) {
        await res.status(500).json(e.message)
    }
}