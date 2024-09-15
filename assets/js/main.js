var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.getElementsByClassName("arrow")[0];
    if (content.style.display === "flex") {
      content.style.display = "none";
      arrow.style.transform = 'rotate(0deg)';
    } else {
      content.style.display = "flex";
      arrow.style.transform = 'rotate(180deg)';
    }
  });
}