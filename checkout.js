let check = document.querySelector('#check')
check.addEventListener('click', setBilling)

function setBilling() {

if(check.checked === true) {
    document.querySelector('.billFname').value = document.querySelector('.shipFname').value;
    document.querySelector('.billLname').value = document.querySelector('.shipLname').value;
    document.querySelector('.billCname').value = document.querySelector('.shipCname').value;
    document.querySelector('.billAdd1').value = document.querySelector('.shipAdd1').value;
    document.querySelector('.billAdd2').value = document.querySelector('.shipAdd2').value;
    document.querySelector('.billCity').value = document.querySelector('.shipCity').value;
    document.querySelector('.billState').value = document.querySelector('.shipState').value;
    document.querySelector('.billZip').value = document.querySelector('.shipZip').value;
  }
  else {
    document.querySelector('.billFname').value = '';
    document.querySelector('.billLname').value = '';
    document.querySelector('.billAdd1').value = '';
    document.querySelector('.billAdd2').value = '';
    document.querySelector('.billCity').value = '';
    document.querySelector('.billState').value = '';
    document.querySelector('.billZip').value = '';
  }
}




let unHide = document.querySelector('.hidden')
let completePurchase = document.querySelector('#purchase')

completePurchase.addEventListener('click', function() {
  let billFirst = document.querySelector('.billFname')
  let billLast = document.querySelector('.billLname')
  let billAdd1 = document.querySelector('.billAdd1')
  let billCity = document.querySelector('.billCity')
  let billState = document.querySelector('.billState')
  let billZip = document.querySelector('.billZip')
  let shipFirst = document.querySelector('.shipFname')
  let shipLast = document.querySelector('.shipLname')
  let shipAdd1 = document.querySelector('.shipAdd1')
  let shipCity = document.querySelector('.shipCity')
  let shipState = document.querySelector('.shipState')
  let shipZip = document.querySelector('.shipZip')
  let cCard = document.querySelector('.cCard')
  let ccV = document.querySelector('.ccV')



  let ship_bill_check = [billFirst, billLast, billAdd1, billCity, billState, billZip, shipFirst, shipLast, shipAdd1, shipCity, shipState, shipZip, ccV, cCard]
  fillCheck(ship_bill_check)
})

function fillCheck(arr) {
  let target = event.target

  arr.forEach(function(element) {
    console.log(element);
    if (element && !element.value) {
        unHide.classList.remove('hidden')
        element.classList.toggle('required')
      }
  })
}
