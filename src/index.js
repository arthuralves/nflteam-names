var uniqueRandomArray = require('unique-random-array');
var nflTeamNames = require('./nflteam-names.json');

module.exports = {
    all: nflTeamNames,
    random: uniqueRandomArray(nflTeamNames)
};