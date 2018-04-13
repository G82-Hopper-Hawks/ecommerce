class ProductList{
  constructor(items, elementToRenderIn, cb, cbDetails){
    this.items = items
    this.elementToRenderIn = elementToRenderIn
    this.eventHandler = cb
    this.eventHandlerDetails = cbDetails
  }

  static renderCard(cardData, cb, cbDetails){
<<<<<<< HEAD
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
=======
    const card = document.createElement('div')
    addClassesToElement(card, 'card')
    card.setAttribute('data-theme', cardData.theme)

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
    cardTitle.innerHTML = `${cardData.name} - ${cardData.price} Souls`
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
>>>>>>> 6655b1227c5cbc9eedfce579c1c53868c0c2dabf
  }

  // impure method
  render(){
    const renderedProductsArray = this.items.map(product => ProductList.renderCard(product, this.eventHandler, this.eventHandlerDetails))

    // modifying the DOM
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, renderedProductsArray)
  }
}
