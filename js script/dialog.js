const dialogRef = document.getElementById("photoDialog")
const headerDiRef = document.getElementById("headerDialog")

function openDialog(photoPath) {
    dialogRef.showModal();
    let photoName = photoPath.slice(0, -4);
        headerDiRef.innerHTML = `<p>${photoName}</p>`;

}
function closeDialog() {
    dialogRef.close();
}
