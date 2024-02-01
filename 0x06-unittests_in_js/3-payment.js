const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping){
    results = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is : ${results}`);
}

module.exports = sendPaymentRequestToApi;