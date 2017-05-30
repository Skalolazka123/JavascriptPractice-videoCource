function myFunction() {
    var x = document.getElementById('myDiv');
    x.style.display = (x.style.display === 'none') ? 'block' : 'none'
}

var close = document.getElementsByClassName("closeBtn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = 0;
        setTimeout(function(){
            div.style.display = 'none';
        }, 600)
    }
}