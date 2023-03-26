const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const TutorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'Tutor' },
    issue: { type: ObjectId, default: null },
    city: { type: String, default: '' },
    phone: { type: Number, default: '' },
    solved: { type: Number, default: 0 },
    unanswered: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    class:{type:String, default:''},
    school:{type:String, default:''},
    city:{type:String, default:''},
    target:{type:String, default:''},

}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Tutor', TutorSchema);