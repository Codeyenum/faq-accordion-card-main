let accordions = document.querySelectorAll(".accordion-header");

// loop through the accordion elements to be clicked
for (let accordion of accordions) {
    let accordionTitle = accordion.children[0];
    let accordionIcon = accordion.children[1];
    let accordionPanel = accordion.nextElementSibling;

    // set click event listener on each accordion element
    accordion.addEventListener("click", (e) => {
        // checks if the clicked element is already active
        if (e.currentTarget.classList.contains("active")) {
            // removes active styling and active status            
            accordionTitle.classList.remove("selected");
            accordionIcon.classList.remove("selected");
            accordionPanel.style.maxHeight = null;
            accordion.classList.remove("active");
            return
        }
        // removes active styling and status for inactive elements
        for (let accordion of accordions) {
            let accordionTitle = accordion.children[0];
            let accordionPanel = accordion.nextElementSibling;
            let accordionIcon = accordion.children[1];

            accordionTitle.classList.remove("selected");
            accordionIcon.classList.remove("selected");
            accordionPanel.style.maxHeight = null;
            accordion.classList.remove("active");
        }
        // adds active styling and status for clicked element
        accordionTitle.classList.add("selected");
        accordionIcon.classList.add("selected");
        accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
        accordion.classList.add("active");
    })
}
