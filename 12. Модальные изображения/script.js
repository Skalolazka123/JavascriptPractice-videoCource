var modal = document.getElementById("myModal"),
    img = document.getElementById("myImg"),
    modalImg = document.getElementById("img01"),
    caprionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    caprionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}