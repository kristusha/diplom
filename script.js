var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением класса "active",
    чтобы выделить кнопку, управляющую панелью */
    this.classList.toggle("active");

    /* Переключение между скрытием и отображением активной панели */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function myFunction() {
  var container = document.getElementById("container");
  container.classList.toggle("change");

  var menu = document.getElementById("menu");
  menu.classList.toggle ("show");

}