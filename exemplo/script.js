const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Desenhando uma linha
contexto.beginPath();
contexto.moveTo(10, 0); //Começa
contexto.lineTo(50, 200);//Termina
contexto.lineTo(50, 10);
contexto.stroke();

//retangulo
contexto.fillRect(50, 50, 150, 100);
contexto.strokeRect(250, 50, 150, 100);

//circulo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();