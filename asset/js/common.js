
console.log(window.location.pathname);

// details toggling with index
const detailsTogglers = document.querySelectorAll(".detailsToggler");
const details = document.querySelectorAll(".details");
const viewDetails = document.querySelectorAll(".viewDetails");
const HideDetails = document.querySelectorAll(".HideDetails");
detailsTogglers.forEach((eachDetailsToggler, index) => {
  eachDetailsToggler.addEventListener("click", (e) => {
    document
      .getElementById(`details${index}`)
      .classList.toggle("detailsToggleAnimation");

    detailsTogglers[index].classList.toggle("togglerAnimation");

    document.getElementById(`viewDetails${index}`).classList.toggle("d-none");

    document.getElementById(`HideDetails${index}`).classList.toggle("d-none");
  });
});

// details toggling without index

// for FAQs

const faqsDetailsTogglers = document.querySelectorAll(".faqsDetailsToggler");
const faqsDetails = document.querySelector(`.faqsDetails`);
const viewFaqsDetails = document.querySelectorAll(".viewFaqsDetails");
const HideFaqsDetails = document.querySelectorAll(".HideFaqsDetails");
faqsDetailsTogglers.forEach((eachFaqsDetailsToggler, index) => {
  eachFaqsDetailsToggler.addEventListener("click", (e) => {
    faqsDetailsTogglers[index].nextElementSibling.classList.toggle(
      "detailsToggleAnimation"
    );

    // faqsDetailsTogglers[index].classList.toggle('togglerAnimation')

    faqsDetailsTogglers[
      index
    ].lastElementChild.firstElementChild.classList.toggle("d-none");

    faqsDetailsTogglers[
      index
    ].lastElementChild.lastElementChild.classList.toggle("d-none");

    faqsDetailsTogglers[index].firstElementChild.classList.toggle(
      "faqstogglerAnimation"
    );
  });
});




// eachProductsCategory


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




// productDetails Page

let productQuantity=1
let initialTotalPrice= document.querySelector(`.totalPrice`).innerText

if(productQuantity==1){
        document.querySelector(`.QuantityDecrementBtn`).disabled=true
}

document.querySelector(`.productQuantity`).innerText=productQuantity
function changeProductQuantity(quantity){
    productQuantity+=quantity

    // if(productQuantity<=0){
    //     productQuantity=1
    // }

    if(productQuantity==1){
        document.querySelector(`.QuantityDecrementBtn`).disabled=true
    }else{
        document.querySelector(`.QuantityDecrementBtn`).disabled=false
    }

    document.querySelector(`.productQuantity`).innerText=productQuantity
    changedTotalPrice=Number(initialTotalPrice) * productQuantity
    document.querySelector(`.totalPrice`).innerText=changedTotalPrice

}


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





