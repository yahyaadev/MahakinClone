const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener("click", event => {
        accordionItemHeaders.classList.toggle("active");
        const accordionItembody = accordionItemHeaders.nextElementSibling;
        if(accordionItemHeaders.classList.contains("active")) {
            accordionItembody.style.maxHeight = accordionItembody.scrollHeight + "px";
        }
        else {
            accordionItembody.style.maxHeight = 0;
        }
    });
});
