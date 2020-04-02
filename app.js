window.addEventListener("load", () => {
  let percent = 20;

  setInterval(() => {
    percent += 0.1;
    increaseBar(percent);
  }, 5);

  function increaseBar(percent) {
    /*
      // Bonus this is to get the css var from root
      progressBarValue = getComputedStyle(
      document.documentElement
      ).getPropertyValue("--progress-bar-value"); 
  */

    // This is actualy what we need !
    document.documentElement.style.setProperty("--progress-bar-value", percent);
  }
});
