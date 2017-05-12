function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName("li");
    
    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        li[i].style.display = (a.innerHTML.toUpperCase().indexOf(filter) > -1)?"":"none";
    }
}