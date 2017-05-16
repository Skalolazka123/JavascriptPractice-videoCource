var converterValue = {};
converterValue['RUB'] = 60;
converterValue['UAH'] = 28;
converterValue['BYN'] = 1.8;

function moneyConverter(value) {
    output = document.getElementsByClassName("output");
    for (var i = 0; i < output.length; i++) {
        for (var currency in converterValue) {
            if (currency === output[i].id.toUpperCase()) {
                output[i].innerHTML = value * converterValue[currency];
            }
        }
    }

}