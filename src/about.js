export function aboutPageLoad(){

    const aboutButton = document.querySelector(".about-button")

    aboutButton.addEventListener('click', function(){

        const contentSection = document.querySelector("#content")
        contentSection.textContent = "";

        const aboutContent = document.createElement("div")
        aboutContent.textContent = "";
        aboutContent.classList.add('about')
        contentSection.appendChild(aboutContent);

        const contactDetail = document.createElement("h2")
        contactDetail.textContent = "CALL TO 12345678 FOR A BOOKING"
        contactDetail.classList.add('contact-details')
        aboutContent.appendChild(contactDetail)
    })
}