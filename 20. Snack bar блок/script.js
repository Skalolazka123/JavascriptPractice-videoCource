function myFunction() {
    var x = document.getElementById("snackbar");
    x.classList.add("show");
    setTimeout(function(){
    x.classList.toggle("show");
    }, 3000);
}