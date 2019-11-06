let { UltimateWB, UltimateAJK } = require('./1.js')

let options = {
    WB: {},
    AJK: {}
};


let isWB = true;

options.Ultimate = isWB ? new UltimateWB(options) : new UltimateAJK(options);

module.exports = options;