const express = require("express");
const router = express.Router();
const PresenceModel = require("../models/presence");

router.get('/', async (req, res) => {
    const presence = await PresenceModel.findAll();
    res.status(200).json({
        presence,
        metadata: "test get presence endpoint"
    });
});

router.post('/checkin', async (req, res) => {
    const {nip} = req.body;
    const presence = await PresenceModel.create({
        users_nip: nip, status: "in"
    });
    res.status(200).json({
        presence,
        metadata: "checkin berhasil"
    });
});
router.post('/checkout', async (req, res) => {
    const {nip} = req.body;
    const presence = await PresenceModel.create({
        users_nip: nip, status: "out"
    });
    res.status(200).json({
        presence,
        metadata: "checkout berhasil"
    });
});

module.exports = router;