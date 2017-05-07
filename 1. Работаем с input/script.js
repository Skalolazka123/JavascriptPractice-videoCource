function func1() {
    var checkbox;
    checkbox = document.getElementById('one');

    if (checkbox.checked) {
        alert("Выбран");
    } else {
        alert("Не выбран");
    }
}

function func2() {
    var radio = document.getElementsByName('r1');
    for(var i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            alert("Выбран " + i + " элемент.")
        }
    }
}