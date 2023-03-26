const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const SolutionSchema = new mongoose.Schema({
    // _id: {type: ObjectId, required: true, unique: true},
    image: { type: String, default: '' },
    message: { type: String, default: '' },
    tutor: { type: ObjectId, default: '' },
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Solution', SolutionSchema);