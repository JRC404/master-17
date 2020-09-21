// classes
const heading = document.getElementsByClassName("heading"); // collection
// getElements
// id
const paragraph = document.getElementById("paragraph"); // singular
const test = document.getElementsByClassName("test");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
// getElement

// tagName
const listItem = document.getElementsByTagName("li"); // collection
let colors = ["red", "yellow", "orange", "#FFAABB", "magenta", "green"];

for (let i = 0; i < listItem.length; i++) {
    listItem[i].style.color = colors[i];
}


submit.addEventListener("click", () => {
    paragraph.style.color = input.value;
})

paragraph.addEventListener("click", () => {
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = "green"; 
    }
    paragraph.style.color = "red";
})