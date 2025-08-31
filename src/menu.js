import {imageArray} from "./menuItems"


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

        const totalMenuItems = 5


        for(let i=0; i<totalMenuItems; i++){
            const card = new createMenuCard(`menuCard`)
            card.createCard();
            card.appendToDOM(content);
            card.addImage(imageArray[i].cardImage)
            card.addCardContent(imageArray[i].cardTitle, imageArray[i].cardPrice)
        }

        // const testCard = new createMenuCard("test-card");
        // testCard.createCard();
        // testCard.appendToDOM(content)
        // testCard.addImage(imageArray[0].cardImage)
        // testCard.addCardContent(imageArray[0].cardTitle, imageArray[0].cardPrice)

    })

}

class createMenuCard{
    constructor(cardName){
        this.cardName = cardName;

        this.card = document.createElement("div");
    }

    createCard(){
        this.card.classList.add(`${this.cardName}`)
        this.card.style.width = "400px";
        this.card.style.height = "400px";

        return this.card
    }

    addImage(imageURL){

        const image = document.createElement("img");
        image.src = imageURL;
        this.card.appendChild(image)
    }

    addCardContent(cardContentText, cardPriceText){

        const cardContent = document.createElement("h2")
        cardContent.textContent  = cardContentText;

        const cardPrice  = document.createElement("h3")
        cardPrice.textContent = cardPriceText

        this.card.appendChild(cardContent);
        this.card.appendChild(cardPrice)
    }
        

    appendToDOM(parent){

        parent.appendChild(this.card)
    }
    

    }
    

    

