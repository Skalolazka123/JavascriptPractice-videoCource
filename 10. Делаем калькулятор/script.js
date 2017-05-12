function getResult(sign) {
    var num1, num2, result;

    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
    
    if (sign === "+") {
        result = num1 + num2;
    } else if (sign === "-") {
        result = num1 - num2;
    } else if (sign === "*") {
        result = num1 * num2;
    } else if (sign === "/") {
        result = num1 / num2;
    }
    
    document.getElementById("out").innerHTML = result;
};

