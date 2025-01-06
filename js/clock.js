const clock = document.querySelector("#clock");

clock.innerText = "00:00:00";

const tickTock = () => {
  const date = new Date();
  const hours = (date.getHours() + "").padStart(2, "0");
  const minutes = (date.getMinutes() + "").padStart(2, "0");
  const seconds = (date.getSeconds() + "").padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

tickTock();
setInterval(tickTock, 1000);
