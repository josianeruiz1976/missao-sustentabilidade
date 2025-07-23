const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Durante uma aula sobre meio ambiente, você descobre que a cidade onde mora está entre as que mais geram lixo por habitante. Qual atitude você decide tomar ao sair da escola?",
        alternativas: [
            {
                texto: "Separar lixo em casa",
                afirmacao: "Passou a influenciar sua casa e vizinhança a separar corretamente o lixo e reduzir resíduos domésticos."
            },
            {
                texto: "Pesquisar sobre compostagem",
                afirmacao: "Iniciou um projeto de compostagem em casa e ensinou outras pessoas a transformar restos de alimentos em adubo."
            }
        ]
    },
    {
        enunciado: "Você está no mercado com seus responsáveis e nota que eles pegaram várias sacolas plásticas. O que você faz?",
        alternativas: [
            {
                texto:  "Sugere que usem sacolas retornáveis ou de pano para evitar o uso excessivo de plástico.",
                afirmacao: "Passou a carregar sempre uma sacola reutilizável na mochila e influenciou outros amigos a fazerem o mesmo."
            },
            {
                texto: "Fica em silêncio, mas ao chegar em casa propõe que da próxima vez todos levem suas próprias sacolas.",
                afirmacao:  "Aprendeu que pequenas conversas podem gerar grandes mudanças nos hábitos da família."
            }
        ]
    },
    {
        enunciado: "Na escola, será realizado um evento sobre sustentabilidade e todos devem apresentar uma ideia ecológica. O que você propõe?",
        alternativas: [
            {
                texto: "Criar uma horta comunitária utilizando garrafas PET e materiais recicláveis.",
                afirmacao:"Mobilizou colegas para transformar um espaço ocioso da escola em um canteiro sustentável."
            },
            {
                texto: "Organizar uma campanha de coleta de eletrônicos antigos e pilhas para descarte correto.",
                afirmacao: "Contribuiu para a coleta consciente de resíduos eletrônicos e incentivou a escola a criar pontos de descarte fixos."
            }
        ]
    },
    
    {
        enunciado: "Durante uma caminhada pelo bairro, você encontra uma área cheia de lixo jogado no chão. O que faz?",

        alternativas: [
            
            {
                texto: "Tira fotos do local e compartilha nas redes sociais pedindo ações da comunidade e da prefeitura.",
                afirmacao: "Sua publicação alcançou muitos moradores e ajudou a formar um grupo de limpeza voluntária."
            },
            {
                texto: "Convida alguns amigos para recolher o lixo e pensar em um projeto de conscientização local.",
                afirmacao: "Juntos, criaram cartazes e palestras para conscientizar a vizinhança sobre descarte correto."
            }
        ]
    },
    {
        enunciado: "Em casa, sua família costuma deixar luzes acesas em ambientes vazios e o chuveiro ligado por muito tempo. Como você reage?",
        alternativas : [
            {
                texto: "Cria lembretes visuais perto dos interruptores e do banheiro com frases de economia de energia e água.",
                afirmacao: "Percebeu que pequenas ações de economia reduziram o consumo e ajudaram a preservar o planeta."
            },
            {
                texto: "Conversa com a família e sugere um desafio de economia durante a semana, com metas e recompensas.",
                afirmacao: "Transformou hábitos de consumo em casa e mostrou que sustentabilidade pode ser divertida e educativa. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2035, o planeta respira aliviado...";
    textoResultado.textContent =  historiaFinal + "Graças às escolhas conscientes que você fez ao longo da vida, ajudou a transformar sua comunidade em um exemplo de sustentabilidade. Suas ações inspiraram escolas, famílias e bairros inteiros a economizar recursos, reduzir o desperdício e cuidar melhor do meio ambiente. Você se tornou um agente da mudança e mostrou que cada atitude conta para proteger o planeta para as futuras gerações.";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
