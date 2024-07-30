const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://kenechukwuajimah:1601413@cluster0.j2ntlll.mongodb.net/image?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected");
    } catch (error) {
        console.log('Error connecting');
    }
}
module.exports = {connect}