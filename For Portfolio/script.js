// Получаем элементы
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Добавляем обработчик клика
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open'); // Переключает класс "open"
});
