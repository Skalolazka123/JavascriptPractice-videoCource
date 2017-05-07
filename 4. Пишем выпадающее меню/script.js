document.addEventListener("DOMContentLoaded", function(event) {
    closeMenu();
});

document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('sub-menu');
        closeMenu();
        s[0].style.display = 'block';
    }
};

document.onmouseover = function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'sub-menu') {
        closeMenu();
    }
};

function closeMenu() {
    var menu = document.getElementById('nav'),
        subm = document.getElementsByClassName('sub-menu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = "none";
    }
}