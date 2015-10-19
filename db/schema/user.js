'use strict';

var mongoose = require('mongoose'),
  elmongo = require('elmongo'),
  Schema = mongoose.Schema;


module.exports = function () {

  var schema = new Schema({
    'name': {
      type: String,
      autocomplete: true,
      index: 'multi_field',
      fields: {
        name: {
          type: 'string',
          autocomplete: true,
          index_analyzer: 'autocomplete_index',
          search_analyzer: 'autocomplete_search'
        },
        raw: {
          type: 'string'
        }
      }
    }
  });

  schema.plugin(elmongo, {
    host: 'localhost',
    port: 9200,
    'type': 'places',
    'protocol': 'http'
  });

  mongoose.model('place', schema);
};
