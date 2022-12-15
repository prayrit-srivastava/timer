var t = 0;
var ti;
function starttimer(){
    ti = setInterval(increase,1000);
}
function increase(){
    var ne = t+1;
    var el1 = document.getElementById('sec');
    el1.innerHTML =(ne)%60;
    var el2 = document.getElementById('min');
    el2.innerHTML = Math.floor((ne)/60);
    var el3 = document.getElementById('hour');
    el3.innerHTML = Math.floor((ne)/360);
    t++;
}
function color() {  
    var var2 = document.body;  
    var2.style.backgroundColor = var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";      } 
var var1 = setInterval(color, 500);  

function stop(){  
        clearInterval(ti);  
}
function reset(){
    clearInterval(ti);  
    t =0;
    var el = document.getElementById('sec');
    el.innerHTML = 00;
    var el2 = document.getElementById('min');
    el2.innerHTML = 00;
    var el3 = document.getElementById('hour');
    el3.innerHTML = 00;
    
}