const express = require('express');
const { auth } = require('firebase-admin');


const router = express.Router();

const {sendAllDrinks} = require("../controllers/drink");

const {sendAllExercises} = require("../controllers/sendAllExercises");

const {authCheck}  = require("../middlewares/drink");

router.get('/drinks',authCheck,sendAllDrinks);

router.get('/exercises',authCheck,sendAllExercises);


module.exports = router;
