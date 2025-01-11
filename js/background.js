const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImage = images[randomNextInt(0, images.length)];

const bodyStyle = document.body.style;
bodyStyle.backgroundImage = `url(img/background/${choosenImage})`;
bodyStyle.backgroundSize = "cover";
bodyStyle.backgroundPosition = "center";
bodyStyle.backgroundRepeat = "no-repeat";
