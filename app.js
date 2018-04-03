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
                        products, // from products.js
                        document.querySelector('.products'),
                        addToCartEventHandler(myCart),
                        showDetailsEventHandler(details)
                      )

// start rendering page
myProducts.render()
