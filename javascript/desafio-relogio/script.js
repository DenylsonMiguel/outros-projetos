
const relogio = setInterval(function time() {
  agora = new Date();
  hora = agora.getHours();
  minutos = agora.getMinutes();
  segundos = agora.getSeconds();
  document.getElementById('horario').textContent = (`${hora}:${minutos}:${segundos}`)
})


//DarkMode
function darkMode() {
  var darkMode = document.getElementById('darkMode')
  if (darkMode.checked) {
    document.body.style.backgroundImage = 'linear-gradient(150deg, #515151, #3a3a3a)';
    document.getElementById('container').style.backgroundColor = ('rgb(37,37,37)');
    document.getElementById('container').style.color = ('#fff');
    document.getElementById('container').style.transition = ('0.5s');
    document.body.style.transitionDelay = ('0.5s');
  } else {
    document.body.style.backgroundImage = 'linear-gradient(150deg, rgb(219,219,219), rgb(204,204,204))';
    document.getElementById('container').style.backgroundColor = ('rgb(255, 255, 255)');
    document.getElementById('container').style.color = ('#000');
    document.getElementById('container').style.transition = ('0.5s');
    document.body.style.transitionDelay = ('0.5s');
  }
}
//Fim DarkMode






