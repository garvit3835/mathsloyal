const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const IssueSchema = new mongoose.Schema({
    image: { type: String, default: '' },
    message: { type: String, default: '' },
    student: { type: ObjectId, default: null },
    tutor: { type: ObjectId, default: null },
    // payment: { type: Boolean, default: false },
    solved: { type: Boolean, default: false },
    orderId: { type: String },
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Issue', IssueSchema);