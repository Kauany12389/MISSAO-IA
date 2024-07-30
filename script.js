const caixaPrincipal = document.querySelector('.caixa- principal');

const caixaPerguntas = document.querySelector('.caixa-perguntas');
    
const caixaAlternativas = document.querySelector('.caixa-alternativas');
    
const caixaResultado = document.querySelector('.caixa-resultado');
    
 const textoResultado = document.querySelector('.texto-resultado');

 const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: [
    {
    
        texto: "Grécia",
        afirmação:"Afirmação da alternativa 1"
        },

       { texto: "China e Índia",
        afirmação:"Afirmação da alternativa 2"
      },

      {texto: "Brasil",
      afirmação:"Afirmação da alternativa 3"
    },
      ]

          enunciado: "Quais são os elementos que compõe a daça?",
    alternativas: [
    {

      texto: "Contrapeso",
      afirmação:"Afirmação da alternativa 1"
    },

     {texto: "Espaço",
     afirmação:"Afirmação da alternativa 2"
    },

:   {texto:"Ordem e tranência",
    afirmação:"Afirmação da alternativa 3"
    },    
     ]

   {

    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: [
    },

    texto: "Arte literárias",
    afirmação:"Afirmação da alternativa 1"
    },

    {texto: "Artes cênicas",
    afirmação:"Afirmação da alternativa 2"
    },

    {texto: "Artes Visuais",
    afirmação:"Afirmação da alternativa 3"
    },

    {texto:"Artes musicasis",
    afirmação:"Afirmação da alternativa 4"
    },  
  
    ];
    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    function mostraAlternativas() {}
     if(atual>=perguntas.length) {
      mostraresultado();
      return;
    }



      function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmação;
        historiaFinal = afirmacoes;
        atual++;
        mostraPergunta();
          caixaAlternativas.appendChild(botaoAlternativas);
      }
    
      
        
     