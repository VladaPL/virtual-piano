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
  let key =
    event.target; /* key помечен как элемент на котором произошло событие */
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

window.addEventListener("keydown", function (e) { // 1) при совершении собятия нажатия кнопки,
  const audio = document.querySelector(`audio[data-keyNote="${e.code}"]`); // 2) если кнопка соответствует по data-keyNote тегу аудио, то
  if (!audio) return; // 4) если не соответствует -> stop the function
  audio.play(); // 3) проигрывается звук.
});


/* ADD BUTTON LETTER/NOTE */
