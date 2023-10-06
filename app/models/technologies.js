const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({

    name: {
        type: String
    },
    type: {
        type: String
    },
    years: {
        type: Number
    }

});

module.exports = mongoose.model('technologies', TechnologySchema);
