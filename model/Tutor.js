const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const TutorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'Tutor' },
    issue: { type: ObjectId, default: null },
    phone: { type: Number, default: '' },
    solved: { type: [ObjectId], default: []},
    unanswered: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    class:{type:Object, default:{}},
    city:{type:String, default:''},
    target: { type: Object, default:{}},
    board: { type: Object, default:{}},

}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Tutor', TutorSchema);