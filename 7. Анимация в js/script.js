function myMove() {
    var elem = document.getElementById('myAnimation'),
        pos = 0,
        id = setInterval(frame, 10);
    function frame() {
        if(pos == 350) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}