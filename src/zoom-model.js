'use strict';

const schema = require('./zoom-schema.js');

class Zoom {

    create(record) {

        let newRecord = new schema(record);
        return newRecord.save();
      }
  
      read(_id) {
        if (_id) {
          return schema.findOne({ _id });
        } else {
          return schema.find({});
        }
      }
  
      update(_id, record) {
        return schema.findByIdAndUpdate(_id, record, { new: true });
      }
  
      delete(_id) {
        return schema.findByIdAndDelete(_id);
      }
}

module.exports = Zoom;