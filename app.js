
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const button = document.getElementById("button");
const h1 = document.getElementById("h1");



button.addEventListener("click", () => {

    document.body.style.backgroundColor = getRandomColor();
    button.style.color = getRandomColor();
    button.style.backgroundColor = getRandomColor();
    button.style.borderColor = getRandomColor();
    button.classList.toggle("button-border");
    h1.style.color = getRandomColor();
    h1.textContent = `Background color is: ${getRandomColor()}`;
});
