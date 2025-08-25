import restaurantImage from "./restaurant-page.jpg";

export function homePageLoad(){

    const contentSection = document.querySelector("#content")

    const intro = document.createElement("div")
    intro.textContent = " ";
    intro.classList.add('intro-card')
    contentSection.appendChild(intro);

    const heading = document.createElement("h1")
    heading.textContent = "WELCOME TO MY RESTAURANT"
    heading.classList.add('intro-heading')
    intro.appendChild(heading);

    const introParagraph = document.createElement("p")
    introParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id exercitationem cumque doloribus rem repellendus reiciendis provident, aliquid quasi obcaecati hic possimus ad quidem sequi, voluptate illo? Eius nobis distinctio quidem dicta possimus et voluptas aliquam laborum in vel repellendus magni explicabo maiores, modi nemo repellat vero quos error quas repudiandae! Minima in unde odio. Neque earum nemo accusantium dignissimos, ut rem fugit ipsam, rerum animi dolore reprehenderit voluptate voluptatum voluptas iure maiores mollitia modi beatae? Voluptatibus at eius magnam modi aliquam possimus perferendis nisi nulla exercitationem, provident neque illum quod ea, dolore eum laborum hic. Deleniti at temporibus numquam."
    introParagraph.classList.add("intro-para")
    intro.append(introParagraph)
    

    // const img = document.createElement("img")
    // img.src = restaurantImage
    // img.classList.add('restaurant-img')
    // contentSection.appendChild(img);

}

export function homePageReload(){

    const homeButton = document.querySelector(".home-button")

    homeButton.addEventListener('click', function(){
        const contentSection = document.querySelector("#content")
        contentSection.textContent = "";
        homePageLoad();
    })
}