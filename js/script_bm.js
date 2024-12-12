document.getElementById("menu").onclick = toggleMenu; //Переход по клику
function toggleMenu() { //Объявление функции
  let nav = document.getElementById("myTopnav"); //Получение переменной по id
  if (nav.className === "topnav") { //Проверка на неоткрытое меню
    nav.className += " responsive"; //Смена класса на открытое меню
  } else { //Если меню изначально открыто
    nav.className = "topnav"; //Смена класса на закрытое меню
  }
}