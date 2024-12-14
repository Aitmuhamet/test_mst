export default function sectionsNavigation() {
  const sections = document.querySelectorAll(".section");
  console.log(sections);

  let isScrolling = false;

  const scrollToSection = (index) => {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => (isScrolling = false), 1000); // Задержка для избежания "дребезга"
  };

  let currentSection = 0;

  // Обработка скролла колесом мыши
  window.addEventListener("wheel", (event) => {
    if (isScrolling) return; // Избегаем множественного скролла

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      // Скроллим вниз
      currentSection++;
      scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
      // Скроллим вверх
      currentSection--;
      scrollToSection(currentSection);
    }
  });

  // Переменные для отслеживания начала и конца свайпа
  let touchStartY = 0;
  let touchEndY = 0;

  // Начало свайпа
  window.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY; // Координата Y начала касания
  });

  // Конец свайпа
  window.addEventListener("touchend", (event) => {
    touchEndY = event.changedTouches[0].clientY; // Координата Y конца касания

    if (isScrolling) return; // Избегаем множественного скролла

    if (touchStartY > touchEndY + 50 && currentSection < sections.length - 1) {
      // Свайп вверх (листаем вниз)
      currentSection++;
      scrollToSection(currentSection);
    } else if (touchStartY < touchEndY - 50 && currentSection > 0) {
      // Свайп вниз (листаем вверх)
      currentSection--;
      scrollToSection(currentSection);
    }
  });
}
