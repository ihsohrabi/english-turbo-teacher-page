let Buttons = () => {
  let tagHandler = (elem) => {
    return document.querySelector(elem);
  };
  let tagHandlerAll = (elem) => {
    return document.querySelectorAll(elem);
  };
  let rotateHide = () => {
    tagHandlerAll(".other-cards").forEach((elem) => {
      if (
        elem.classList.contains("translate-x-[600px]") &&
        elem.classList.contains("rotate-45")
      ) {
        tagHandler("#rotate-btn").style.display = "none";
      }
    });
  };
  const handleSwipeLeft = () => {
    tagHandler("#teacherData").classList.add("-translate-x-full");
  };
  const handleSwipeRight = () => {
    tagHandler("#teacherData").classList.add("translate-x-full");
  };
  tagHandler("#navrightbtn").addEventListener("click", handleSwipeLeft);
  tagHandler("#navleftbtn").addEventListener("click", handleSwipeRight);
  let touchStartX = 0;

  tagHandler("#navrightbtn").addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });
  tagHandler("#navleftbtn").addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });
  tagHandler("#navrightbtn").addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
      handleSwipeLeft();
    }
  });
  tagHandler("#navleftbtn").addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance < 50) {
      handleSwipeRight();
    }
  });
  tagHandlerAll("#navbackbtn").forEach((elem) => {
    elem.addEventListener("click", () => {
      tagHandler("#teacherData").classList.remove("-translate-x-full");
      tagHandler("#teacherData").classList.remove("translate-x-full");
    });
  });
  tagHandlerAll(".teacher-info-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-info-card").classList.remove("translate-x-[600px]");
      tagHandler(".teacher-info-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".teacher-class-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-class-card").classList.remove("translate-x-[600px]");
      tagHandler(".teacher-class-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".teacher-contact-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-contact-card").classList.remove(
        "translate-x-[600px]"
      );
      tagHandler(".teacher-contact-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".teacher-rules-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-rules-card").classList.remove("translate-x-[600px]");
      tagHandler(".teacher-rules-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".teacher-registration-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-registration-card").classList.remove(
        "translate-x-[600px]"
      );
      tagHandler(".teacher-registration-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".teacher-qc-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandler(".teacher-qc-card").classList.remove("translate-x-[600px]");
      tagHandler(".teacher-qc-card").classList.remove("rotate-45");
      rotateHide();
    });
  });
  tagHandlerAll(".card-close-btn").forEach((e) => {
    e.addEventListener("click", () => {
      tagHandlerAll(".other-cards").forEach((e) => {
        if (
          !e.classList.contains("translate-x-[600px]") &&
          !e.classList.contains("rotate-45")
        ) {
          e.classList.add("rotate-45");
          e.classList.add("translate-x-[600px]");
          tagHandler("#rotate-btn").style.display = "block";
        }
      });
    });
  });
  let rotationDegrees = 0;
  tagHandler("#rotate-btn").addEventListener("click", () => {
    rotationDegrees += 180;
    tagHandler("#main-card").style.transform = `rotateY(${rotationDegrees}deg)`;
    tagHandler("#back-card").style.transform = `rotateY(${
      rotationDegrees + 180
    }deg)`;
  });
};

export default Buttons;
