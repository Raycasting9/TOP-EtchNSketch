
const gridBox = document.querySelector('.grid');

for (let i = 0; i<16*16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridBox.appendChild(div);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    });
});

function changeSize() {
    while (newSize >= 100) {
        let newSize = prompt("Enter new grid size [max: 100]");
    }
    
    

}