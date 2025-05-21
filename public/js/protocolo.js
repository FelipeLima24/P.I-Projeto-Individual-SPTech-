var valorTMB = 0;

function calcular() {
  var msg = document.getElementById('msg');
  var peso = document.getElementById('ipt_peso').value * 1;
  var altura = document.getElementById('ipt_altura').value * 1;
  var idade = document.getElementById('ipt_idade').value * 1;
  var sexo = document.getElementById('ipt_sexo').value.toLowerCase();


  console.log("peso", peso)


  // cálculo da TMB
  if (sexo === 'm') {
    valorTMB = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    valorTMB = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }
  msg.innerHTML = `Sua taxa metabólica basal é de ${valorTMB} kcal/dia`;
}

function protocolo() {
  calcular();
  var dias = document.getElementById('ipt_dias').value * 1;
  var saida = document.getElementById('saida');
  var texto = document.getElementById('msg').innerHTML;

  if (texto.indexOf('kcal') < 0) {
    saida.innerHTML = `Primeiro calcule a TMB.`;
  } else {
    var tmb = valorTMB;

    var tempCal = tmb * 1.2;
    var calorias = tempCal - (tempCal % 1);

    var pesoVal = document.getElementById('ipt_peso').value * 1;
    var tempProt = pesoVal * 2;
    var proteina = tempProt - (tempProt % 1);

    var tempCarb = (calorias * 0.5) / 4;
    var carbo = tempCarb - (tempCarb % 1);

    var tempGord = (calorias * 0.25) / 9;
    var gordura = tempGord - (tempGord % 1);

    var estilo = document.getElementById('ipt_estilo').value.toLowerCase();
    var series = 4;
    var repeticoes = '10-20';
    if (estilo === 'pesado') {
      series = 2; repeticoes = '6-10';
    } else if (estilo === 'médio' || estilo === 'medio') {
      series = 3; repeticoes = '8-12';
    }

    var musculo = document.getElementById('ipt_musculo').value.toLowerCase();
    var vetExercicios = [];
    if (musculo === 'peito') vetExercicios = ['Supino reto', 'Supino inclinado', 'Crossover', 'Peck Deck'];
    else if (musculo === 'costas') vetExercicios = ['Puxada frontal', 'Remada curvada', 'Barra fixa', 'Remada unilateral'];
    else if (musculo === 'pernas') vetExercicios = ['Agachamento', 'Leg press', 'Avanço', 'Cadeira extensora'];
    else if (musculo === 'ombros') vetExercicios = ['Desenvolvimento militar', 'Elevação lateral', 'Elevação frontal', 'Remada alta'];
    else if (musculo === 'abdômen') vetExercicios = ['Prancha', 'Abdominal crunch', 'Elevação de pernas', 'Abdominal oblíquo'];
    else if (musculo === 'quadriceps') vetExercicios = ['Agachamento frontal', 'Cadeira extensora', 'Afundo no banco', 'Pistol squat'];
    else if (musculo === 'posterior') vetExercicios = ['Stiff', 'Mesa flexora', 'Good morning', 'Deadlift romeno'];
    else if (musculo === 'gluteo') vetExercicios = ['Glute bridge', 'Elevação pélvica', 'Kickback no cabo', 'Sumô deadlift'];
    else if (musculo === 'panturrilha') vetExercicios = ['Gêmeos em pé', 'Gêmeos sentado', 'Leg press panturrilha'];
    else if (musculo === 'triceps') vetExercicios = ['Tríceps pulley', 'Supino fechado', 'Mergulho', 'Tríceps testa'];
    else if (musculo === 'biceps') vetExercicios = ['Rosca direta', 'Rosca martelo', 'Rosca concentrada', 'Rosca scott'];


    var disponiveis = [];
    for (var j = 0; j < vetExercicios.length; j = j + 1) {
      disponiveis[disponiveis.length] = vetExercicios[j];
    }
    var exerciciosSelecionados = '';
    for (var i = 0; i < 3; i = i + 1) {
      var posAleatoria = (Math.random() * disponiveis.length) | 0;
      if (i > 0) exerciciosSelecionados += ', ';
      exerciciosSelecionados += disponiveis[posAleatoria];
      for (var k = posAleatoria; k < disponiveis.length - 1; k = k + 1) {
        disponiveis[k] = disponiveis[k + 1];
      }
      disponiveis.length = disponiveis.length - 1;
    }

    saida.innerHTML = `
• Calorias diárias: ${calorias} kcal<br>
• Proteína: ${proteina} g<br>
• Carboidrato: ${carbo} g<br>
• Gordura: ${gordura} g<br><br>
Treino: ${series} séries de ${repeticoes} repetições<br>
Dias por semana: ${dias} dias<br><br>
Treino principal: ${exerciciosSelecionados}
`;
  }
}

console.log({
  idTreino: document.getElementById('ipt_treino'),
  idDieta: document.getElementById('ipt_dieta'),
  fkUsuario: document.getElementById('ipt_usuario'),

});

fetch('/protocoloRoute/cadastrarProtocolo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    idTreinoServer: idTreino,
    idDietaServer: idDieta,
    fkUsuarioServer: fkUsuario,
    dtInicioServer: dtInicio

  })
})
  .then(res => {
    console.log("Fez no fetch")
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(json => console.log('>>> protocolo inserido:', json))
  .catch(err => console.error('>>> ERRO ao inserir protocolo:', err));

