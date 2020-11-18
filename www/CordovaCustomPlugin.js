var exec = require('cordova/exec');

exports.sum = function (num1, num2, success, error) {
    exec(success, error, 'CordovaCustomPlugin', 'sum', [num1, num2]);
};
