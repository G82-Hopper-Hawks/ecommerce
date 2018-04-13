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
