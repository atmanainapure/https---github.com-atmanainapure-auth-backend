//connect to mongodb
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_MONGO);
const connectMongo =()=>{ 
    console.log("connecting to mongo");
    mongoose.connect(mongoURI)
    console.log(mongoose.connection.readyState);
}
module.exports = connectMongo;
