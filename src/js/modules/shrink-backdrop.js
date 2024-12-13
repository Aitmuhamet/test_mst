function shrinkBackdropBlock() {
  const backdrop = document.querySelector(".backdrop");

  setTimeout(() => {
    backdrop.classList.add("backdrop-60");
  }, 1000);
}

export default shrinkBackdropBlock;