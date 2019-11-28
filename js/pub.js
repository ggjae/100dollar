
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
$(document).ready(function()
{
    var speed = 500; // 스크롤속도
    $(".gotop").css("cursor", "pointer").click(function()
    {
        $('body, html').animate({scrollTop:0}, speed);
    });
});
