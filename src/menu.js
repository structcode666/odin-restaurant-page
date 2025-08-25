export function menuPageLoad(){

    const menuButton = document.querySelector(".menu-button")

    menuButton.addEventListener('click', function(){

        const contentSection = document.querySelector("#content")
        contentSection.textContent = "";

        const content = document.createElement("div")
        content.textContent = " ";
        content.classList.add('menu')
        content.style.width = "100%"
        content.style.height = "100%"
        contentSection.appendChild(content);

        const menuCard = document.createElement("div");
        menuCard.classList.add('menu-card-1')
        menuCard.style.width = "300px"
        menuCard.style.height = "500px"
        menuCard.style.border = '2px solid red';
        content.appendChild(menuCard)

        const menuCardTwo = document.createElement("div");
        menuCardTwo.classList.add('menu-card-1')
        menuCardTwo.style.width = "300px"
        menuCardTwo.style.height = "300px"
        menuCardTwo.style.border = '2px solid red';
        content.appendChild(menuCardTwo)
    })

}

class createMenuCard{
    constructor(cardName, cardWidth, cardHeight){
        this.cardName = cardName;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight
    }

    createCard(){
        return menuCard = document.createElement("div")
    }

    setCardClass(){
        return menucard.classList.add(`${this.cardName}`)
    }

    setCardStyles(){
        menuCard.style.width = ""
    }
    

    

}