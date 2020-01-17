var el = document.querySelector(".menu-toggle");

el.onclick = function() {
  var el1 = document.querySelector(".site-nav");

  el1.classList.toggle("site-nav--open");
  el.classList.toggle("open");
};
