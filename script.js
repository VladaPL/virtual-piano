/* SOUND - CLICK */

/* keys - массив с кнопками */
const keys =
  document.querySelectorAll(".piano-key"); /* получаем все кнопки пианино */
/* потом вешаем событие клика на кнопки */
keys.forEach((key) => {
  /* в массиве для каждого его элемента key при клике срабатывает ф-ия playNote*/
  key.addEventListener("click", playAudio);
});

function playAudio(event) {
  /* нужно узнать по какой клавише кликнули.
    Свойство target является ссылкой на объект, который был инициатором события*/
  let key = event.target;
  let sound = document.getElementById(key.dataset.note);
  key.classList.add(
    "active"
  ); /* добавляем класс эктив - красим клавишу в голубой цвет */
  sound.currentTime = 0;
  sound.play();
  sound.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

/* SOUND - KEYDOWN */

/*const pianoKeys = document.querySelectorAll(".piano-key");

pianoKeys.forEach((pianoKey) => {
  pianoKey.addEventListener('keydown', playNote);
});*/

/*function playNote(event) {
  let pianoKey = event.target;
  let note = document.getElementById(pianoKey.dataset.note);
  pianoKey.classList.add("active"); 
  note.currentTime = 0;
  note.play();
  note.addEventListener("ended", () => {
    pianoKey.classList.remove("active");
  });
}*/

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-keyNote="68"]`);
  if (!audio) return;
  audio.play();
});

/* ADD BUTTON LETTER/NOTE */
