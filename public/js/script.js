// ==============================
// ARMAZENAMENTO DE PERFIS
// ==============================

// Cria um array para guardar os perfis cadastrados
var perfis = [];

// ==============================
// FUNÇÃO DE CADASTRO
// ==============================

function cadastrar() {
  // Coleta os valores digitados pelo usuário nos campos do formulário
  var nome = ipt_nome.value;
  var email = ipt_email.value;
  var telefone = ipt_telefone.value;
  var cpf = ipt_cpf.value;

  // Cria um objeto com os dados do usuário
  var perfil = {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf
  };

  // Adiciona o novo perfil ao array
  perfis.push(perfil);

  // Exibe os dados no console (útil para testes)
  console.log("Cadastro realizado com sucesso!");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Telefone:", telefone);
  console.log("CPF:", cpf);

  // Mostra mensagem de confirmação na tela
  msg.innerHTML = "✅ Cadastro realizado com sucesso!";
}

// ==============================
// FUNÇÃO PARA CALCULAR TMB
// ==============================

function calcular() {
  // Lê os valores dos campos e converte para os tipos corretos
  var peso = parseFloat(ipt_peso.value);
  var altura = parseFloat(ipt_altura.value);
  var objetivo = ipt_objetivo.value.toLowerCase();
  var musculo = ipt_musculo.value.toLowerCase();
  var estilo = ipt_estilo.value.toLowerCase();

  // Validação dos dados
  if (peso < 40) {
    msg.innerHTML = '⚠️ Peso inválido! Digite um valor maior que 40.';
    return;
  }

  if (altura < 100) {
    msg.innerHTML = '⚠️ Altura inválida! Digite um valor maior que 100.';
    return;
  }

  if (objetivo !== 'emagrecer' && objetivo !== 'massa' && objetivo !== 'ganhar massa') {
    msg.innerHTML = '⚠️ Objetivo inválido! Use "emagrecer" ou "massa".';
    return;
  }

  var musculosValidos = ['peito', 'costas', 'pernas', 'braços', 'ombros', 'abdômen'];
  if (!musculosValidos.includes(musculo)) {
    msg.innerHTML = '⚠️ Músculo inválido! Escolha entre: ' + musculosValidos.join(', ') + '.';
    return;
  }

  var estilosValidos = ['leve', 'médio', 'medio', 'pesado'];
  if (!estilosValidos.includes(estilo)) {
    msg.innerHTML = '⚠️ Estilo de treino inválido! Use "leve", "médio" ou "pesado".';
    return;
  }

  // Cálculo da TMB (fórmula de Mifflin-St Jeor simplificada, com idade padrão 25 e sexo masculino)
  var tmb = 10 * peso + 6.25 * altura - 5 * 25 + 5;

  // Mostra o resultado na tela
  msg.innerHTML = `🔥 Sua taxa metabólica basal é aproximadamente <strong>${Math.round(tmb)} calorias</strong> por dia.`;
}

// ==============================
// FUNÇÃO DE PROTOCOLO
// ==============================

function protocolo() {
  msg.innerHTML = "⚙️ Função de criação de protocolo ainda será implementada.";
}