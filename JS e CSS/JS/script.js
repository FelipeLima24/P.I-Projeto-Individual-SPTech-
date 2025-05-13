// Criação de um array para armazenar os perfis cadastrados
var perfis = [];

// Função para cadastrar o perfil do usuário
function cadastrar() {
  // Captura os valores dos inputs do HTML
  var nome = ipt_nome.value;
  var email = ipt_email.value;
  var telefone = ipt_telefone.value;
  var cpf = ipt_cpf.value;

  // Adiciona o perfil ao array perfis
  var perfil = {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf
  };
  perfis.push(perfil);

  // Exibe os dados no console para conferência
  console.log("Cadastro realizado com sucesso!");
  console.log("Nome: " + nome);
  console.log("Email: " + email);
  console.log("Telefone: " + telefone);
  console.log("CPF: " + cpf);

  // Mensagem de feedback visual (opcional, pode personalizar no CSS)
  msg.innerHTML = "Cadastro realizado com sucesso!";
}

// Função para calcular a TMB (Taxa Metabólica Basal)
function calcular() {
  // Captura os valores dos inputs do HTML
  var peso = parseFloat(ipt_peso.value);
  var altura = parseFloat(ipt_altura.value);
  var objetivo = ipt_objetivo.value.toLowerCase(); // Normaliza para minúsculas
  var musculo = ipt_musculo.value.toLowerCase();   // Normaliza para minúsculas
  var estilo = ipt_estilo.value.toLowerCase();     // Normaliza para minúsculas

  // Validação do peso
  if (peso < 40) {
    msg.innerHTML = 'Peso inválido! Digite um número maior que 40.';
    return;
  }

  // Validação da altura
  if (altura < 100) {
    msg.innerHTML = 'Altura inválida! Digite um número maior que 100.';
    return;
  }

  // Validação do objetivo
  if (objetivo !== 'emagrecer' && objetivo !== 'massa' && objetivo !== 'ganhar massa') {
    msg.innerHTML = 'Objetivo inválido! Use "emagrecer" ou "massa".';
    return;
  }

  // Validação do grupo muscular
  var musculosValidos = ['peito', 'costas', 'pernas', 'braços', 'ombros', 'abdômen'];
  if (!musculosValidos.includes(musculo)) {
    msg.innerHTML = 'Músculo inválido! Escolha entre: ' + musculosValidos.join(', ') + '.';
    return;
  }

  // Validação do estilo de treino
  var estilosValidos = ['leve', 'médio', 'medio', 'pesado'];
  if (!estilosValidos.includes(estilo)) {
    msg.innerHTML = 'Estilo de treino inválido! Use "leve", "médio" ou "pesado".';
    return;
  }

  // Cálculo da TMB com base na fórmula de Mifflin-St Jeor (simplificada)
  // Essa fórmula pode ser ajustada depois para sexo, idade etc.
  var tmb = 10 * peso + 6.25 * altura - 5 * 25 + 5; // Exemplo com idade fixa 25 anos e sexo masculino

  // Exibe o resultado da TMB na tela
  msg.innerHTML = `Sua taxa metabólica basal é aproximadamente <strong>${Math.round(tmb)} calorias</strong> por dia.`;
}

// Função para criar um protocolo personalizado (ainda não implementada)
function protocolo() {
  msg.innerHTML = "Função de criação de protocolo ainda será implementada.";
}