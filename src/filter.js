// An attempt to rewrite https://codepen.io/thepearson/pen/JjoKmav from jquery to vanilla js and playing with timeouts to achieve better transitions
import Flipping from "flipping/dist/flipping.web";

// init
const flipping = new Flipping();

// selectors
const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".item");

// listener for all the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const keys = event.target.dataset.key;
    //console.log(keys);
    // Init flipping
    flipping.read();
    // do stuff
    items.forEach((item) => {
      if (item.classList.contains(keys)) {
        setTimeout(function () {
          item.classList.remove("display-none");
          item.classList.remove("fade");
        }, 500);
      } else {
        item.classList.add("fade");
        setTimeout(function () {
          item.classList.add("display-none");
        }, 500);
      }
    });
    // Flip
    setTimeout(function () {
      flipping.flip();
    }, 500);
  });
});
