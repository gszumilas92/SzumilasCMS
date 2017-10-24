const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema ({
    area: String,
    contentType: String,
    content: Object,
    visible: Boolean
})

const Contents = mongoose.model('Contents', contentSchema);

module.exports = Contents;
