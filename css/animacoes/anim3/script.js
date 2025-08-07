var img = document.querySelector('#conteudo')
var checkbox = document.getElementById('brasil')

function anim() {
  if (checkbox.checked) {
    img.classList.add('clicado')
  } else {
    img.classList.remove('clicado')
  }
}

function aparece() {
  alert('funcionou')
}