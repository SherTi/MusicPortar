document.addEventListener("DOMContentLoaded", () => {
  function showPassword() {
    const btn = document.querySelector(".mainElement");
    const input = document.querySelector("#password");
    btn.addEventListener("click", () => {
      btn.classList.toggle("password");

      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
      } else {
        input.setAttribute("type", "password");
      }
    });
  }
  showPassword();

  let lightTheme = document.querySelector(".theme-btn");
  const container = document.querySelector(".theme");
  container.addEventListener("click", () => {
    lightTheme.classList.toggle("dark");
  });
  let changeBck = document.querySelector(".rightMoveBtn");

  changeBck.addEventListener("click", () => {
    changeBck.classList.toggle("bckDark");

    let darkTheme = document.querySelector(".block");
    let bckChange = document.querySelector(".mainBlock");

    function change(changeBck) {
      bckChange.classList.toggle("darkBody");
    }
    change();
    let textLight = document.querySelector(".logo");
    function light(changeBck) {
      textLight.classList.toggle("logoLigt");
    }
    light();
    let titleTextLight = document.querySelector(".titleText");
    function titleLight(changeBck) {
      titleTextLight.classList.toggle("titleTextLight");
    }
    titleLight();
    let textSing = document.querySelector(".singIn");
    function darkTh(changeBck){
      textSing.classList.toggle("textDarkThem")
    }
     darkTh();
     let textPas = document.querySelector('.singInPas')
     function textPasDark (changeBck){
      textPas.classList.toggle("textPas")
     }
     textPasDark();
  });
});
