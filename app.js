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

// start rendering page


// category button functions
myProducts.render()

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

