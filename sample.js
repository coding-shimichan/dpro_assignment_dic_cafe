function count() {
  for (let number = "1"; number < 100; number = number + 1) {
    if (number === 5) {
      return;
    }
    console.log(number);
  }
}

function clickAlert() {
  alert("Button has been clicked!");
}

function onMouseOver() {
  alert("Mouse is hovering on the button!");
}
