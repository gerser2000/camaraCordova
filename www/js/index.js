
document.addEventListener('deviceready', onDeviceReady, false);
let foto = document.getElementById('fotoMirador');

function onDeviceReady() {
    document.getElementById('bFoto').onclick = getPicture;
   

}

function getPicture(event) {
    navigator.camera.getPicture(success, error, {quality: 25, destinationType: Camera.DestinationType.DATA_URL});
}

function error() {
    alert('ERROOOOR');
}

function success(imageData) {
    alert("Imatge realitzada");
    foto.src = "data:image/jpeg;base64," + imageData;
}

