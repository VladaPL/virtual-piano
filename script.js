/*window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  console.log(e.code);
});*/

/* keys - массив с кнопками */
const keys =
  document.querySelectorAll(".piano-key"); /* получаем все кнопки пианино */
/* потом вешаем событие клика на кнопки */
keys.forEach((key) => {
  /* в массиве для каждого его элемента key при клике срабатывает ф-ия playNote*/
  key.addEventListener("click", playNote);
});

function playNote(e) {
  /* нужно узнать по какой клавише кликнули.
    Свойство target является ссылкой на объект, который был инициатором события*/
  let key = e.target;
  let sound = document.getElementById(key.dataset.note);
  key.classList.add("active"); /* добавляем класс эктив - красим клавишу в голубой цвет */
  sound.currentTime = 0;
  sound.play();
  sound.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
