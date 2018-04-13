class Description{
    constructor (elementToRenderIn){
      this.elementToRenderIn = elementToRenderIn
    }
<<<<<<< HEAD

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

=======
  
   showDetails(cardData) {
     const detailsDiv = document.createElement('div')
      addClassesToElement(detailsDiv, 'row')
  
      const detailsLeft = document.createElement('div')
      addClassesToElement(detailsLeft, 'col-md-4')
  
      const detailsImg = document.createElement('img')
      detailsImg.src = cardData.image
      detailsLeft.appendChild(detailsImg)
  
      const detailsRight = document.createElement('div')
      addClassesToElement(detailsRight, 'col-md-8')
  
      const detailsName = document.createElement('h2')
      detailsName.innerHTML = cardData.name
      detailsRight.appendChild(detailsName)
  
      const detailsPrice = document.createElement('h4')
      detailsPrice.innerHTML = cardData.price
      detailsRight.appendChild(detailsPrice)
  
      const detailsDesc = document.createElement('p')
      detailsDesc.innerHTML = cardData.description
      detailsRight.appendChild(detailsDesc)
  
      detailsDiv.appendChild(detailsLeft)
      detailsDiv.appendChild(detailsRight)
  
      return detailsDiv
    }
  
>>>>>>> 6655b1227c5cbc9eedfce579c1c53868c0c2dabf
    render(item){
      const details = this.showDetails(item)
      empty(this.elementToRenderIn)
      this.elementToRenderIn.appendChild(details)
    }
<<<<<<< HEAD
  }
=======
  }
>>>>>>> 6655b1227c5cbc9eedfce579c1c53868c0c2dabf
