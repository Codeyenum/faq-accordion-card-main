let accordions= document.querySelectorAll(".accordion-header");

for(let accordion of accordions) {
    let accordionTitle = accordion.children[0];
    let accordionIcon = accordion.children[1];
    let accordionPanel = accordion.nextElementSibling;
    accordion.addEventListener("click", ()=>{
        accordionTitle.classList.toggle("selected");
        accordionIcon.classList.toggle("selected");
        accordionPanel.classList.toggle("selected");
    })
}