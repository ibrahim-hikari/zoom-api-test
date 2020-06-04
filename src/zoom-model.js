'use strict';

const schema = require('./zoom-schema.js');
const Crud = require('./crud.js');

class Zoom extends Crud { }

module.exports = new Zoom(schema);