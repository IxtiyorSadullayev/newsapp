const mongoose = require('mongoose')

const connectDB = async()=>{
    mongoose.connect(process.env.DBURL)
        .then(()=> console.log(`Connect db`))
        .catch(err=> console.log(`Error: ${err.message}`))
        .finally(()=> console.log(`Server ishga tayyor`))
}

module.exports = {connectDB}