'use strict';

const mongoose = require('mongoose');

const zoom = mongoose.Schema({
    account_id: {type: String, required: true},
    participant:{type: String, required: true}
});

module.exports = mongoose.model('zoom', zoom);