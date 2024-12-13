// Функция для добавления/удаления класса при скролле
function initScrollClassToggle() {
  const elements = document.querySelectorAll(".animation-element");

  // Создаем наблюдатель
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если слайд пересекает область видимости
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Добавляем класс активного
        } else {
          entry.target.classList.remove("active"); // Убираем класс
        }
      });
    },
    {
      threshold: 0.6, // Считаем элемент видимым, если 60% его площади пересекается
    }
  );

  // Наблюдаем за каждым слайдом
  elements.forEach((slide) => observer.observe(slide));
}

export default initScrollClassToggle;
