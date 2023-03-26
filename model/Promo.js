const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const PromoSchema = new mongoose.Schema({
    code: {type: String, required: true, unique: true},
    count: {type: Number, required: true},
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Promo', PromoSchema);