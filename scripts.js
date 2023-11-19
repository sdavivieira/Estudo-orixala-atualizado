function normalizeString(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '');
}

function checkSecurityAnswers() {
  const answer1 = document.getElementById('question1').value;
  const answer2 = document.getElementById('question2').value;

  const normalizedAnswer1 = normalizeString(answer1);
  const normalizedAnswer2 = normalizeString(answer2);

  console.log('Normalized Answer 1:', normalizedAnswer1);
  console.log('Normalized Answer 2:', normalizedAnswer2);

  const correctAnswer1 = ['fé', 'caridade', 'esperança'].map(normalizeString);
  const correctAnswer2 = ['Santo', 'Hejos', 'Almas', 'Exu', 'Nagô', 'Mussurumim', 'Grupial'].map(normalizeString);

  console.log('Correct Answer 1:', correctAnswer1);
  console.log('Correct Answer 2:', correctAnswer2);

  // Verifica se as respostas estão corretas (independentemente da ordem)
  const isAnswer1Correct = correctAnswer1.every(word => normalizedAnswer1.includes(word));
  const isAnswer2Correct = correctAnswer2.every(word => normalizedAnswer2.includes(word));

  if (isAnswer1Correct && isAnswer2Correct) {
      // Ambas as respostas estão corretas, permitir iniciar o jogo
      document.getElementById('quiz-container').style.display = 'block';
      document.getElementById('security-questions').style.display = 'none';
      startGame();
  } else {
      alert('Respostas incorretas. Tente novamente.');
  }
}

document.getElementById('start-game-button').addEventListener('click', checkSecurityAnswers);
document.getElementById('security-questions-button').addEventListener('click', checkSecurityAnswers);

const questions = [
  {
    question: "O que representa Exu Mangueira?",
    options: ["Cajado", "Flor", "Pimenta", "1 Árvore"],
    correctAnswer: "1 Árvore",
    category: "Exu",
  },

  {
    question: "Qual é o símbolo de Exu Pimenta?",
    options: ["Árvore", "Pimenta", "Flor", "Garfo"],
    correctAnswer: "Pimenta",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Figueira?",
    options: ["Porteira", "Flor", "Pimenta", "1 Árvore"],
    correctAnswer: "1 Árvore",
    category: "Exu",
  },

  {
    question: "O que representa Exu Sete Encruzilhadas?",
    options: ["7 Encruzilhadas", "Flor", "Pimenta", "Árvore"],
    correctAnswer: "7 Encruzilhadas",
    category: "Exu",
  },

  {
    question: "O que é simbolizado por Exu Ventania?",
    options: ["Árvore", "Ventos", "Garfo", "Flor"],
    correctAnswer: "Ventos",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Sete Gargalhadas?",
    options: ["7 Garfos", "Flor", "Pimenta", "Árvore"],
    correctAnswer: "7 Garfos",
    category: "Exu",
  },

  {
    question: "O que representa Exu Veneno?",
    options: ["Árvore", "1 Garrafa de Veneno", "Garfo", "Flor"],
    correctAnswer: "1 Garrafa de Veneno",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Marê?",
    options: ["Árvore", "Mar", "Garfo", "Flor"],
    correctAnswer: "Mar",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Sete Mares?",
    options: ["7 Ondas", "Mar", "Garfo", "Flor"],
    correctAnswer: "7 Ondas",
    category: "Exu",
  },

  {
    question: "O que representa Exu Môr?",
    options: [
      "Capacete e Cruzeiro",
      "Capacete e espada",
      "Relógio marcando 00:00",
      "Coroa",
    ],
    correctAnswer: "Capacete e Cruzeiro",
    category: "Exu",
  },

  {
    question: "O que é simbolizado por Exu Meia Noite?",
    options: [
      "Árvore",
      "Relógio marcando 00:00 ou uma coruja",
      "Coruja",
      "Garfo",
    ],
    correctAnswer: "Relógio marcando 00:00 ou uma coruja",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Capa Preta?",
    options: ["Árvore", "Capa Preta", "Garfo", "Flor"],
    correctAnswer: "Capa Preta",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Marabô?",
    options: ["Árvore", "Tesoura", "Garfo", "Flor"],
    correctAnswer: "Tesoura",
    category: "Exu",
  },

  {
    question: "O que representa Exu Tiriri?",
    options: ["Árvore", "Punhal e Coroa", "Capa", "Garfo"],
    correctAnswer: "Punhal e Coroa",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Do Lodo?",
    options: ["Água", "Cachoeira", "Lago", "Cemitério"],
    correctAnswer: "Lago",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Sete Catacumbas?",
    options: ["7 Catacumbas", "Cemitério", "Garfo", "Flor"],
    correctAnswer: "7 Catacumbas",
    category: "Exu",
  },

  {
    question: "O que representa Exu Sete Covas?",
    options: ["7 Covas", "Cemitério", "Garfo", "Flor"],
    correctAnswer: "7 Covas",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Veludo?",
    options: ["Árvore", "Rosto do gato ou 1 capa de veludo", "Garfo", "Flor"],
    correctAnswer: "Rosto do gato ou 1 capa de veludo",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Caveira?",
    options: ["Árvore", "Portão", "1 Caveira", "Garfo"],
    correctAnswer: "1 Caveira",
    category: "Exu",
  },

  {
    question: "O que representa Exu João Caveira?",
    options: ["1 Catacumba e 1 Caveira", "Cemitério", "Garfo", "Flor"],
    correctAnswer: "1 Catacumba e 1 Caveira",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Tatá Caveira?",
    options: ["1 cajado", "Cruzeiro das almas e 1 Caveira", "Garfo", "Flor"],
    correctAnswer: "Cruzeiro das almas e 1 Caveira",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Treme Terra?",
    options: ["Árvore", "Cemitério", "4 Cantos do cemitério", "Garfo"],
    correctAnswer: "4 Cantos do cemitério",
    category: "Exu",
  },

  {
    question: "O que representa Exu Gato Preto?",
    options: ["Árvore", "Cemitério", "Gato preto", "Garfo"],
    correctAnswer: "Gato preto",
    category: "Exu",
  },

  {
    question: "O que é simbolizado por Exu Morcego?",
    options: ["Árvore", "Cemitério", "Morcego", "Garfo"],
    correctAnswer: "Morcego",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Pinga Fogo?",
    options: ["Árvore", "Fogo", "Garfo", "Flor"],
    correctAnswer: "Fogo",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu Braza?",
    options: ["Árvore", "Braza", "Garfo", "Flor"],
    correctAnswer: "Braza",
    category: "Exu",
  },

  {
    question: "O que representa Exu Gira Mundo?",
    options: ["Garfo", "Pássaro", "Ventos", "Garfo dando a volta no mundo"],
    correctAnswer: "Garfo dando a volta no mundo",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Vira Mundo?",
    options: ["Garfo", "Pássaro", "Ventos", "Garfo dando a volta no mundo"],
    correctAnswer: "Garfo dando a volta no mundo",
    category: "Exu",
  },

  {
    question: "O que simboliza Exu De Lei?",
    options: ["Árvore", "Balança", "Garfo", "Flor"],
    correctAnswer: "Balança",
    category: "Exu",
  },

  {
    question: "Qual o significado de Exu Sete Liras?",
    options: ["7 Flores e 7 Garfos", "Garfo", "Flor", "Cemitério"],
    correctAnswer: "7 Flores e 7 Garfos",
    category: "Exu",
  },

  {
    question: "O que representa Exu Mirim?",
    options: ["Árvore", "Cajado", "Garfo", "Cajado de cabeça para baixo"],
    correctAnswer: "Cajado de cabeça para baixo",
    category: "Exu",
  },
  {
    question: "O que representa Caboclo Beira Mar?",
    options: ["Cocar", "Rio", "Céu", "Mar"],
    correctAnswer: "Mar",
    category: "Caboclo",
  },

  {
    question: "Qual é o símbolo de Caboclo Sete Ondas?",
    options: ["Estrela", "Espada", "7 ondas", "Coroa"],
    correctAnswer: "7 ondas",
    category: "Caboclo",
  },

  {
    question: "O que é simbolizado por Caboclo Indaia?",
    options: [
      "Saiote",
      "Mar",
      "Ancora de Iemanjá",
      "Saiote, mar e ancora de Iemanjá",
    ],
    correctAnswer: "Saiote, mar e ancora de Iemanjá",
    category: "Caboclo",
  },

  {
    question: "Quais são os elementos associados a Caboclo Janaina?",
    options: ["Saiote", "Água", "Saiote e água (Mar, Rio ou Cachoeira)", "Céu"],
    correctAnswer: "Saiote e água (Mar, Rio ou Cachoeira)",
    category: "Caboclo",
  },

  {
    question: "O que representa Caboclo Iara?",
    options: [
      "Saiote",
      "Águas",
      "Mar",
      "Saiote e águas (Mar, Rio ou Cachoeira)",
    ],
    correctAnswer: "Saiote e águas (Mar, Rio ou Cachoeira)",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Jussara?",
    options: [
      "Saiote",
      "Raio de Iansã",
      "Folha",
      "Saiote, arco e flecha e folha",
    ],
    correctAnswer: "Saiote, arco e flecha e folha",
    category: "Caboclo",
  },

  {
    question: "Qual o elemento associado a Caboclo Jurema?",
    options: ["Cocar", "flores", "Pantera", "Saiote, arco e flecha e folha"],
    correctAnswer: "Saiote, arco e flecha e folha",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Jupiara?",
    options: ["Tinta Vermelha", "mar", "Cobra Verde", "Saiote e cobra"],
    correctAnswer: "Saiote e cobra",
    category: "Caboclo",
  },

  {
    question: "O que representa Caboclo Cobra Negra?",
    options: ["1 cobra preta", "1 cobra verde", "1 cobra coral", "1 cobra"],
    correctAnswer: "1 cobra preta",
    category: "Caboclo",
  },

  {
    question: "Qual o símbolo de Caboclo Sete Flechas?",
    options: ["Estrela", "Espada", "7 flechas", "Coroa"],
    correctAnswer: "7 flechas",
    category: "Caboclo",
  },

  {
    question: "O que é simbolizado por Caboclo Flecheiro?",
    options: ["Arco", "Espada", "Cocar grande", "Arco e 3 flechas"],
    correctAnswer: "Arco e 3 flechas",
    category: "Caboclo",
  },

  {
    question: "O que significa Caboclo Rompe Mato?",
    options: [
      "1 espada cruzada",
      "Cajado",
      "Arco e flecha",
      "1 toco e 1 flecha cruzando",
    ],
    correctAnswer: "1 espada cruzada",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Arranca Toco?",
    options: [
      "1 toco",
      "1 flecha",
      "1 toco e 1 flecha cruzando",
      "Arco e 3 flechas",
    ],
    correctAnswer: "1 toco e 1 flecha cruzando",
    category: "Caboclo",
  },

  {
    question: "Qual o significado de Caboclo Piriaçu?",
    options: ["1 cobra verde", "1 cobra preta", "1 cobra coral", "1 cobra"],
    correctAnswer: "1 cobra verde",
    category: "Caboclo",
  },

  {
    question: "O que representa Caboclo Jacutinga?",
    options: ["Coité (cuia)", "Cachoeira", "Árvore", "1 cobra preta"],
    correctAnswer: "Coité (cuia)",
    category: "Caboclo",
  },

  {
    question: "Quais são os elementos associados a Caboclo Aimoré?",
    options: ["Cruz da fé (Oxalá)", "Árvore", "Pena dourada", "1 cocar longo"],
    correctAnswer: "Cruz da fé (Oxalá)",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Tupinambá?",
    options: ["Cruz de fé (Oxalá)", "Árvore", "Pena dourada", "1 cocar longo"],
    correctAnswer: "Cruz de fé (Oxalá)",
    category: "Caboclo",
  },

  {
    question: "Qual o significado de Caboclo Ubirajara?",
    options: ["1 cocar longo", "Pena dourada", "Pena branca", "Pena preta"],
    correctAnswer: "1 cocar longo",
    category: "Caboclo",
  },

  {
    question: "O que representa Caboclo Ventania?",
    options: ["Vento", "Folha", "Pássaro", "Vento e pássaro"],
    correctAnswer: "Vento e pássaro",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Gira Mundo?",
    options: ["Flecha", "Pássaro", "Vento", "Flecha dando a volta no mundo"],
    correctAnswer: "Flecha dando a volta no mundo",
    category: "Caboclo",
  },

  {
    question: "Qual o significado de Caboclo Vira Mundo?",
    options: ["Flecha", "Pássaro", "Vento", "Flecha dando a volta no mundo"],
    correctAnswer: "Flecha dando a volta no mundo",
    category: "Caboclo",
  },

  {
    question: "O que representa Caboclo Mata Virgem?",
    options: ["Mata", "montanha", "Árvore", "Céu"],
    correctAnswer: "Mata",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Guiné?",
    options: [
      "Árvore",
      "Cocar grande em branco",
      "Cocar grande em verde",
      "Livro verde",
    ],
    correctAnswer: "Árvore",
    category: "Caboclo",
  },

  {
    question: "Qual o significado de Caboclo Arariboia?",
    options: [
      "Árvore pequena",
      "Árvore e Cobra",
      "Cocar grande em branco",
      "Cocar grande em verde",
    ],
    correctAnswer: "Árvore e Cobra",
    category: "Caboclo",
  },

  {
    question: "O que simboliza Caboclo Bugre?",
    options: [
      "Árvore",
      "Cocar grande em branco, cuia e livro verde",
      "Cocar grande em verde",
      "Livro verde",
    ],
    correctAnswer: "Cocar grande em branco, cuia e livro verde",
    category: "Caboclo",
  },
  {
    question: "O que representa o Preto Velho da Bahia?",
    options: [
      "Cruzeiro das almas e 1 simbolo de Bahia",
      "Cachimbo",
      "Palma",
      "Cajado",
    ],
    correctAnswer: "Cruzeiro das almas e 1 simbolo de Bahia",
    category: "Preto Velho",
  },

  {
    question: "Quais são os símbolos associados ao Preto Velho do Congo?",
    options: [
      "Cruzeiro das almas e 1 simbolo de Congo",
      "Chapéu de Panamá",
      "Palma",
      "Cajado",
    ],
    correctAnswer: "Cruzeiro das almas e 1 simbolo de Congo",
    category: "Preto Velho",
  },

  {
    question: "O que é simbolizado pelo Preto Velho de Minas?",
    options: [
      "Cruzeiro das almas e o Simbolo de Minas",
      "Cruz de Rezadeira",
      "Palma",
      "Cajado",
    ],
    correctAnswer: "Cruzeiro das almas e o Simbolo de Minas",
    category: "Preto Velho",
  },

  {
    question: "Quais são os símbolos associados ao Preto Velho de Angola?",
    options: [
      "Cruzeiro das almas e o simbolo de Angola",
      "Lua minguante",
      "Palma",
      "Cajado",
    ],
    correctAnswer: "Cruzeiro das almas e o simbolo de Angola",
    category: "Preto Velho",
  },
  {
    question: "O que representa a Criança Doum?",
    options: ["Estrela", "Bandeira e ou Palma", "Espada de Ogum", "Cajado"],
    correctAnswer: "Bandeira e ou Palma",
    category: "Criança",
  },

  {
    question: "Quais são os símbolos associados a São Cosme e São Damião?",
    options: ["Estrela", "Bandeira e ou Palma", "Doce", "Árvore"],
    correctAnswer: "Bandeira e ou Palma",
    category: "Criança",
  },

  {
    question: "O que é simbolizado por São Crispim e São Crispiniano?",
    options: ["Flores", "Machadinha", "Bola", "Cajado, Bandeira e ou Palma"],
    correctAnswer: "Cajado, Bandeira e ou Palma",
    category: "Criança",
  },
  {
    question: "O que representa Xangô Agodo?",
    options: ["Céu", "Rio", "Mar", "Cruzeiro das almas"],
    correctAnswer: "Cruzeiro das almas",
    category: "Xangô",
  },

  {
    question: "O que é simbolizado por Xangô Alafim?",
    options: ["Mar", "Cachoeira", "Pedreira", "Mar e a cruz da fé (Oxalá)"],
    correctAnswer: "Mar e a cruz da fé (Oxalá)",
    category: "Xangô",
  },

  {
    question: "Qual o significado de Xangô Kaô?",
    options: [
      "Pedreira",
      "Cachoeira",
      "Mar",
      "Pedreira e cordão de São Francisco",
    ],
    correctAnswer: "Pedreira e cordão de São Francisco",
    category: "Xangô",
  },

  {
    question: "O que representa Xangô Aganju?",
    options: ["Machados", "Cachoeira", "Pedreira", "Mar"],
    correctAnswer: "Mar",
    category: "Xangô",
  },

  {
    question: "O que simboliza Sete Pedreiras em Xangô?",
    options: ["Estrela", "Pedreira", "Espada", "7 pedreiras"],
    correctAnswer: "7 pedreiras",
    category: "Xangô",
  },

  {
    question: "Qual é o símbolo de Xangô Sete Machadinhas?",
    options: ["Estrela", "Espada", "7 machados", "Coroa"],
    correctAnswer: "7 machados",
    category: "Xangô",
  },

  {
    question: "O que representa Xangô Zambara?",
    options: ["Estrela", "Simbolo do oriente", "Espada", "Coroa"],
    correctAnswer: "Simbolo do oriente",
    category: "Xangô",
  },

  {
    question: "Qual o significado de Xangô Pedra Preta?",
    options: ["Estrela", "Pedreira", "Pedra preta", "Coroa"],
    correctAnswer: "Pedra preta",
    category: "Xangô",
  },

  {
    question: "O que simboliza Xangô Pedra Branca?",
    options: ["Estrela", "Espada", "Pedreira", "Pedra branca"],
    correctAnswer: "Pedra branca",
    category: "Xangô",
  },
  {
    question: "O que representa Iemanjá?",
    options: ["Cachoeira", "Rio", "Mar e Ancora Com Corda", "Estrela"],
    correctAnswer: "Mar e Ancora Com Corda",
    category: "Iemanjá",
  },
  {
    question: "O que representa Oxum Megá?",
    options: [
      "Rio",
      "Mar",
      "Ancora sem corda",
      "Cachoeira, Ancora sem Corda e 1 flecha cruzada",
    ],
    correctAnswer: "Cachoeira, Ancora sem Corda e 1 flecha cruzada",
    category: "Oxum",
  },

  {
    question: "Qual elemento está associado a Oxum Mariô?",
    options: ["Cachoeira", "Rio", "Mar", "Queda d'água"],
    correctAnswer: "Rio",
    category: "Oxum",
  },

  {
    question: "O que simboliza Oxum Maré?",
    options: ["Cachoeira", "Rio", "Lírios", "Mar"],
    correctAnswer: "Mar",
    category: "Oxum",
  },
  {
    question: "O que representa Nanã Buruque?",
    options: ["Remo", "Rio", "Céu", "Montanha"],
    correctAnswer: "Remo",
    category: "Nanã",
  },

  {
    question: "Quais são os símbolos associados a Nanã Congo?",
    options: ["Remo", "Chave", "Lança", "Remo, chave ou lança de congo"],
    correctAnswer: "Remo, chave ou lança de congo",
    category: "Nanã",
  },
  {
    question: "O que representa Iansã do Mar?",
    options: ["Mar", "Rio", "Céu", "Fogo"],
    correctAnswer: "Mar",
    category: "Iansã",
  },

  {
    question: "O que é simbolizado por Iansã da Cachoeira?",
    options: ["Mar", "Cachoeira", "Montanha", "Floresta"],
    correctAnswer: "Cachoeira",
    category: "Iansã",
  },
  {
    question: "O que representa o Ogum Beira mar?",
    options: ["Mar", "Rio", "Espada", "Ferradura"],
    correctAnswer: "Mar",
    category: "Ogum",
  },

  {
    question: "O que representa Sete Ondas?",
    options: ["Estrela", "Espada", "Coroa", "7 ondas"],
    correctAnswer: "7 ondas",
    category: "Ogum",
  },

  {
    question: "O que é associado a Timbiri?",
    options: ["Mar", "Fogo", "Terra", "Ar"],
    correctAnswer: "Mar",
    category: "Ogum",
  },

  {
    question: "O que representa o Marinheiro?",
    options: ["Mar, leme e âncora de Iemanjá", "Estrela", "Espada", "Coroa"],
    correctAnswer: "Mar, leme e âncora de Iemanjá",
    category: "Ogum",
  },

  {
    question: "Quais elementos são associados à Sereia?",
    options: ["Mar e barco", "Fogo e espada", "Terra e árvore", "Ar e vento"],
    correctAnswer: "Mar e barco",
    category: "Ogum",
  },

  {
    question: "O que representa Guanabara?",
    options: ["Mar, barco e pedreira", "Estrela", "Espada", "Coroa"],
    correctAnswer: "Mar, barco e pedreira",
    category: "Ogum",
  },

  {
    question: "O que simboliza Ogum Iara?",
    options: ["Estrela", "Espada", "Coroa", "Rio"],
    correctAnswer: "Rio",
    category: "Ogum",
  },

  {
    question: "O que representa Ogum Rompe Mato?",
    options: ["Estrela", "Espada", "1 flecha cruzada", "Coroa"],
    correctAnswer: "1 flecha cruzada",
    category: "Ogum",
  },

  {
    question: "Como é representado Ogum Rompe Serra?",
    options: [
      "Estrela",
      "Espada",
      "Nuvem abaixo dos astros com uma espada cruzando a nuvem",
      "Coroa",
    ],
    correctAnswer: "Nuvem abaixo dos astros com uma espada cruzando a nuvem",
    category: "Ogum",
  },

  {
    question: "O que significa Ogum Matinata?",
    options: ["Cruz da fé (Oxalá)", "Estrela", "Espada", "Coroa"],
    correctAnswer: "Cruz da fé (Oxalá)",
    category: "Ogum",
  },

  {
    question: "Qual símbolo está associado a Ogum Megê?",
    options: ["Ferradura (Cemitério)", "Estrela", "Espada", "Coroa"],
    correctAnswer: "Ferradura (Cemitério)",
    category: "Ogum",
  },

  {
    question: "O que representa Sete Pedreiras?",
    options: ["Estrela", "Pedreira", "Espada", "Coroa"],
    correctAnswer: "Pedreira",
    category: "Xangô",
  },

  {
    question: "Qual o símbolo de Ogum Lua Nova?",
    options: ["Estrela", "Lua nova no astro", "Espada", "Coroa"],
    correctAnswer: "Lua nova no astro",
    category: "Ogum",
  },

  {
    question: "O que simboliza Ogum Sete Espadas?",
    options: ["Estrela", "Espada", "7 espadas", "Coroa"],
    correctAnswer: "7 espadas",
    category: "Ogum",
  },

  {
    question: "O que representa Ogum Nuvem Negra?",
    options: ["Estrela", "Espada", "Nuvem em preto", "Coroa"],
    correctAnswer: "Nuvem em preto",
    category: "Ogum",
  },

  {
    question: "Como é simbolizado Ogum Lua Nova?",
    options: ["Estrela", "Espada", "1 lua nova no astro", "Coroa"],
    correctAnswer: "1 lua nova no astro",
    category: "Ogum",
  },

  {
    question: "O que representa Ogum De Lei?",
    options: ["Estrela", "Espada", "Balança", "Coroa"],
    correctAnswer: "Balança",
    category: "Ogum",
  },

  {
    question: "Qual é o símbolo de Ogum Naruê?",
    options: ["Estrela", "Espada", "Cruzeiro das almas", "Coroa"],
    correctAnswer: "Cruzeiro das almas",
    category: "Ogum",
  },
  {
    question: "Qual é a representação de PomboGira?",
    options: ["Garfo de calunga", "Rosto da Pombogira", "Saia", "Perfume"],
    correctAnswer: "Rosto da Pombogira",
    category: "Pombogira",
  },
  {
    question: "Qual é a representação de Malandro(a)?",
    options: ["Garfo de Encruza", "Chapéu", "Saia", "Baralho e bebida"],
    correctAnswer: "Baralho e bebida",
    category: "Malandro",
  },
  // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;
let wrongQuestions = [];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const showWrongQuestionsButton = document.getElementById("show-wrong-questions-button");
const wrongQuestionsContainer = document.getElementById("wrong-questions-container");
const wrongQuestionsList = document.getElementById("wrong-questions-list");

function startGame() {
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const categoryContainer = document.getElementById("category");
  const imagesContainer = document.getElementById("images-container");
  const body = document.body;

  // Exibir a categoria
  const categoryData = getCategoryColor(currentQuestion.category);
  categoryContainer.textContent = `Categoria: ${currentQuestion.category || "Geral"}`;

  // Adiciona a div de imagens
  imagesContainer.innerHTML = '';
  const images = categoryData.images;
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.classList.add('imagemResultado'); // Adiciona a classe para o estilo CSS
    imagesContainer.appendChild(img);
  }

  // Aplicar estilo ao fundo do body com base na categoria
  body.style.backgroundColor = categoryData.backgroundColor;

  // Exibir a pergunta
  questionText.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  // Exibir ou ocultar o botão "Pergunta Anterior"
  prevButton.style.display = currentQuestionIndex === 0 ? "none" : "block";
}

function showPrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function checkAnswer(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  const optionsButtons = optionsContainer.querySelectorAll("button");

  optionsButtons.forEach((button) => (button.disabled = true));

  if (answer === currentQuestion.correctAnswer) {
    optionsButtons.forEach((button) => {
      if (button.textContent === answer) {
        button.style.backgroundColor = "#8F8"; // Verde claro
      }
    });
    score++;
  } else {
    optionsButtons.forEach((button) => {
      if (button.textContent === currentQuestion.correctAnswer) {
        button.style.backgroundColor = "#8F8"; // Verde claro
      }
      if (button.textContent === answer) {
        button.style.backgroundColor = "#F88"; // Vermelho claro
      }
    });

    // Adiciona a pergunta incorreta à lista
    const wrongQuestionItem = document.createElement("li");
    wrongQuestionItem.textContent = currentQuestion.question;
    wrongQuestionsList.appendChild(wrongQuestionItem);

    const correctAnswerItem = document.createElement("span");
    correctAnswerItem.textContent = ` - Resposta Correta: ${currentQuestion.correctAnswer}`;
    correctAnswerItem.style.fontWeight = "bold";
    wrongQuestionItem.appendChild(correctAnswerItem);

    // Salva a pergunta incorreta no array
    wrongQuestions.push({
      question: currentQuestion.question,
      correctAnswer: currentQuestion.correctAnswer,
      userAnswer: answer,
    });
  }

  currentQuestionIndex++;

  setTimeout(() => {
    optionsButtons.forEach((button) => {
      button.style.backgroundColor = "";
    });

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }

    optionsButtons.forEach((button) => (button.disabled = false));
  }, 1000);
}

function showResult() {
  resultContainer.style.display = "block";
  questionContainer.style.display = "none";
  optionsContainer.style.display = "none";
  nextButton.style.display = "none";
  prevButton.style.display = "none";

  scoreDisplay.textContent = `Acertos: ${score} / ${questions.length}`;

  // Exibe a lista de perguntas incorretas se houver alguma
  if (wrongQuestions.length > 0) {
    showWrongQuestionsButton.style.display = "block";
  }
}

function showWrongQuestions() {
  // Exibe a lista de perguntas incorretas
  wrongQuestionsContainer.style.display = "block";
  wrongQuestionsList.innerHTML = "";

  wrongQuestions.forEach((wrongQuestion) => {
    const wrongQuestionItem = document.createElement("li");
    wrongQuestionItem.textContent = wrongQuestion.question;
    wrongQuestionItem.style.color = "#140000";

    const userAnswerItem = document.createElement("span");
    userAnswerItem.textContent = ` - Sua Resposta: ${wrongQuestion.userAnswer}`;
    userAnswerItem.style.fontWeight = "bold";
    userAnswerItem.style.color = "#F88"; // Vermelho claro
    wrongQuestionItem.appendChild(userAnswerItem);

    const correctAnswerItem = document.createElement("span");
    correctAnswerItem.textContent = ` - Resposta Correta: ${wrongQuestion.correctAnswer}`;
    correctAnswerItem.style.fontWeight = "bold";
    wrongQuestionItem.appendChild(correctAnswerItem);

    wrongQuestionsList.appendChild(wrongQuestionItem);
  });
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  wrongQuestions = [];
  resultContainer.style.display = "none";
  questionContainer.style.display = "block";
  optionsContainer.style.display = "block";
  nextButton.style.display = "block";
  prevButton.style.display = "none"; // Reinicia o jogo, ocultando o botão "Pergunta Anterior"
  showWrongQuestionsButton.style.display = "none"; // Oculta o botão de mostrar perguntas incorretas
  wrongQuestionsContainer.style.display = "none"; // Oculta a lista de perguntas incorretas
  wrongQuestionsList.innerHTML = ""; // Limpa a lista de perguntas incorretas
  startGame();
}

function getCategoryColor(category) {
  switch (category) {
    case "Ogum":
      return { color: "#FF0000", backgroundColor: "#FF0000",images: ["Ogum.jpg"] };
    case "Xangô":
      return { color: "#8B4513", backgroundColor: "#8B4513",images: ["Xango.jpg"] };
    case "Iansã":
      return { color: "#FFFF00", backgroundColor: "#FFFF00",images: ["Iansa.jpg"] };
    case "Oxum":
      return { color: "#ADD8E6", backgroundColor: "#ADD8E6", images: ["Oxum.jpg"] };
    case "Iemanjá":
      return { color: "#00008B", backgroundColor: "#00008B", images: ["Iemanja.jpg"] };
    case "Caboclo":
      return { color: "#008000", backgroundColor: "#008000",images: ["Caboclo.jpg"] };
    case "Preto Velho":
      return { color: "#000000", backgroundColor: "#000000",images: ["PretoVelho.jpg"] };
    case "Exu":
      return { color: "#000000", backgroundColor: "#000000", images: ["Exu.jpg"] };
    case "Criança":
      return { color: "#FFC0CB", backgroundColor: "#FFC0CB",images: ["Crianca.jpg"] };
    case "Oxalá":
      return { color: "#FFFFFF", backgroundColor: "#FFFFFF",images: ["Oxala.jpg"] };
    case "Nanã":
      return { color: "#800080", backgroundColor: "#800080",images: ["Nana.jpg"] };
      case "Malandro":
        return { color: "#000000", backgroundColor: "#000000",images: ["Malandro.jpg"] };
      case "Pombogira":
        return { color: "#000000", backgroundColor: "#000000",images: ["Pombogira.jpg"] };
    default:
      return { color: "#fff", backgroundColor:  "#fff",images: [] }; // Cor padrão (branco) e array vazio para imagens
  }
}

nextButton.addEventListener("click", showQuestion);
prevButton.addEventListener("click", showPrevQuestion);
restartButton.addEventListener("click", restartGame);
showWrongQuestionsButton.addEventListener("click", showWrongQuestions);

startGame();
