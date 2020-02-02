const mongoose = require('mongoose')
// const bcrypt   = require('bcrypt')

const YourSchema = mongoose.Schema({
    nama: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
})

// PreSchema.pre('save',function(next){
//     this.password = bcrypt.hashSync(this.password,10)
//     next()
// })

module.exports = mongoose.model('YourMongoCollection',YourSchema)
