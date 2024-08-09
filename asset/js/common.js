
console.log(window.location.pathname);

// index page menu searchbar

let input, filter, ul, li, a, b, i;
input = document.querySelector(".search-bar");
div = document.querySelector(".searchBarProductsWrapper");
a = document.querySelectorAll(`.searchBarProduct`);
b=document.querySelectorAll(".searchBarProductTitle")
let searchResults=document.querySelector(`.searchResults`)
searchResults.innerText=`Totall ${a.length}`

function filterFunction() {  

filter = input.value.toUpperCase();
  for (i = 0; i < a.length; i++) {

    let txtValue = b[i].innerText;
    let lightType = b[i].title;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || lightType.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "flex";
      a[i].classList.add("matchedWithSearch")
      let totalSearchResult=document.querySelectorAll(".matchedWithSearch")
      searchResults.innerText=`Totall Results ${totalSearchResult.length}`

    } else {
      a[i].style.display = "none";
      a[i].classList.remove("matchedWithSearch")
    }
   

  }

}




// details toggling 
const detailsTogglers = document.querySelectorAll(".detailsToggler");
const details = document.querySelectorAll(".details");
const viewDetails = document.querySelectorAll(".viewDetails");
const HideDetails = document.querySelectorAll(".HideDetails");
detailsTogglers.forEach((eachDetailsToggler, index) => {
  eachDetailsToggler.addEventListener("click", (e) => {
    details[index].classList.toggle("detailsToggleAnimation");

    detailsTogglers[index].classList.toggle("togglerAnimation");

    viewDetails[index].classList.toggle("d-none");

    HideDetails[index].classList.toggle("d-none");

    detailsTogglers[index].firstElementChild.classList.toggle(
      "togglerAnimation"
    );
  });
});





// productsTypes pages


const rangeInputs=document.querySelectorAll(`.rangeInput`)
rangeInputs.forEach((eachRangeInput,index)=>{
  document.getElementById(`rangeOutput${index}`).innerText=`${eachRangeInput.min} - ${eachRangeInput.value}`
  eachRangeInput.addEventListener(`input`,(e)=>{
    let rangeValue=e.target.value
    let rangeMinimumValue=e.target.min

    document.getElementById(`rangeOutput${index}`).innerText=`${rangeMinimumValue} - ${rangeValue}`

  })
})

const MenusSubmitBtns= document.querySelectorAll(`.MenusSubmitBtn`)

MenusSubmitBtns.forEach((eachMenusSubmitBtn)=>{
  eachMenusSubmitBtn.addEventListener(`click`,(e)=>{
    e.preventDefault()
  })
})

















