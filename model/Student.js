const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' },
    issues: { type: [ObjectId], default: [null]},
    city: { type: String, default: '' },
    promo: { type: String, default: null },
    phone: { type: Number, default: '' },
    class:{type:String, default:''},
    school:{type:String, default:''},
    target:{type:String, default:''},
    subscription:{type:Object, default:''},

}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Student', StudentSchema);




