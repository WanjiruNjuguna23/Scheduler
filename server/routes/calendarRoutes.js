const express = require('express');
const { addEvent } = require ('../controllers/calendarController');
const router = express.Router();


router.post('/add', addEvent);


module.exports = router;

