// Função para a animação de revelação ao rolar a página
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // Distância para o elemento aparecer

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Adiciona o listener para o evento de scroll
window.addEventListener("scroll", reveal);

// Roda a função uma vez no carregamento para checar elementos já visíveis
reveal();

document.getElementById('servicoLevaTrazSelect').addEventListener('change', function () {
  const servicoSelecionado = this.value;
  const levaeTrazCampos = document.getElementById('levaeTrazCampos');

  if (servicoSelecionado) {
    levaeTrazCampos.style.display = 'block';
  } else {
    levaeTrazCampos.style.display = 'none';
  }
});

document.getElementById('servicoLevaTrazSelect').addEventListener('change', function () {
  const servicoSelecionado = this.value;
  const levaeTrazCampos = document.getElementById('levaeTrazCampos');

  if (servicoSelecionado) {
    levaeTrazCampos.style.display = 'block';
  } else {
    levaeTrazCampos.style.display = 'none';
  }
});

document.getElementById('agendamentoForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const servicoSelecionado = document.getElementById('servicoLevaTrazSelect').value;
  const endereco = document.getElementById('endereco').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const veiculo = document.getElementById('veiculo').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const numeroWhatsApp = '5511976490335';

  if (!servicoSelecionado) {
    alert('Por favor, selecione um serviço para agendar a coleta.');
    return;
  }

  if (endereco === '' || numero === '' || cep === '' || veiculo === '' || telefone === '') {
    alert('Por favor, preencha todos os campos obrigatórios para o agendamento.');
    return;
  }

  const mensagem = `Olá, gostaria de agendar a coleta do meu veículo para o serviço de *${servicoSelecionado}*.\n\n*Detalhes da Coleta:*\n*Endereço:* ${endereco}, ${numero}\n*Complemento:* ${complemento}\n*CEP:* ${cep}\n*Veículo:* ${veiculo}\n\n*Contato:*\n*Telefone:* ${telefone}\n\nPor favor, informe o valor e a disponibilidade para agendamento.`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, '_blank');
});