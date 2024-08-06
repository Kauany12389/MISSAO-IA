const caixaPrincipal = document.querySelector('.caixa- principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');    
const caixaResultado = document.querySelector('.caixa-resultado');  
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
    enunciado: "Em que lugar teve a origem a palavra música",
    alternativas: [
    {
    texto: "China",
    afirmação:""
        },
       { 

        texto: "Gécia",
        afirmação:""
       },

      {
        texto: "Brasil",
        afirmação:""
      },

      {
        texto: "Índia",
        afirmação:""
    }]
    },

      {
          enunciado: "Quais são os elementos que compõe a daça?",
          alternativas: [
    {

      texto: "Contrapeso",
      afirmação:""
    },

     {
      texto: "Espaço",
     afirmação:""
    },

   {

    texto:"Ordem ",
    afirmação:""
    }, 
  {
    texto:"transfêrencia",
    afirmação:""
  }]

    },
  
    {
    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: [
  {

    texto: "Arte literárias",
    afirmação:""
    },

    {
      texto: "Artes cênicas",
    afirmação:""
    },

    {
      texto: "Artes Visuais",
    afirmação:""
    },

    {
      texto:"Artes musicasis",
    afirmação:""
    }]
  },
];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraAlternativas() {
     if(atual >= perguntas.length) {
      mostraresultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
  }

   function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement ("button");
      botaoAlternativas.textContent = alternativas.texto;
      botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativas))
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }

  function mostraresultado(){
  caixaPerguntas.textContent = "O cultural abrange vária áreas e dentre ellas temos a art, a música, o tetro,a dança e muitos outros. todas ela conversando entre si, foram um lindo espetáculo."
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  }

  function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
  }
  mostraPergunta();