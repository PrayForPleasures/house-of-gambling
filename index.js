const scrollbox = document.querySelector(
    ".section__last-box_scroll-box_mini-box-one"
);
const scrollbar = document.querySelector(".scrollbar");
const scroller = document.querySelector(".scroller");

const heightOfScrollBar = scrollbar.scrollHeight;
const heightOfScroller = heightOfScrollBar / scrollbox.childElementCount;
scroller.setAttribute("style", `height: ${heightOfScroller}px`);

function addScrollBarMove() {
    console.log(heightOfScroller);
}
