const mongoose = require('mongoose')
const {db,config} = require('./config')

class MongoConnection
{
    getConnection()
    {
        mongoose.connect(db,config)
        .then(res => '') //custom response {}
        .catch(err => console.log(`${err}`))
    }
}

module.exports = new MongoConnection().getConnection(db,config)