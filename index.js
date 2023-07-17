let accordions = document.querySelectorAll(".accordion-header");

for (let accordion of accordions) {
    let accordionTitle = accordion.children[0];
    let accordionIcon = accordion.children[1];
    let accordionPanel = accordion.nextElementSibling;    

    accordion.addEventListener("click", () => { 
        let panelHeight = accordionPanel.style.maxHeight; 
        let panelHeightNum = panelHeight.slice(0, panelHeight.length - 2);

        accordionTitle.classList.toggle("selected");
        accordionIcon.classList.toggle("selected");        
        
        if(panelHeightNum){  
            accordionPanel.style.maxHeight = null;  
            return
        }
        accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;        
    })
}
