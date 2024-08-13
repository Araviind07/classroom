const express = require('express');
const router = express.Router();
const Classroom = require('../models/Classroom');
const auth = require('../middleware/auth');


router.post('/', auth, async (req, res) => {
  const { name, startTime, endTime, days, teacherId } = req.body;
  try {
    const classroom = new Classroom({ name, startTime, endTime, days, teacher: teacherId });
    await classroom.save();
    res.json(classroom);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.get('/', auth, async (req, res) => {
  try {
    const classrooms = await Classroom.find().populate('teacher', 'name email');
    res.json(classrooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
