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