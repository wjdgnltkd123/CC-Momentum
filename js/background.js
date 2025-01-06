const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImage = images[randomNextInt(0, images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/background/${choosenImage}`;

document.body.appendChild(bgImage);
