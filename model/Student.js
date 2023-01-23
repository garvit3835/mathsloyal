const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' },
    city: { type: String, default: '' },
    phone: { type: Number, default: '' },
    class:{type:String, default:''},
    school:{type:String, default:''},
    city:{type:String, default:''},
    target:{type:String, default:''},
    subscription:{type:Object, default:''},

}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Student', StudentSchema);




