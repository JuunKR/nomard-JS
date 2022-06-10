const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const app = document.querySelector("#title");

const superEventHandler = {
    mouseenter: function handelMouseEnter() {
        app.innerText = "The mouse is here!";
        app.style.color = colors[0];
    },
    mouseleave: function handleMouseLeave() {
        app.innerText = "The mouse is gone!";
        app.style.color = colors[1];
    },
    click: function handleClick() {
        app.innerText = "That was a right click!";
        app.style.color = colors[2];
    }
};

app.addEventListener("mouseenter", superEventHandler.mouseenter);
app.addEventListener("mouseleave", superEventHandler.mouseleave);
app.addEventListener("click", superEventHandler.handleClick);

console.dir(window)