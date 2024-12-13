export default function sectionsNavigation () 
{
  const sections = document.querySelectorAll(".section");
  console.log(sections);
  
  let isScrolling = false;

  const scrollToSection = (index) => {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => (isScrolling = false), 1000); // Задержка, чтобы избежать "дребезга"
  };

  let currentSection = 0;

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
  })
}