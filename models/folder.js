'use strict';

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, },
});

folderSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Folder', folderSchema);
