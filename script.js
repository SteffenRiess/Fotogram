let arrImgs = [
    "alaska-810433_1280.jpg",
    "anime-8788959_1280.jpg",
    "atmosphere-8752835_1280.png",
    "blue-tit-8521052_1280.jpg",
    "hurricane-92968_1280.jpg",
    "lake-2896379_1280.jpg",
    "moorente-8783210_1280.jpg",
    "sea-2563389_1280.jpg",
    "snow-bunting-6781122_1280.jpg",
    "snow-leopard-cubs-8039138_1280.jpg",
    "travel-8785493_1280.jpg",
    "winter-1675197_1280.jpg"
];

const dialogRef = document.getElementById("photoDialog")
const headerDiRef = document.getElementById("headerDialog")
const sectionDiRef = document.getElementById("sectionDialog")
const picNumberRef = document.getElementById("picNumber")
const buttonBackRef = document.getElementById("buttonBack")
const buttonNextRef = document.getElementById("buttonNext")
let dialogIsOpen = false;
let showIndexNumber = "";
let currentIndexNumber = 99;

function render() {
    let fotoRef = document.getElementById("photos");
    for (let index = 0; index < arrImgs.length; index++) {
        fotoRef.innerHTML += `  <img onclick="openDialog('${[index]}')" class="single_photo" src="./assets/img/${arrImgs[index]}" alt="${arrImgs[index]}">`;

    }
};


function stopBubbling(event) {
    event.stopPropagation();
}


function checkDialogOpen() {
    if (dialogIsOpen) {
        closeDialog();
    }
}

function openDialog(indexNumber) {
    dialogRef.showModal();

    let photoName = arrImgs[indexNumber].slice(0, -4);
    headerDiRef.innerHTML = `<p>${photoName}</p>`;

    sectionDiRef.innerHTML = `<img class="show_single_photo" src="./assets/img/${arrImgs[indexNumber]}" alt="${arrImgs[indexNumber]}">`;

    showIndexNumber = Number(indexNumber) + 1;
    picNumberRef.innerHTML = `<p>${showIndexNumber}/${arrImgs.length}</p>`

    defaultButtons();

    currentIndexNumber = indexNumber;
    dialogIsOpen = true;

}

function defaultButtons() {
    if (showIndexNumber <= 1) {
        buttonBackRef.classList.add('defaultBackButton');
    } else {
        buttonBackRef.classList.remove('defaultBackButton');
    }
    if (showIndexNumber >= arrImgs.length) {
        buttonNextRef.classList.add('defaultNextButton');
    } else {
        buttonNextRef.classList.remove('defaultNextButton');
    }
}

function clickBackButton() {
    if (currentIndexNumber > 0) {
        currentIndexNumber--;
        openDialog(currentIndexNumber);
    }
}

function clickNextButton() {
    if (currentIndexNumber < 11) {
        currentIndexNumber++;
        openDialog(currentIndexNumber);
    }
}



function closeDialog() {
    dialogRef.close();
    dialogIsOpen = false;

}
