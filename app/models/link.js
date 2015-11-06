var mongoose = require( 'mongoose' );
var db = require('../config');
var crypto = require('crypto');

var UrlSchema = new mongoose.Schema({
  url: 'string',
  base_url: 'string',
  code: 'string',
  title: 'string',
  visits: 'number',
  createdAt: { type : Date, default: Date.now } });

var Link = mongoose.model('Link', UrlSchema);

var createSha = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

UrlSchema.pre('save', function(next){
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = Link;
