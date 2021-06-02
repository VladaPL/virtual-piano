/*window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  console.log(e.code);
});*/


const keys = document.querySelectorAll('.piano-key'); /* получаем все кнопки пианино */ 
/* потом вешаем событие клика на кнопки */
    keys.forEach(piano-key => {
    piano-key.addEventListener('click', playNote); 
});

function playNote(e){
    /* нужно узнать по какой клавише кликнули.
    Свойство target является ссылкой на объект, который был инициатором события*/ 
     let key = e.target;
     key.classList.add('active');
}