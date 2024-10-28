let Buttons = () => {
  let btnHandler = (elem) => {
    return document.querySelector(elem);
  };
  let btnHandlerAll = (elem) => {
    return document.querySelectorAll(elem);
  };
  const handleSwipeLeft = () => {
    btnHandler("#teacherData").classList.add("-translate-x-full");
  };
  const handleSwipeRight = () => {
    btnHandler("#teacherData").classList.add("translate-x-full");
  };
  btnHandler("#navrightbtn").addEventListener("click", handleSwipeLeft);
  btnHandler("#navleftbtn").addEventListener("click", handleSwipeRight);
  let touchStartX = 0;

  btnHandler("#navrightbtn").addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });
  btnHandler("#navleftbtn").addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });
  btnHandler("#navrightbtn").addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
      handleSwipeLeft();
    }
  });
  btnHandler("#navleftbtn").addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance < 50) {
      handleSwipeRight();
    }
  });
  btnHandlerAll("#navbackbtn").forEach((elem) => {
    elem.addEventListener("click", () => {
      btnHandler("#teacherData").classList.remove("-translate-x-full");
      btnHandler("#teacherData").classList.remove("translate-x-full");
    });
  });
  btnHandlerAll(".teacher-info-btn").forEach((e) => {
    e.addEventListener("click", () => {
      btnHandler(".teacher-info-card").classList.remove("translate-x-[600px]");
      btnHandler(".teacher-info-card").classList.remove("rotate-45");
    });
  });
  btnHandlerAll(".teacher-class-btn").forEach((e) => {
    e.addEventListener("click", () => {
      btnHandler(".teacher-class-card").classList.remove("translate-x-[600px]");
      btnHandler(".teacher-class-card").classList.remove("rotate-45");
    });
  });
  btnHandlerAll(".card-close-btn").forEach((e) => {
    e.addEventListener("click", () => {
      btnHandlerAll(".other-cards").forEach((e) => {
        if (
          !e.classList.contains("translate-x-[600px]") &&
          !e.classList.contains("rotate-45")
        ) {
          e.classList.add("rotate-45");
          e.classList.add("translate-x-[600px]");
        }
      });
    });
  });
};

export default Buttons;
