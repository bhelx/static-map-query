var staticMap = require('./index.js')
  , assert    = require('assert')
  ;

describe('static maps query', function () {

  describe('#query', function () {

    it('should produce a valid map query', function () {
      var testObj = {
        center: "New Orleans, LA",
        zoom: 13,
        size: {
          width: 600,
          height: 300
        },
        maptype: 'roadmap',
        markers: [
          {
            color: 'blue',
            label: 'A',
            latitude: 29.941102,
            longitude: -90.077105
          },
          {
            color: 'red',
            label: 'B',
            latitude: 29.934705,
            longitude: -90.086203
          }
        ],
        sensor: false
      };

      var url = staticMap.query(testObj);

      assert.equal(url, "http://maps.googleapis.com/maps/api/staticmap?center=New%20Orleans%2C%20LA&zoom=13&size=600x300&maptype=roadmap&sensor=false&markers=color%3Ablue%7Clabel%3AA%7C29.941102%2C-90.077105&markers=color%3Ared%7Clabel%3AB%7C29.934705%2C-90.086203");
    });
  });


});


