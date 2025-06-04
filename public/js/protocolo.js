var valorTMB = 0;

function calcular() {
  var msg = document.getElementById('msg');
  var fkQuestionario = +document.getElementById('ipt_questionario').value;
  var fkUsuario = +document.getElementById('ipt_usuario').value;
  var altura = +document.getElementById('ipt_altura').value;
  var peso = +document.getElementById('ipt_peso').value;
  var idade = +document.getElementById('ipt_idade').value;
  var sexo = document.getElementById('ipt_sexo').value.toLowerCase();
  var objetivo = document.getElementById('ipt_objetivo').value.toLowerCase();
  var estiloTreino = document.getElementById('ipt_estiloTreino').value.toLowerCase();
  var dias = +document.getElementById('ipt_dias').value;
  var musculo = document.getElementById('ipt_musculo').value.toLowerCase();
  console.log("peso", peso);

  // cálculo da TMB
  if (sexo == 'm') {
    valorTMB = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    valorTMB = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }

  if (
    fkQuestionario == '' ||
    fkUsuario == '' ||
    altura == '' ||
    peso == '' ||
    idade == '' ||
    sexo == '' ||
    objetivo == '' ||
    estiloTreino == '' ||
    dias == '' ||
    musculo == ''
  ) {
    alert('Preencha todos os campos.');
    return;
  }

  msg.innerHTML = `Sua taxa metabólica basal é de ${valorTMB} kcal/dia`;
}
function protocolo() {
  calcular();

  var msg = document.getElementById('msg');
  var texto = msg.innerHTML;
  var saida = document.getElementById('saida');

  var fkQuestionario = document.getElementById('ipt_questionario').value;
  var fkUsuario = document.getElementById('ipt_usuario').value;
  var altura = document.getElementById('ipt_altura').value;
  var peso = document.getElementById('ipt_peso').value;
  var idade = document.getElementById('ipt_idade').value;
  var sexo = document.getElementById('ipt_sexo').value.toLowerCase();
  var objetivo = document.getElementById('ipt_objetivo').value.toLowerCase();
  var estiloTreino = document.getElementById('ipt_estiloTreino').value.toLowerCase();
  var dias = document.getElementById('ipt_dias').value;
  var musculo = document.getElementById('ipt_musculo').value.toLowerCase();

  if (texto.indexOf('kcal') < 0) {
    saida.innerHTML = `Primeiro calcule a TMB.`;
    return;
  }

  // macronutrientes
  var calorias = Number(valorTMB * 1.2).toFixed(0);
  var proteinas = Number(peso * 2).toFixed(0);
  var carboidratos = Number((calorias * 0.5) / 4).toFixed(0);
  var gorduras = Number((calorias * 0.25) / 9).toFixed(0);



  if (objetivo == 'emagrecer') {
    var calorias = (calorias * 0.8).toFixed(0);
  } else if (objetivo == 'massa') {
    var calorias = (calorias * 1.2).toFixed(0);
  }

  var musculosValidos = ['peito', 'costas', 'pernas', 'ombros', 'abdomen', 'abdômen', 'biceps', 'bíceps', 'triceps', 'tríceps'];
  if (musculosValidos.indexOf(musculo) < 0) {
    alert('Músculo inválido. Escolha entre: peito, costas, pernas, ombros, abdômen, bíceps ou tríceps.');
    return;
  }

  // exercicios
  var vetExercicios = [];

  if (musculo == 'peito' || musculo == 'peitos') 
    vetExercicios = ['Supino reto', 'Supino inclinado', 'Crossover', 'Peck Deck'];
  else if (musculo == 'costas' || musculo == 'costa') 
    vetExercicios = ['Puxada frontal', 'Remada curvada', 'Barra fixa', 'Remada unilateral'];
  else if (musculo == 'pernas' || musculo == 'perna') 
    vetExercicios = ['Agachamento', 'Leg press', 'Avanço', 'Cadeira extensora'];
  else if (musculo == 'ombros' || musculo == 'ombro') 
    vetExercicios = ['Desenvolvimento militar', 'Elevação lateral', 'Elevação frontal', 'Remada alta'];
  else if (musculo == 'abdômen' || musculo == 'abdomen') 
    vetExercicios = ['Prancha', 'Abdominal crunch', 'Elevação de pernas', 'Abdominal oblíquo'];
  else if (musculo == 'triceps' || musculo == 'tríceps') 
    vetExercicios = ['Tríceps pulley', 'Supino fechado', 'Mergulho', 'Tríceps testa'];
  else if (musculo == 'biceps' || musculo == 'bíceps') 
    vetExercicios = ['Rosca direta', 'Rosca martelo', 'Rosca concentrada', 'Rosca scott'];

  var disponiveis = [];

  for (var j = 0; j < vetExercicios.length; j++) {
    disponiveis.push(vetExercicios[j]);
  }

  var exerciciosSelecionados = '';

  for (var i = 0; i < 3; i++) {
    var posAleatoria = (Math.random() * disponiveis.length) | 0;

    if (i > 0) exerciciosSelecionados += ', ';
    exerciciosSelecionados += disponiveis[posAleatoria];

    for (var k = posAleatoria; k < disponiveis.length - 0; k++) {
      disponiveis[k] = disponiveis[k + 1];
    }

    disponiveis.length--;
  }

  var estiloTreino
  if (estiloTreino == 'pesado') {
    var estiloTreino = '2 séries de 6-10 reps';
  } else if (estiloTreino == 'médio' || estiloTreino == 'medio') {
    var estiloTreino = '3 séries de 8-12 reps';
  } else {
    var estiloTreino = '4 séries de 10-20 reps';
  }



  saida.innerHTML = `
  Calorias diárias: ${calorias} kcal<br>
  Proteínas: ${proteinas} g <br>
  Carboidratos: ${carboidratos} g<br>
  Gorduras: ${gorduras} g<br><br>
  Treino: ${estiloTreino}<br>
  Dias por semana: ${dias} dias<br><br>
  Treino principal: ${exerciciosSelecionados}
`;

  console.log({
    fkQuestionario,
    fkUsuario,
    altura,
    peso,
    idade,
    sexo,
    objetivo,
    musculo,
    estiloTreino,
    exerciciosSelecionados,
    calorias,
    carboidratos,
    proteinas,
    gorduras,
    dias
  });

  fetch('/protocoloRoute/cadastrarProtocolo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fkQuestionarioServer: fkQuestionario,
      fkUsuarioServer: fkUsuario,
      alturaServer: altura,
      pesoServer: peso,
      idadeServer: idade,
      sexoServer: sexo,
      objetivoServer: objetivo,
      musculoServer: musculo,
      estiloTreinoServer: estiloTreino,
      exerciciosServer: exerciciosSelecionados,
      caloriasServer: calorias,
      carboidratosServer: carboidratos,
      proteinasServer: proteinas,
      gordurasServer: gorduras,
      diasServer: dias
    })
  })
    .then(function (res) {
      console.log("Fez no fetch");
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(function (json) {
      console.log('>>> protocolo inserido:', json);
    })
    .catch(function (err) {
      console.error('>>> ERRO ao inserir protocolo:', err);
    });
}
