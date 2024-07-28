const detailsTogglers = document.querySelectorAll(".detailsToggler");
const details = document.querySelectorAll(".details");
const viewDetails = document.querySelectorAll(".viewDetails");
const HideDetails = document.querySelectorAll(".HideDetails");
detailsTogglers.forEach((eachDetailsToggler, index) => {
  eachDetailsToggler.addEventListener("click", (e) => {
    document.querySelector(`.details${index}`).classList.toggle("d-none");

    document.querySelector(`.viewDetails${index}`).classList.toggle("d-none");

    document.querySelector(`.HideDetails${index}`).classList.toggle("d-none");
  });
});


// BROCHURES


document.querySelector(".brochuresToggler").addEventListener("click", (e) => {
  document.querySelector(".brochures").classList.toggle("brochuresAnimation");
  document
    .querySelector(".directionArrow")
    .classList.toggle("directionArrowAnimation");
});


// BROCHURES panel

const brochuresPanelToogler= document.querySelectorAll(`.brochuresPanelToogler`)

brochuresPanelToogler.forEach((eachBrochuresPanelToogler)=>{
  eachBrochuresPanelToogler.addEventListener('click',(e)=>{
    console.log('working')
    document.querySelector(`.brochuresPanel`).classList.toggle("brochuresPanelToggleAnimation")
  })
  
})


const copyText= document.querySelector('.copyText')
document.querySelector(`.copyButton`).addEventListener('click',(e)=>{
  navigator.clipboard.writeText(copyText.value)
})