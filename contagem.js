//lembrar q meses em java comecam com 0 (0 = janeiro, 1 = fev...)
const dataNascimento = new Date(2007, 0, 24, 0, 40, 0); // Exemplo: 15 de Maio de 2000 às 14:30:00

function atualizarIdadeProgressiva() {
  const agora = new Date();
  
  let anos = agora.getFullYear() - dataNascimento.getFullYear();
  let meses = agora.getMonth() - dataNascimento.getMonth();
  let dias = agora.getDate() - dataNascimento.getDate();
  let horas = agora.getHours() - dataNascimento.getHours();
  let minutos = agora.getMinutes() - dataNascimento.getMinutes();
  let segundos = agora.getSeconds() - dataNascimento.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  
  const textoIdade = `${anos}y, ${meses} meses, ${dias} dias, ${horas}h, ${minutos}min e ${segundos}s`;
  
  
  document.getElementById('idade-tempo').innerText = textoIdade;
}

atualizarIdadeProgressiva();

setInterval(atualizarIdadeProgressiva, 1000);

// =============================================================

/*document.getElementById("caixa-central").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  },
);*/
