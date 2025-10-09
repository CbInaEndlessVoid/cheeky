const button = document.getElementById("button");
const randomNum = document.getElementById("randomnum");
const originalWidth = parseFloat(getComputedStyle(button).width);
const originalHeight = parseFloat(getComputedStyle(button).height);
const halo = document.getElementById("halo")


let count = parseInt(localStorage.getItem("clickCount")) || 0;
randomNum.textContent = count;

document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";


const dogSong = new Audio("https://files.catbox.moe/75e8e5.mp3");
dogSong.loop = true;
dogSong.playbackRate = 1;
window.onload = function() {
    dogSong.play().catch(() => {
        document.body.addEventListener("click", () => dogSong.play(), { once: true });
    });
};

button.onclick = function() {
    const bark = new Audio("https://files.catbox.moe/183ti5.wav");
    bark.play();

    count += 1;
    randomNum.textContent = count;
    localStorage.setItem("clickCount", count);

    const size = Math.random() * 50 + 30;

    const spawnX = Math.random() * (window.innerWidth - size);
    const spawnY = Math.random() * (window.innerHeight - size);
    const cheeky = document.createElement("img");
    cheeky.src = "https://files.catbox.moe/5b33qo.bmp";
    cheeky.classList.add("spawned");
    cheeky.style.position = "absolute";
    cheeky.style.width = `${size}px`;
    cheeky.style.height = `${size}px`;
    cheeky.style.left = `${spawnX}px`;
    cheeky.style.top = `${spawnY}px`;
    cheeky.style.opacity = "1";
    cheeky.style.transform = "rotate(0deg)";

    let random01 = Math.round(Math.random());
    if (random01==0){
        cheeky.src="https://files.catbox.moe/sjyqih.jpg"
    }
    document.body.appendChild(cheeky);

    
    let velocityY = -15;
    const gravity = 0.5; 

    const angularVelocity = (Math.random() - 0.5) * 20;
    let currentAngle = 0;

    function animateCheeky() {
        
        const currentY = parseFloat(cheeky.style.top);
        velocityY += gravity;
        cheeky.style.top = currentY + velocityY + "px";

        currentAngle += angularVelocity;
        cheeky.style.transform = `rotate(${currentAngle}deg)`;

        const opacity = parseFloat(cheeky.style.opacity);
        if (opacity > 0) {
            cheeky.style.opacity = Math.max(opacity - 0.01, 0);
        }

        if (opacity <= 0 || parseFloat(cheeky.style.top) > window.innerHeight) {
            cheeky.remove();
            return;
        }

        requestAnimationFrame(animateCheeky);
    }

    requestAnimationFrame(animateCheeky);

    const currentWidth = parseFloat(getComputedStyle(button).width);
    const currentHeight = parseFloat(getComputedStyle(button).height);
    button.style.width = currentWidth + 20 + "px";
    button.style.height = currentHeight + 20 + "px";

    setTimeout(() => {
        button.style.width = originalWidth + "px";
        button.style.height = originalHeight + "px";
    }, 200);
};
button.draggable = false;

setTimeout(()=> {halo.remove(); button.src ="https://files.catbox.moe/5b33qo.bmp"},50)
let angle = 0;
button.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;


