export function aboutPageLoad(){

    const aboutButton = document.querySelector(".about-button")

    aboutButton.addEventListener('click', function(){

        const contentSection = document.querySelector("#content")
        contentSection.textContent = "";

        const content = document.createElement("div")
        content.textContent = "this is where my about items go";
        content.classList.add('about')
        contentSection.appendChild(content);
    })
}