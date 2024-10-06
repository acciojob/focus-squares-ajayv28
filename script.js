const squares = document.querySelectorAll(".square");

// Add event listeners for mouseover and mouseout
squares.forEach((element) => {
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);
});

function handleMouseOver(event) {
    squares.forEach((element) => {
        if (element !== event.target) {
            element.style.backgroundColor = "#6F4E37"; // Change color of other squares
        }
    });
}

function handleMouseOut() {
    squares.forEach((square) => {
        square.style.backgroundColor = "#E6E6FA"; // Reset color
    });
}
