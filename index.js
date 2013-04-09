var http        = require('http')
  , url         = require('url')
  ;

function createQuery (opts) {
  var qObj = {};

  /** Copy generic keys first **/
  Object.keys(opts).forEach(function (key) {
    qObj[key] = opts[key];
  })

  if (qObj.size)
    qObj.size = opts.size.width + 'x' + opts.size.height;

  if (qObj.markers) {
    if (qObj.markers.length > 0) qObj.markers = [];

    opts.markers.forEach(function (marker) {
      qObj.markers.push('color:'+marker.color+'|label:'+marker.label+'|'+marker.latitude+','+marker.longitude);
    });
  }

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
