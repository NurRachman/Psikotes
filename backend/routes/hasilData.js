const router = require('express').Router();
let Hasil = require('../models/hasil.model');

router.route('/').get((req, res) => {
    Hasil.find()
        .then(hasil => res.json(hasil))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const biodata = req.body.biodata;
    const disc = req.body.disc;
    const wpt = req.body.wpt;

    const newHasil = new Hasil({ 
        biodata,
        disc,
        wpt,
    });

    newHasil.save()
        .then(() => res.json('Berhasil!'))
        .catch(err =>res.status(400).json('Error: '+ err));
});

module.exports = router;