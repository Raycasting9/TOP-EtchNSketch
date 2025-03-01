//Variables
const gridBox = document.querySelector('.grid');
const defaultgrid = 16;
const gridItems = document.querySelectorAll('.grid-item');

//Process
createGrid(defaultgrid);

//Hover Event

gridBox.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-item")) {
        event.target.style.backgroundColor = "black";
    }
});


//Changing size for each grid [Fuction]
function newSize() {

    let newSize = prompt("Enter new grid size [max: 100]");

    if (newSize >= 100){
        alert("More than 100");
        return;
    }
    
    gridBox.innerHTML="";

    createGrid(newSize);
    changeFlex(newSize);

}

//Creating grids [Function]
function createGrid(value) {

    for (let i = 0; i<value*value; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        gridBox.appendChild(div);
    }

    changeFlex(value);
}

//Change property [Fucntion]
function changeFlex(value){

    let newFlex = `1 1 calc(100% / ${value}`;
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.flex = newFlex;
    });
}