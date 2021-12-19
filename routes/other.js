const express = require('express');
const { auth } = require('firebase-admin');


const router = express.Router();

const {sendAllDrinks} = require("../controllers/drink");

const {authCheck}  = require("../middlewares/drink");

router.get('/drinks',authCheck,sendAllDrinks);


module.exports = router;
