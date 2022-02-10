const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hasilSchema = new Schema({
    biodata: { type: Object, },
    disc: { type: Object, },
    wpt: { type: Object, },
},
 {
    timestamps: true,
    strict: false,
});

const Hasil = mongoose.model('Hasil', hasilSchema);

module.exports = Hasil;