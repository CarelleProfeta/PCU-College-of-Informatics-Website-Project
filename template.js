const navbar = document.getElementById("banner");
const sticky = navbar.offsetTop;

function myStickybanner() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
}