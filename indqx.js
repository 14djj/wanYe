
  setTimeout(
    function () {
        var body1 = document.getElementById("body1");
        var body2 = document.getElementById("body2");
        body1.style.display = "none";
        body2.style.display = "block";
        },1);
    j.onclick=function(){
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        var d = document.getElementById("d").value;
        var e = document.getElementById("e").value;
        var f = document.getElementById("f").value;
        var g = document.getElementById("g").value;
        var h = document.getElementById("h").value;
        var i = document.getElementById("i").value;
        var c1 = c/100;
        var d1 = d/100;
        var e1 = e/100;
        var g1 = g/100;
        var dja = new Number(a);
        var fyf = new Number(f);
        var dj = dja+100;
        var fy = dja+fyf+200;
        var djyfy = dj/fy;
        var i1 = i/100;
        var c2 = new Number(c1);
        var a1 = b*(1+c2);
        var a2 = a1*d1;
        var e2 = new Number(e1);
        var a3 = a2*(1+e2);
        var g2 = new Number(g1);
        var a4 = a3*(1-g2);
        var a5 = a4*djyfy;
        var a6 = a5*h;
        var i2 = new Number(i1);
        var a7 = a6*(1+i2);
        alert("你的暴击伤害为"+a7);
        }
