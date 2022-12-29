import "./style.css";

const mtn = document.querySelector(".mtn");
const fst = document.querySelector(".fst");

window.addEventListener("wheel", (e) => {
  //e.deltaY is being added to change the scroll position
  document.documentElement.scrollLeft += e.deltaY / 6;
  console.log(document.documentElement.scrollLeft);
  if (document.documentElement.scrollLeft < 400) {
    document.documentElement.scrollLeft += e.deltaY / 2;
  }
});

window.addEventListener("scroll", function () {
  // Get the scroll position
  const scrollPos = document.documentElement.scrollLeft;

  // Update the position of the divs
  mtn.style.transform = "translateX(" + scrollPos / 4 + "px)";
  fst.style.transform = "translateX(" + scrollPos / 4 + "px)";
});
