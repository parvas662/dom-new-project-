const clock = document.querySelector('#clock');

setInterval(function () {
  const time = new Date().toLocaleTimeString();
  clock.innerHTML = `${time}`;
}, 1000);
