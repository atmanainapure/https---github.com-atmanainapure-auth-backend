//connect to mongodb
const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_MONGO);
const connectMongo =()=>{ 
    console.log("connecting to mongo");
    mongoose.connect('mongodb+srv://atmanainapure:cccZnlEdDdGN64NP@cluster0.uptyu3x.mongodb.net/?authSource=Cluster0&authMechanism=SCRAM-SHA-1')
    console.log(mongoose.connection.readyState);
}
module.exports = connectMongo;
