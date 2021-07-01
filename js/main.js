// LINK PAGES
document.getElementById("pageOne").addEventListener("click", PageOne);
function PageOne(event) {
    event.preventDefault();
    location.replace("/index.html");
}
document.getElementById("pageTwo").addEventListener("click", PageTwo);
function PageTwo(event) {
    event.preventDefault();
    location.replace("/sample_two.html");
}


// SCROLL TOP FUNCTION
document.getElementById("Top").addEventListener("click", scrollTop);
function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
console.log(scrollTop);

// RESIZE WIDTH DIV HOME COMPONENT
$(window).resize(function () {
  $("#homeLeft").css({
    top: ($(window).height() - $("#homeLeft").outerHeight()) / 2,
  });
});

// To initially run the function:
$(window).resize();

const $scrollingDiv = $("#homeLeft");
$(window).scroll(function () {
  var winScrollTop = $(window).scrollTop() + 0,
    zeroSizeHeight = $(document).height() - $(window).height(),
    newSize = `${100 * (1 - winScrollTop / zeroSizeHeight)}%`;

  $scrollingDiv.css(
    {
      width: newSize,
    },
    500,
    "easeInOutSine"
  );
});

// VIDEO ANIMATION ON SCROLL
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
