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


function render() {
    let fotoRef = document.getElementById("photos");
    for (let index = 0; index < arrImgs.length; index++) {
        fotoRef.innerHTML += `  <img onclick="openDialog('${[index]}')" class="single_photo" src="./assets/img/${arrImgs[index]}" alt="${arrImgs[index]}">`;

    }
};

const dialogRef = document.getElementById("photoDialog")
const headerDiRef = document.getElementById("headerDialog")
const sectionDiRef = document.getElementById("sectionDialog")


function openDialog(indexNbr) {
    dialogRef.showModal();
    let photoName = arrImgs[indexNbr].slice(0, -4);
        headerDiRef.innerHTML = `<p>${photoName}</p>`;
    sectionDiRef.innerHTML = `<img class="show_single_photo" src="./assets/img/${arrImgs[indexNbr]}" alt="${arrImgs[indexNbr]}">`;
    return photoName;
}

console.log(photoName)


function closeDialog() {
    
    dialogRef.close();
}

