function createStar() {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = Math.random() > 0.5 ? "⭐" : "💖";

    star.style.left = Math.random() * 100 + "vw";

    star.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 6000);

}

setInterval(createStar, 300);
