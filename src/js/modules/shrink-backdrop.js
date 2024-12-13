function shrinkBackdropBlock() {
  const backdrop = document.querySelector(".backdrop");

  setTimeout(() => {
    backdrop.classList.add("backdrop-shrink");
  }, 1000);
}

export default shrinkBackdropBlock;