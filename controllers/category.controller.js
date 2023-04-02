const CategorySchema = require('./../models/category')

exports.CreateCategory = async(req,res,next) =>{
    try {
        const user = req.user;
        const {name} = req.body;
        if(user.role != "Admin"){
            return await res.status(400).json("Kechirasiz siz categoriya yarata olmaysiz.")
        }
        const condidate = await CategorySchema.findOne({name: name})
        if(condidate){
            return await res.status(400).json("Ushbu categoriya bizda mavjud.")
        }
        await CategorySchema.create({name:name, author: user._id})
        await res.status(201).json("Categoriya yaratildi.")
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.GetAllCategory = async(req,res,next) =>{
    try {
        const categoriya = await CategorySchema.find().select('name');
        await res.status(200).json(categoriya)       
    } catch (e) {
        await res.status(500).json(e.message)
    }
}


exports.UpdateCategory = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await CategorySchema.findById(id)
        if(!condidate){
            return await res.status(400).json("Ushbu categoriya topilmadi.")
        }
        await CategorySchema.findByIdAndUpdate(id, req.body)
        await res.status(200).json("Ma'lumotlar yangilandi.")
    } catch (e) {
        await res.status(500).json(e.message)
    }
}


exports.DeleteCategory = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await CategorySchema.findById(id)
        if(!condidate){
            return await res.status(400).json("Ushbu categoriya topilmadi.")
        }
        await CategorySchema.findByIdAndDelete(id)
        await res.status(200).json("Ma'lumot o'chirildi.")
    } catch (e) {
        await res.status(500).json(e.message)
    }
}