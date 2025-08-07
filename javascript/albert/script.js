function idade() {
  const idadeValor = Number(document.getElementById('idade').value);

  console.log(idadeValor);

  if (idadeValor <= 0 || idadeValor > 127 || isNaN(idadeValor)) {
    alert("Insira uma idade válida.");
    document.getElementById('entrar').style.display = 'none';

  } else if (idadeValor < 14) {
    alert("Você ainda é muito jovem.");
    document.getElementById('entrar').style.display = 'none';

  } else if (idadeValor >= 14 && idadeValor <= 85) {
    alert("Você pode entrar!");
    document.getElementById('entrar').style.display = 'flex';

  } else if (idadeValor >= 86 && idadeValor <= 127) {
    alert("Este produto talvez não se adeque ao seu tipo de conteúdo.");
    document.getElementById('entrar').style.display = 'flex';
  }
}
