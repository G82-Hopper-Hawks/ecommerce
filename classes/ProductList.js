class ProductList{
  constructor(items, elementToRenderIn, cb, cbDetails){
    this.items = items
    this.elementToRenderIn = elementToRenderIn
    this.eventHandler = cb
    this.eventHandlerDetails = cbDetails
  }

  static renderCard(cardData, cb, cbDetails){
    const card = document.createElement('div')
    addClassesToElement(card, 'card', 'col-sm-12', 'col-md-6')

    const img = document.createElement('img')
    addClassesToElement(img, 'card-img-top')
    img.src = cardData.image
    img.addEventListener('click', event => cbDetails(cardData))
    card.appendChild(img)

    const cardBody = document.createElement('div')
    addClassesToElement(cardBody, 'card-body')
    card.appendChild(cardBody)

    const cardTitle = document.createElement('h5')
    addClassesToElement(cardTitle, 'card-title')
    cardTitle.innerHTML = `${cardData.name} - $${cardData.price.toFixed(2)}`
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement('p')
    addClassesToElement(cardText, 'card-text')
    cardText.innerHTML = `${cardData.description.slice(0,100)}...`
    cardBody.appendChild(cardText)

    const button = document.createElement('a')
    addClassesToElement(button, 'btn', 'btn-primary', )
    button.innerHTML = 'Add to Cart'
    button.addEventListener('click', function(event){
      cb(cardData)
    })
    cardBody.appendChild(button)

    return card
  }

  // impure method
  render(){
    const renderedProductsArray = this.items.map(product => ProductList.renderCard(product, this.eventHandler, this.eventHandlerDetails))

    // modifying the DOM
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, renderedProductsArray)
  }
}
