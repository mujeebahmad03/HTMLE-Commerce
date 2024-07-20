// copy menu for mobile
function copyMenu() {
  // copy inside .dpt-cat to .department
  const dptCategory = document.querySelector(".dpt-cat");
  const deptPlace = document.querySelector(".departments");
  deptPlace.innerHTML = dptCategory.innerHTML;

  // copy nav content to nav
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // copy .header-top .wrapper to .the-top-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .the-top-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");

menuButton.addEventListener("click", () =>
  addClass.classList.toggle("show-menu")
);
closeButton.addEventListener("click", () =>
  addClass.classList.remove("show-menu")
);
// show submenu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// slider
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");

dptButton.addEventListener("click", () =>
  dptClass.classList.toggle("show-dpt")
);

// product image slider
const productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

const productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

// Stock products bar width percentage

const stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percentage = (sold * 100) / stock;

  stocks[x].querySelector(".available").style.width = percentage + "%";
}

const fToShow = ".filter";
const fPopup = document.querySelector(fToShow);
const fTrigger = document.querySelector(".filter-trigger");

fTrigger.addEventListener("click", () => {
  setTimeout(() => {
    if (!fPopup.classList.contains("show")) {
      fPopup.classList.add("show");
    }
  }, 250);
});

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(fToShow);
  if (!isClosest && fPopup.classList.contains("show")) {
    fPopup.classList.remove("show");
  }
});

// show modal on load
window.onload = function () {
  document.querySelector(".site").classList.toggle("show-modal");
};

document.querySelector(".modal-close").addEventListener("click", function () {
  document.querySelector("site").classList.remove("show-modal");
});
