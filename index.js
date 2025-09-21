const btn = document.getElementById("btn");

// Sound
const sound = new Audio("./fart-83471.mp3");

const handleClick = () => {
	sound.play();
	btn.innerHTML = "Got you!";
};

btn.addEventListener("click", () => handleClick());
