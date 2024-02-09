const perguntas = [
  {
    pergunta: "Qual clube brasileiro conquistou a Tríplice Coroa em 2003, vencendo o Campeonato Brasileiro, a Copa do Brasil e a Taça Libertadores?",
    respostas: [
      "São Paulo",
      "Palmeiras",
      "Cruzeiro",
    ],
    correta: 2
  },
  {
    pergunta: "Quem foi o artilheiro da Copa do Mundo de 2002, realizada no Japão e na Coreia do Sul?",
    respostas: [
      "Kaká",
      "Ronaldo",
      "Ronaldinho Gaúcho",
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador brasileiro ficou conhecido como 'Imperador' e teve grande destaque no futebol italiano nos anos 2000?",
    respostas: [
      "Kaká",
      "Ronaldinho Gaúcho",
      "Adriano",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano o Internacional conquistou a Copa Sul-Americana?",
    respostas: [
      "2007",
      "2008",
      "2009",
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o treinador da Seleção Brasileira na conquista da Copa América de 2007?",
    respostas: [
      "Dunga",
      "Felipão",
      "Tite",
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube brasileiro venceu a Copa do Brasil em 2013 e também conquistou a Recopa Sul-Americana e a Copa Libertadores no mesmo ano?",
    respostas: [
      "Flamengo",
      "Atlético Mineiro",
      "Cruzeiro",
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 2009, jogando pelo Flamengo?",
    respostas: [
      "Fred",
      "Adriano",
      "Ronaldo",
    ],
    correta: 1
  },
  {
    pergunta: "Qual clube brasileiro foi campeão da Copa Libertadores da América em 2012?",
    respostas: [
      "Corinthians",
      "Santos",
      "Fluminense",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o técnico do Brasil na Copa do Mundo de 2006, na Alemanha?",
    respostas: [
      "Tite",
      "Felipão",
      "Dunga",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano o Corinthians conquistou o Mundial de Clubes da FIFA?",
    respostas: [
      "2009",
      "2012",
      "2015",
    ],
    correta: 1
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quisItem = template.content.cloneNode(true)
    quisItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quisItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quisItem.querySelector('dl').appendChild(dt)
    }
  
    quisItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quisItem)
  }