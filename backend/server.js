const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config({path: '.env'});

const app = express();
const port= process.env.PORT || 5000;
const result = [];

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB connected!");
})

const hasilRouter = require('./routes/hasilData');
//const wptRouter = require('./routes/wpt');

app.use('/hasilData', hasilRouter);
//app.use('/wpt', wptRouter);



/*app.get('/hasilData', (req, res ,next) =>{
    Hasil.find()
        .then(hasil => res.json(hasil))
        .catch(err => res.status(400).json('Error: '+ err));
});

app.post('/hasilData', (req, res ,next) =>{
    const biodata = req.body.biodata;
    const disc = req.body.disc;
    const wpt = req.body.wpt;

    const hasil = {
        biodata,
        disc,
        wpt,
    };

    const Schema = mongoose.Schema;

    const hasilSchema = new Schema({
        biodata: { type: String, },
        disc: { type: String, },
        wpt: { type: String, },
    },
    {strict: false});

    const Hasil = mongoose.model('Hasil', hasilSchema);

    module.exports = Hasil;

    const newHasil = new Hasil ({
        biodata,
        disc,
        wpt
    });
    
    newHasil.save()
        .then(() => res.json('Berhasil!'))
        .catch(err =>res.status(400).json('Error: '+ err));
});*/



app.listen(port, ()=> {
    console.log(`Server is running on port : ${port}`);
});