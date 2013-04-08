
/**
 * Example input:
 *
 *
 **/

var http        = require('http')
  , url         = require('url')
  ;

function createQuery (obj) {
  var qObj = {};

  qObj.center = obj.center;

  qObj.zoom = obj.zoom || 13;

  qObj.size = obj.size.width + 'x' + obj.size.height;

  qObj.maptype = obj.maptype;

  qObj.sensor = obj.sensor ? 'true' : 'false';

  qObj.markers = [];
  obj.markers.forEach(function (marker) {
    qObj.markers.push('color:'+marker.color+'|label:'+marker.label+'|'+marker.latitude+','+marker.longitude);
  });

  return qObj;
}

module.exports.query = function (options) {

  return url.format({
    protocol: 'http',
    hostname: 'maps.googleapis.com',
    pathname: '/maps/api/staticmap',
    query: createQuery(options)
  });

};
