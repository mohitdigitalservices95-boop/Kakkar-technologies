// ===============================
// LOADER
// ===============================
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 450);
  }
});


// ===============================
// SCROLL PROGRESS
// ===============================
const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {
  if (!progress) return;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) {
    progress.style.width = "0%";
    return;
  }

  const percentage = (window.scrollY / scrollHeight) * 100;

  progress.style.width = Math.min(percentage, 100) + "%";
});


// ===============================
// MOBILE MENU
// ===============================
const menu = document.getElementById("menu");
const mobile = document.getElementById("mobileMenu");

if (menu && mobile) {

  menu.addEventListener("click", () => {
    mobile.classList.toggle("open");
  });

  mobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.remove("open");
    });
  });

}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


// ===============================
// CURSOR GLOW
// ===============================
const glow = document.getElementById("cursorGlow");

if (glow) {

  window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

  });

}


// ===============================
// CURRENT YEAR
// ===============================
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ===============================
// FOUNDER IMAGE CHECK
// ===============================
const founderImages = document.querySelectorAll(
  ".founder-seated-image, .founder-standing-image"
);

founderImages.forEach((image) => {

  image.addEventListener("load", () => {

    console.log(
      "Founder image loaded successfully:",
      image.getAttribute("src")
    );

    image.style.display = "block";
    image.style.visibility = "visible";
    image.style.opacity = "1";

  });


  image.addEventListener("error", () => {

    console.error(
      "Founder image NOT FOUND:",
      image.getAttribute("src")
    );

    console.error(
      "Make sure the PNG file is in the same folder as index.html."
    );

    image.style.display = "block";
    image.style.visibility = "visible";
    image.style.opacity = "1";

  });

});
