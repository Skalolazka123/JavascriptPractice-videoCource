function func1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert("Выбрана опция " + options[sel].text);
}

function func2() {
    var r1 = document.getElementById('range1'), p = document.getElementById('one');
    p.innerHTML = r1.value;
}

function func3() {
    var r2 = document.getElementById('range2'), i1 = document.getElementById('i1');
    i1.value = r2.value;
}

function func4() {
    var r2 = document.getElementById('range2'), div = document.getElementById('test');
    div.style.width = r2.value + 'px';
}