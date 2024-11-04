import Swiper from "../../node_modules/swiper/swiper-bundle";
import Buttons from "./Buttons/Buttons";
import QcForm from "./QcForm/QcForm";

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
Buttons();
QcForm();
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("#loading-left").classList.remove("left-0");
    document.querySelector("#loading-left").classList.add("-left-full");
    document.querySelector("#loading-right").classList.remove("right-0");
    document.querySelector("#loading-right").classList.add("-right-full");
  }, 750);
  setTimeout(() => {
    document.querySelector("#loading-logo").classList.add("opacity-0");
  }, 1000);
  setTimeout(() => {
    document.querySelector("#loading-main").classList.add("opacity-0");
    document.querySelector("#main-card").classList.toggle("-rotate-y-180");
    document.querySelector("#back-card").classList.toggle("-rotate-y-180");
    document.querySelector("#bg-blur").classList.add("backdrop-blur-sm");
  }, 2000);
  setTimeout(() => {
    document.querySelector("#loading-main").classList.add("hidden");
  }, 2500);
});
