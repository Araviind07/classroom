const mongoose = require('mongoose');
const classroomSchema = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  days: [String],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});
module.exports = mongoose.model('Classroom', classroomSchema);
