function func1() {
    var rtl = document.getElementById('rtl').value,
        rtr = document.getElementById('rtr').value,
        rbr = document.getElementById('rbr').value,
        rbl = document.getElementById('rbl').value,
        ttl = document.getElementById('ttl'),
        ttr = document.getElementById('ttr'),
        tbr = document.getElementById('tbr'),
        tbl = document.getElementById('tbl'),
        block = document.getElementById('block');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
    
}
