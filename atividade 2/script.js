const canvas = document.querySelector("#canvas");
const foto = document.querySelector("#foto");
const video = document.querySelector("#camera");

navigator.mediaDevices.getUserMedia({ 
    video: true,
    audio: true
})
.then(function (stream) {
    video.srcObject = stream;
})
.catch(function (erro) {
    console.log("Não foi possível acessar a câmera.", erro);
});

navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ", posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);

        document.getElementById("latitude").textContent = posicao.coords.latitude;
        document.getElementById("longitude").textContent = posicao.coords.longitude;
        document.getElementById("precisao").textContent = posicao.coords.accuracy;

        document.getElementById("sucesso").style.display = "block";
        document.getElementById("erro").style.display = "none";

        // Desbloqueia o botão quando o GPS é obtido com sucesso
        document.getElementById("btn-registrar").disabled = false;
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
        document.getElementById("erro").style.display = "block";
        document.getElementById("sucesso").style.display = "none";

        // Garante que o botão continue bloqueado em caso de erro
        document.getElementById("btn-registrar").disabled = true;
    }
);

document.getElementById("btn-registrar").onclick = function() {
    // Desenha o quadro atual do vídeo no canvas
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0, 
        canvas.width,
        canvas.height
    );
    
    // Converte a imagem e exibe o elemento <img>
    foto.src = canvas.toDataURL("image/png");
    foto.style.display = "block";

    alert("Ponto registrado com sucesso!");
};