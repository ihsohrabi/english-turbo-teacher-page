import Swiper from "../../node_modules/swiper/swiper-bundle";
import Buttons from "./Buttons/Buttons";

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
Buttons();
