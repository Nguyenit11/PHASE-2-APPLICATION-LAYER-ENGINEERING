const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, default: '' , maxlength: 255},
    description: {type: String, required: true , maxlength: 600},
    price: {type: Number, required: true},
    image: {type: String, required: true, maxlength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Course', CourseSchema);