// BROCHURES


const Toggler = document.querySelector(`.brochuresToggler`);

Toggler.addEventListener(`click`,(e)=>{

  document.querySelector(".brochures").classList.toggle("brochuresAnimation");
  document
    .querySelector(".directionArrow")
    .classList.toggle("directionArrowAnimation");
})



// BROCHURES panel

const brochuresPanelToogler = document.querySelectorAll(
  `.brochuresPanelToogler`
);

brochuresPanelToogler.forEach((eachBrochuresPanelToogler) => {
  eachBrochuresPanelToogler.addEventListener("click", (e) => {
    console.log("working");
    document
      .querySelector(`.brochuresPanel`)
      .classList.toggle("brochuresPanelToggleAnimation");
  });
});

const copyText = document.querySelector(".copyText");
document.querySelector(`.copyButton`).addEventListener("click", (e) => {
  navigator.clipboard.writeText(copyText.value);
});