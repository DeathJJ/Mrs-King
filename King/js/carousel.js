 //轮播部分
 var carousel=document.querySelector('.carousel');
 var btns=document.querySelectorAll("button");
 var UlLis=document.querySelectorAll(".carousel ul li");
 var OlLis=document.querySelectorAll(".carousel ol li");

       var j = 0;
     for (var i in btns) {
         btns[i].onclick = function () {
             if (this.innerHTML == "&gt;") {
                 // 右键操作
                 if (j == 3) {
                     j = 0;
                 } else {
                     j++;
                 }
                 for (var i = 0; i < UlLis.length; i++) {
                     UlLis[i].className = "";
                     OlLis[i].className = "";
                 }
                 UlLis[j].className = "active";
                 OlLis[j].className = "active";
             } else {
                 // 左键操作
                 if (j == 0) {
                     j = 3;
                 } else {
                     j--;
                 }
                 for (var i = 0; i < UlLis.length; i++) {
                     UlLis[i].className = "";
                     OlLis[i].className = "";
                 }
                 UlLis[j].className = "active";
                 OlLis[j].className = "active";
             }
         }
     }

     for (var i in OlLis) {
             OlLis[i].onclick = function () {

                 for (var i = 0; i < UlLis.length; i++) {
                     UlLis[i].className = "";
                     OlLis[i].className = "";
                     OlLis[i].setAttribute('index', i);
                 }
                 j = this.getAttribute('index');
                 console.log(j);
                 UlLis[j].className = "active";
                 this.className = "active";



             }
         }
 


 var timer = setInterval(function () {
     if (j == 3) {
         j = 0;
     } else {
         j++;
     }
     for (var i = 0; i < UlLis.length; i++) {
         UlLis[i].className = "";
         OlLis[i].className = "";
     }
     UlLis[j].className = "active";
     OlLis[j].className = "active";

 }, 3000)

 carousel.onmouseover=function(){
     clearInterval(timer)
     timer=null;
 }
 carousel.onmouseout=function(){
     timer = setInterval(function () {
     if (j == 3) {
         j = 0;
     } else {
         j++;
     }
     for (var i = 0; i < UlLis.length; i++) {
         UlLis[i].className = "";
         OlLis[i].className = "";
     }
     UlLis[j].className = "active";
     OlLis[j].className = "active";

 }, 3000)
     
 }