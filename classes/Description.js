class Description{
    constructor (elementToRenderIn){
      this.elementToRenderIn = elementToRenderIn
    }

   showDetails(cardData) {
      const detailsDiv = document.createElement('div')

      const detailsLabel = document.createElement('p')
      addClassesToElement(detailsLabel, 'menu-label')
      detailsLabel.innerHTML = 'Details'
      detailsDiv.appendChild(detailsLabel)

      const detailsImg = document.createElement('img')
      addClassesToElement(detailsImg, 'product-img')
      detailsImg.src = cardData.image
      detailsDiv.appendChild(detailsImg)

      const detailsName = document.createElement('h1')
      addClassesToElement(detailsName, 'title', 'is-5', 'has-text-centered')
      detailsName.innerHTML = cardData.name
      detailsDiv.appendChild(detailsName)

      const detailsPrice = document.createElement('h1')
      addClassesToElement(detailsPrice, 'subtitle', 'product-price', 'is-6', 'has-text-centered')
      detailsPrice.innerHTML = `${cardData.price} Souls`
      detailsDiv.appendChild(detailsPrice)

      const detailsDesc = document.createElement('span')
      addClassesToElement(detailsDesc, 'product-desc')
      detailsDesc.innerHTML = cardData.description
      detailsDiv.appendChild(detailsDesc)

      return detailsDiv
    }

    render(item){
      const details = this.showDetails(item)
      empty(this.elementToRenderIn)
      this.elementToRenderIn.appendChild(details)
    }
  }
