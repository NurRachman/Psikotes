const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const biodataSchema = new Schema({
    fullname: { type: String, },
    email: { type: String },
    phone: { type: String },
    dateofBirth: { type: String },
    gender : { type: String },
    pob : { type: String },
}, {
    timestamps: true,
});

const Biodata = mongoose.model('Biodata', biodataSchema);

module.exports = Biodata;