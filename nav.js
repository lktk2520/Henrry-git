header =
  '<style>\
  .t {\
    -webkit-transition: 1s;\
    -moz-transition: 1s;\
    -ms-transition: 1s;\
    -o-transition: 1s;\
    transition: 1s;\
    opacity: 1!important;\
}\
.not{\
    -webkit-transition: 1s;\
    -moz-transition: 1s;\
    -ms-transition: 1s;\
    -o-transition: 1s;\
    transition: 1s;\
    opacity: 0!important;\
}\
  #top {\
    position: fixed;\
    right: 2%;\
    bottom: 8%;\
    z-index: 9999;\
    opacity: 0;\
    filter: drop-shadow(1px 1px 1px #000000);\
  }\
  #top:hover{\
    -webkit-filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));\
  }\
</style>\
  <nav id="navbar" class="navbar navbar-expand-lg cd-auto-hide-header">\
  <a class="navbar-brand" href="index.html">\
    <img src="img/logo.png" alt="繽紛科技" style="width: 180px;">\
  </a>\
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
  </button>\
  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
    <ul class="navbar-nav ml-auto">\
      <li class="nav-item">\
        <a class="nav-link" href="about.html"><i class="fas fa-building"></i>&nbsp;&nbsp;關於我們</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="what.html">\
        <i class="fas fa-question"></i> BIM 知識\
        </a>\
      </li>\
      <li class="nav-item">\
        <a  onclick="hide()" class="nav-link" href="connect.html"><i class="fas fa-fax"></i>&nbsp;&nbsp;聯絡我們</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="https://www.104.com.tw/company/1a2x6bjkr2" target="_blank"><i class="far fa-id-card"></i>&nbsp;&nbsp;徵才資訊</a>\
      </li>\
    </ul>\
  </div>\
</nav>\
<div id="top" onclick="on()" style="text-align:center;">\
<img src="img/向下箭頭.png" style="width:40px;height:auto;" alt="">\
   </div>\
   <script>\
   document.addEventListener("scroll", my);\
   function my() {\
       var show = document.documentElement.scrollTop;\
       if (show <= 400) {\
           document.getElementById("navbar").style.backgroundColor = "transparent";\
           document.getElementById("navbarSupportedContent").style.backgroundColor = "transparent";\
       } else {\
           document.getElementById("navbar").style.backgroundColor = "white";\
           document.getElementById("navbarSupportedContent").style.backgroundColor = "white";\
       }\
   }\
</script>\
<script>\
document.addEventListener("scroll", my1);\
function my1() {\
var show = document.documentElement.scrollTop;\
if (show <= 400) {\
          document.getElementById("top").classList.remove("t");\
          document.getElementById("top").classList.add("not");\
          document.getElementsByClassName("navbar").style.backgroundColor = "white";\
} else {\
          document.getElementById("top").classList.add("t");\
          document.getElementById("top").classList.remove("not");\
          document.getElementsByClassName("navbar").style.backgroundColor = "transparent";\
}\
}\
function on() {\
document.documentElement.scrollTop = 0;\
}\
</script>\
';
document.write(header);