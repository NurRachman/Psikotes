const router = require('express').Router();
let Biodata = require('../models/biodata.model');

router.route('/').get((req, res) => {
    Biodata.find()
        .then(biodata => res.json(biodata))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phone = req.body.phone;
    const dateofBirth = req.body.dateofBirth;
    const gender = req.body.gender;
    const pob = req.body.pob;

    const newBiodata = new Biodata({ 
        fullname,
        email,
        phone,
        dateofBirth,
        gender,
        pob,
    });

    newBiodata.save()
        .then(() => res.json('Berhasil ditambahkan'))
        .catch(err =>res.status(400).json('Error: '+ err));
});

module.exports = router;