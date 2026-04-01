const mongoose = require('mongoose');

 async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/education_vn');
        console.log('Connected successfully!');
    } catch (error) {
        console.log('Connect failure!');
        console.log(error);
    }
}
module.exports = { connect };