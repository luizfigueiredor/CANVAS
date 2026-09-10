const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 8; 
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Corpo
contexto.beginPath();
contexto.moveTo(250, 75);
contexto.lineTo(250, 175);

contexto.moveTo(250, 175);
contexto.lineTo(200, 225);
contexto.moveTo(250, 175);
contexto.lineTo(300, 225);

contexto.moveTo(300, 225);
contexto.lineTo(310, 325);
contexto.moveTo(200, 225);
contexto.lineTo(190, 325);

// Braço esquerdo
contexto.moveTo(250, 75);
contexto.lineTo(200, 125);
contexto.lineTo(300, 175);

// Braço direito
contexto.moveTo(250, 75);
contexto.lineTo(300, 125);
contexto.lineTo(350, 65);

contexto.stroke();

// Cabeça
contexto.beginPath();
contexto.arc(255, 45, 30, 0, Math.PI * 2);
contexto.stroke();  