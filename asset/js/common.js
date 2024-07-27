const detailsTogglers= document.querySelectorAll('.detailsToggler')
const details= document.querySelectorAll(".details")
const viewDetails= document.querySelectorAll(".viewDetails")
const HideDetails= document.querySelectorAll(".HideDetails")
detailsTogglers.forEach((eachDetailsToggler,index)=>{
  eachDetailsToggler.addEventListener("click", (e) => {

      document.querySelector(`.details${index}`).classList.toggle("d-none")


      document.querySelector(`.viewDetails${index}`).classList.toggle("d-none")


      document.querySelector(`.HideDetails${index}`).classList.toggle("d-none")

  });
})



  document
  .querySelector(".brochuresToggler")
  .addEventListener("click", (e) => {
    document.querySelector(".brochures").classList.toggle("brochuresAnimation");
    document.querySelector(".directionArrow").classList.toggle("directionArrowAnimation");

    
  });

