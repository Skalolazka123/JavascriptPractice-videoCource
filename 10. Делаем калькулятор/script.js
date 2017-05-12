function getResult(sign) {
    var num1, num2, result;

    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    switch (sign) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }


    document.getElementById("out").innerHTML = result;
};