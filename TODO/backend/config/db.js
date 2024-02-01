const mongoose = require("mongoose");

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://varundaruna:ncHzgoRH5UrOqhV3@cluster0.vtbhope.mongodb.net/todo1",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(" mongoDB connected ", conn.connection.host);

    } catch (error) {
        
        console.log(" mongoDB connection error ", error.message);
        process.exit();

    }
}

module.exports = connectionDB