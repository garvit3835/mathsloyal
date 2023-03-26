const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String},
    password: { type: String},
    role: { type: String },
 

}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Test', TestSchema);




