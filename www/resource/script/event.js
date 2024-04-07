/*Scroll BoxShadow Event*/
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.style.boxShadow = "0 3px 3px -3px gray";
    }
    else {
        nav.style.boxShadow = "0 0 0 0 gray";
    }
})

/*Rotation Image Click Event*/
const rotationImage = document.querySelectorAll(".rotation li");
rotationImage.forEach((image) => {
    image.onclick = () => {
        image.style.animationPlayState = (image.style.animationPlayState == "paused") ? "running" : "paused";
    }
});