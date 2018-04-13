// helper
function addToCartEventHandler(cart){
  return function addAndRender (item){
    cart.addItemToCart(item)
    cart.render()
  }
}


//

function showDetailsEventHandler(details) {
  return function (item) {
    details.render(item)
  }
}

const myCart = new CartList(
                    document.querySelector('.cart'),
                    document.querySelector('#total')
                  )

myCart.render()

const details = new Description(
  document.querySelector('.details')
)

const myProducts = new ProductList(
                        products, // from data.js
                        document.querySelector('.products'),
                        addToCartEventHandler(myCart),
                        showDetailsEventHandler(details)
                      )

myProducts.render()                      

// category button functions

const priceFilter = document.querySelector('.price-button')
priceFilter.addEventListener('click', event => {
  myProducts.items.sort(function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  })
  myProducts.render()
})

const alphabetFilter = document.querySelector('.alpha-button')
alphabetFilter.addEventListener('click', event => {
  console.log(myProducts.items)
  myProducts.items.sort(function compare(a,b ) {
    if(a.name.charCodeAt(0) < b.name.charCodeAt(0)) {
      return -1;
    }
    if(a.name.charCodeAt(0) > b.name.charCodeAt(0)) {
      return 1;
    }
    return 0
  })
  myProducts.render()
})

// start rendering page



const fantasyFilter = document.querySelector('.fantasy-button')
fantasyFilter.addEventListener('click', event => {
  const products = document.querySelector('.products')
  const pChildren = products.childNodes
  for(let i of pChildren){
    i.classList.remove('hide')
    if(i.getAttribute('data-theme') !== 'fantasy'){
      i.classList.add('hide')
    }
  }
})

const sciFiFilter = document.querySelector('.sci-fi-button')
sciFiFilter.addEventListener('click', event => {
  const products = document.querySelector('.products')
  const pChildren = products.childNodes
  for(let i of pChildren){
    i.classList.remove('hide')
    if(i.getAttribute('data-theme') !== 'science-fiction'){
      i.classList.add('hide')
    }
  }
})

const comicFilter = document.querySelector('.comics-button')
comicFilter.addEventListener('click', event => {
  const products = document.querySelector('.products')
  const pChildren = products.childNodes
  for(let i of pChildren){
    i.classList.remove('hide')
    if(i.getAttribute('data-theme') !== 'comic'){
      i.classList.add('hide')
    }
  }
})

const dAll = document.querySelector('.display-all-button')
dAll.addEventListener('click', event => {
  const products = document.querySelector('.products')
  const pChildren = products.childNodes
  for(let i of pChildren){
    i.classList.remove('hide')
  }
})






