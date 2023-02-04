const mongoose = require('mongoose');

async function connect(){
   try {
    mongoose.set({'strictQuery' : false});
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
   } catch (err) {
        console.log("Error in connection, " + err.message);
   }
}

module.exports = connect;