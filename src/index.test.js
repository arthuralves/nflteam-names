var expect = require('chai').expect;
var nflteams = require('./index');

describe('nflteams-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(nflteams.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Green Bay Packers`', function() {
      expect(nflteams.all).to.include('Green Bay Packers');
    });
  });

  describe('random', function() {
    it('should return a random item from the nflteams.all', function() {
      var randomItem = nflteams.random();
      expect(nflteams.all).to.include(randomItem);
    });
   
  });
});
