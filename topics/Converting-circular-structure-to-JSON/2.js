let { UltimateWB, UltimateAJK } = require('./1.js')

let options = {
    WB: {},
    AJK: {}
};


let isAJK = true;

options.Ultimate = isAJK ? new UltimateWB(options) : new UltimateAJK(options);

module.exports = options;