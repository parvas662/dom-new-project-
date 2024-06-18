const body = document.body;
const buttons = document.querySelectorAll('.button');
buttons.forEach(function (btn) {
  console.log(btn.id);
  btn.addEventListener('click', function () {
    body.style.backgroundColor = btn.id;
  });
});
