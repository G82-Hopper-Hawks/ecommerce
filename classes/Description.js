class Description{
    constructor (elementToRenderIn){
      this.elementToRenderIn = elementToRenderIn
    }
  
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
  
    render(item){
      const details = this.showDetails(item)
      empty(this.elementToRenderIn)
      this.elementToRenderIn.appendChild(details)
    }
  }