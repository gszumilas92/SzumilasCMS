const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema ({
    content: String,
    className: String,// (or attribute?? ToCheck)
    title: String,
    typeOfContent: String,
    visible: Boolean
})

const Contents = mongoose.model('Contents', contentSchema);

module.exports = Contents;