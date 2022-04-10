let field = document.querySelector(".items"); //Lấy ul.field chứa các tag li
let cards = Array.from(field.children); // Convert list card (li)sang array (children : lấy tất cả các phần tử con)
let select = document.getElementById("select"); //Lấy ra các option
let ar = [];


for (let i of cards) {
    const last = i.lastElementChild; //Lấy ra phần tử cuối cùng "price" của mỗi card.
    const x = last.textContent.trim();
    const y = Number(x.substring(1)); //Loại kí tự $
    i.setAttribute('data-price', y); //Gán price cho data-price
    ar.push(i); //Gắn tag li vào array ar
}

select.onchange = sortingValue;

function sortingValue() {
    if (this.value === "Default") {
        while (field.firstChild) {
            field.removeChild(field.firstChild);
        }
        field.append(...ar);
    }
    if (this.value == "LowToHigh") {
        SortElem(field, cards, true);
    }
    if (this.value == "HighToLow") {
        SortElem(field, cards, false);
    }
}

function SortElem(field, cards, asc) {
    let dm, sortLi;
    dm = asc ? 1 : -1;
    sortLi = cards.sort((a, b) => {
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');
        return ax > bx ? dm : -dm;
    });
    while (field.firstChild) { field.removeChild(field.firstChild); }
    field.append(...sortLi);

}








