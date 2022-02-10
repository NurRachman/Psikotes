const router = require('express').Router();
let Wpt = require('../models/wpt.model');

router.route('/').get((req, res) => {
    Wpt.find()
        .then(wpt => res.json(wpt))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const w1 = req.body.w1;
    /*const w2 = req.body.w2;
    const w3 = req.body.w3;
    const w4 = req.body.w4;
    const w5 = req.body.w5;
    const w6 = req.body.w6;
    const w7 = req.body.w7;
    const w8 = req.body.w8;
    const w9 = req.body.w9;
    const w10 = req.body.w10;
    const w11 = req.body.w11;
    const w12 = req.body.w12;
    const w13 = req.body.w13;
    const w14 = req.body.w14;
    const w15 = req.body.w15;
    const w16 = req.body.w16;
    const w17 = req.body.w17;
    const w18 = req.body.w18;
    const w19 = req.body.w19;
    const w20 = req.body.w20;
    const w21 = req.body.w21;
    const w22 = req.body.w22;
    const w23 = req.body.w23;
    const w24 = req.body.w24;
    const w25 = req.body.w25;
    const w26 = req.body.w26;
    const w27 = req.body.w27;
    const w28 = req.body.w28;
    const w29 = req.body.w29;
    const w30 = req.body.w30;
    const w31 = req.body.w31;
    const w32 = req.body.w32;
    const w33 = req.body.w33;
    const w34 = req.body.w34;
    const w35 = req.body.w35;
    const w36 = req.body.w36;
    const w37 = req.body.w37;
    const w38 = req.body.w38;
    const w39 = req.body.w39;
    const w40 = req.body.w40;
    const w41 = req.body.w41;
    const w42 = req.body.w42;
    const w43 = req.body.w43;
    const w44 = req.body.w44;
    const w45 = req.body.w45;
    const w46 = req.body.w46;
    const w47 = req.body.w47;
    const w48 = req.body.w48;
    const w49 = req.body.w49;
    const w50 = req.body.w50;*/

    const newWpt = new Wpt[{ 
        w1,
    }];

    newWpt.save()
        .then(() => res.json('Berhasil ditambahkan'))
        .catch(err =>res.status(400).json('Error: '+ err));
});

module.exports = router;