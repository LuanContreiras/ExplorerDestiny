const resposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#input")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  'Não.',
  'Provavelmente.',
  'Aconselho mudar de ideia.',
  'Sim.',
  'Tudo indica que sim.',
  'Talvez.',
  'Não sei.',
  'Melhor evitar.',
  'Melhor desistir.',
  'Aconselho continuar.',
  'Dará tudo certo.',
  'Pergunte novamente mais tarde.',
  'Sem dúvidas!',
  'Não conte com isso.'
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  resposta.innerHTML = pergunta + respostas[numeroAleatorio]

  setTimeout(function () {
    resposta.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
