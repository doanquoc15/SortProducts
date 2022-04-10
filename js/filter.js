
let field = document.querySelector(".items");
let cards = Array.from(field.children);

//Set giá trị cho attribute data-category
for (let card of cards) {
    // console.log(card)
    const name = card.querySelector('strong');
    const x = name.textContent;
    card.setAttribute("data-category", x);
}
//Get các options
// let indicator = document.querySelector('.indicator').children;
// console.log(indicator)
let elements = document.querySelectorAll('.indicator li');
// console.log(elements)
//function xử lí sự kiện filter
function filterProduct() {
    elements.forEach((element) => {
        element.onclick = () => {
            for (let i = 0;i < elements.length;i++) {
                console.log(1)
                elements[i].classList.remove('active');
            }
            element.classList.add('active');
            const displayItems = element.getAttribute('data-filter');
            cards.forEach((card, index) => {
                card.style.transform = "scale(0)";
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500);

                if (card.getAttribute('data-category') == displayItems || displayItems == "All") {
                    card.style.transform = "scale(1)";
                    setTimeout(() => {
                        card.style.display = 'block';
                    }, 500);
                }
            })
        }
    })
}

(function () {
    filterProduct();
})();