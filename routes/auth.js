const express = require('express')


const router = express.Router();

const {createOrUpdateUser} = require("../controllers/auth");

//route
router.post('/create-user',createOrUpdateUser);


module.exports = router;
