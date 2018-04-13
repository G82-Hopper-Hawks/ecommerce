class ProductList{
  constructor(items, elementToRenderIn, cb, cbDetails){
    this.items = items
    this.elementToRenderIn = elementToRenderIn
    this.eventHandler = cb
    this.eventHandlerDetails = cbDetails
  }

  static renderCard(cardData, cb, cbDetails){
    const cardContainer = document.createElement('div')
    addClassesToElement(cardContainer, 'column', 'is-4-desktop',  'is-6-tablet')
    cardContainer.setAttribute('data-theme', cardData.theme)

    const card = document.createElement('div')
    addClassesToElement(card, 'card')
    cardContainer.appendChild(card)

    const cardImg = document.createElement('div')
    addClassesToElement(cardImg, 'card-image')
    card.appendChild(cardImg)

    const figure = document.createElement('figure')
    addClassesToElement(figure, 'image', 'is-4by3')
    cardImg.appendChild(figure)

    const img = document.createElement('img')
    img.src = cardData.image
    figure.appendChild(img)

    const overlayContainer = document.createElement('div')
    addClassesToElement(overlayContainer, 'card-overlay-container')
    overlayContainer.addEventListener('click', function(event){
      cb(cardData)
    })
    cardImg.appendChild(overlayContainer)

    const overlay = document.createElement('div')
    addClassesToElement(overlay, 'card-overlay')
    overlayContainer.appendChild(overlay)

    const span = document.createElement('span')
    overlay.appendChild(span)

    const i = document.createElement('i')
    addClassesToElement(i, 'fas', 'fa-shopping-cart')
    span.appendChild(i)

    const cardBody = document.createElement('div')
    addClassesToElement(cardBody, 'card-content')
    cardBody.addEventListener('click', event => cbDetails(cardData))
    card.appendChild(cardBody)

    const cardContent = document.createElement('div')
    addClassesToElement(cardContent, 'content')
    cardContent.innerHTML = `${cardData.name}<br><small>${cardData.price} Souls</small>`
    cardBody.appendChild(cardContent)

    return cardContainer
  }

  // impure method
  render(){
    const renderedProductsArray = this.items.map(product => ProductList.renderCard(product, this.eventHandler, this.eventHandlerDetails))

    // modifying the DOM
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, renderedProductsArray)
  }
}
