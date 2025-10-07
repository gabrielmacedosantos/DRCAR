/* ========================================= */
/* CONFIGURAÇÕES GLOBAIS                    */
/* ========================================= */
const CONFIG = {
  whatsapp: '5511976490335',
  endereco: 'R. Valdomiro Cavazzani, 590A - Osasco - SP'
};

/* ========================================= */
/* DADOS DOS PACOTES                        */
/* ========================================= */
const pacotes = [
  {
    nome: 'Bronze',
    preco: 149,
    classe: 'package-bronze',
    itens: ['Lavagem Técnica Simples', 'Enceramento Wax Protection'],
    popular: false
  },
    {
    nome: 'Gold',
    preco: 399,
    classe: 'package-gold',
    itens: [
      'Todos os itens do Silver',
      'Higienização Germicida interna',
      'Tratamento dos plásticos internos e externos',
      'Tratamento dos vidros',
      'Cristalização do Para-Brisa (6 meses)',
      'Proteção de 3 Anos'
    ],
    popular: true
  },
  {
    nome: 'Silver',
    preco: 249,
    classe: 'package-silver',
    itens: ['Lavagem Técnica Detalhada', 'Enceramento com Carnaúba', 'Revitalização de Plásticos'],
    popular: false
  },
];

/* ========================================= */
/* DADOS DOS SERVIÇOS                       */
/* ========================================= */
const servicos = [
  {
    nome: 'Lavagem Técnica',
    descricao: 'Lavagem essencial para cuidar da pintura. Abrange todas as áreas, incluindo rodas e regiões de difícil acesso.',
    imagem: 'https://www.olhardireto.com.br/imgsite/noticias/FOTO-LUCIANA-03.jpg'
  },
  {
    nome: 'Enceramento Wax',
    descricao: 'Cria uma película de proteção sobre a lataria, vedando os micro poros da pintura.',
    imagem: 'https://surfnshine.com/wp-content/uploads/2023/07/waxing-a-brand-new-car-1024x576.jpg'
  },
  {
    nome: 'Revitalização de Plásticos Externos',
    descricao: 'Traz vida e visual mais atraente às peças que ficam expostas ao sol e chuva.',
    imagem: 'https://img.br.my-best.com/content_section/beforehand_tips/9e736c4e023a30fc43eeb6652dbdcfd1.jpg'
  },
  {
    nome: 'Polimento de Pintura',
    descricao: 'Reaviva a cor e brilho da lataria, além de eliminar riscos superficiais.',
    imagem: 'https://neycostaautocenter.com.br/wp-content/uploads/2022/08/polishing-car-after-painting-detailing-car-from-outside-device-polishing-hands2.jpg'
  },
  {
    nome: 'Hidratação de Couro',
    descricao: 'Equilibra o PH do couro com produtos naturais, eliminando rangidos.',
    imagem: 'https://www.artesaodaslatas.com.br/imagens/valor-de-hidratacao-dos-bancos-de-couro.png'
  },
  {
    nome: 'Impermeabilização dos Tecidos',
    descricao: 'Super proteção do tecido, maior durabilidade e prevenção de fungos.',
    imagem: 'https://premiumautosom.com.br/wp-content/uploads/2023/01/Servico-de-impermeabilizacao-de-banco.png'
  },
  {
    nome: 'Higienização do Porta Malas',
    descricao: 'Limpeza completa a seco que elimina sujeira e bactérias.',
    imagem: 'https://www.acquazero.com/wp-content/uploads/2022/02/porta-malas-acquazero.jpg'
  },
  {
    nome: 'Higienização da Cadeirinha',
    descricao: 'Elimina sujeira, mau cheiro e bactérias que podem fazer mal ao seu bebê.',
    imagem: 'https://www.demaisclean.com.br/public/uploads/1616252537-service-15.jpg'
  },
  {
    nome: 'Cristalização de Pintura',
    descricao: 'Proteção superior sobre a lataria, vedando micro poros da pintura.',
    imagem: 'https://blog.casadosoldador.com.br/wp-content/uploads/2022/09/renovar-a-pintura-apos-anos-de-uso.jpg'
  },
  {
    nome: 'Vitrificação de Pintura',
    descricao: 'Proteção contra desgaste pelo tempo e pequenos acidentes.',
    imagem: 'https://www.webmotors.com.br/wp-content/uploads/2020/08/20094405/vitrifica%C3%A7%C3%A3o-da-pintura-1.jpg'
  },
  {
    nome: 'Revitalização de Plásticos Internos',
    descricao: 'Traz vida e visual mais atraente às peças internas desbotadas.',
    imagem: 'https://blog.mixauto.com.br/wp-content/uploads/2018/01/capa.jpg'
  },
  {
    nome: 'Vitrificação de Vidros',
    descricao: 'Evita fixação de sujeiras e melhora a visibilidade.',
    imagem: 'https://images.tcdn.com.br/img/img_prod/1109830/vitria_ceramic_30ml_easytech.jpg'
  },
  {
    nome: 'Descontaminação de Pintura',
    descricao: 'Remove contaminantes que deixam a pintura áspera.',
    imagem: 'https://blog.anjo.com.br/wp-content/uploads/2024/02/como-descontaminar-pintura-automotiva.png'
  },
  {
    nome: 'Polimento de Faróis',
    descricao: 'Remove arranhões e opacidade, aumentando a iluminação.',
    imagem: 'https://img.freepik.com/fotos-gratis/amplo-plano-do-processo-de-cuidados-com-o-carro.jpg'
  },
  {
    nome: 'Limpeza Técnica de Motor',
    descricao: 'Limpeza artesanal com produtos biodegradáveis, sem água.',
    imagem: 'https://freewet.com.br/wp-content/uploads/2019/09/limpeza-tecnica-de-motor-01-635x420.jpg'
  },
  {
    nome: 'Higienização Interna',
    descricao: 'Limpeza detalhada incluindo teto, painel, portas e carpete.',
    imagem: 'https://www.alertaclean.com.br/wp-content/uploads/2019/05/higienizacao-carros-1.jpg'
  },
  {
    nome: 'Remoção de Chuva Ácida',
    descricao: 'Recupera o visual eliminando danos causados por chuvas ácidas.',
    imagem: 'https://www.drydream.net.br/imagens/informacoes/remover-chuva-acida-03.jpg'
  },
  {
    nome: 'Aplicação de Insulfilm',
    descricao: 'Proteção, privacidade e conforto com películas de alta performance.',
    imagem: 'https://www.hondacaiuas.com.br/wp-content/uploads/2024/03/lei-do-insulfilm.jpg'
  }
];

/* ========================================= */
/* DADOS DOS SERVIÇOS EXTRAS                */
/* ========================================= */
const servicosExtras = [
  {
    nome: 'Lavagem de Tapetes',
    descricao: 'Remove sujeiras profundas, ácaros e manchas, revitalizando cores e maciez.',
    imagem: 'https://images.homify.com/v1588086407/p/photo/image/3459885/lavanderia-tapete.jpg'
  },
  {
    nome: 'Limpeza e Higienização de Sofá',
    descricao: 'Método de extração que limpa profundamente as fibras, removendo agentes alérgicos.',
    imagem: 'https://absolutahigienizacao.com.br/wp-content/uploads/higienizacao-de-sofa.jpg'
  },
  {
    nome: 'Impermeabilização de Estofados',
    descricao: 'Escudo protetor que aumenta a vida útil do tecido, mantendo-o limpo.',
    imagem: 'https://sebrae.com.br/Sebrae/Portal%20Sebrae/Ideias%20de%20Negocio/Importer/Images/270_background.webp'
  },
  {
    nome: 'Aplicação de Insulfilm em Janelas',
    descricao: 'Barreira contra raios solares, preservando móveis e reduzindo calor.',
    imagem: 'https://rikinfilm.com.br/wp-content/uploads/2024/04/Insulfilm-para-Janelas-de-Apartamento-1-770x515.jpg'
  }
];

/* ========================================= */
/* FUNÇÕES DE RENDERIZAÇÃO                  */
/* ========================================= */

// Renderiza os pacotes
function renderizarPacotes() {
  const container = document.getElementById('pacotes-container');
  if (!container) return;

  container.innerHTML = pacotes.map(pacote => `
    <div class="col-lg-4 mb-4 reveal">
      <div class="card h-100 d-flex flex-column package-card ${pacote.classe} ${pacote.popular ? 'popular' : ''}">
        <div class="card-header text-center position-relative">
          <h3 class="fw-normal">${pacote.nome}</h3>
          ${pacote.popular ? '<span class="badge bg-warning text-dark flex-end-0 translate-middle-y">Popular</span>' : ''}
        </div>
        <div class="card-body d-flex flex-column">
          <div class="text-center my-4">
            <span class="display-4 fw-bold">R$${pacote.preco}</span>
            <span class="text-light">/mês</span>
          </div>
          <ul class="list-unstyled">
            ${pacote.itens.map(item => `
              <li class="mb-3"><i class="bi bi-check-circle-fill me-2"></i>${item}</li>
            `).join('')}
          </ul>
          <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de contratar o plano ${pacote.nome} de R$${pacote.preco}/mês`)}"
             class="btn ${pacote.popular ? 'btn-warning' : 'btn-outline-light'} mt-auto fw-bold">
            Selecionar ${pacote.nome}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Renderiza os serviços
function renderizarServicos() {
  const container = document.getElementById('servicos-container');
  if (!container) return;

  container.innerHTML = servicos.map(servico => `
    <div class="col-md-4 mb-4 reveal">
      <div class="card h-100 d-flex flex-column service-card">
        <img src="${servico.imagem}" class="card-img-top" alt="${servico.nome}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold text-light">${servico.nome}</h5>
          <p class="card-text text-light">${servico.descricao}</p>
          <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de solicitar o serviço *${servico.nome}*. Aguardo retorno para agendamento e orçamento.`)}"
             class="btn btn-outline-warning mt-auto">Pedir Orçamento</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Renderiza os serviços extras
function renderizarServicosExtras() {
  const container = document.getElementById('servicos-extras-container');
  if (!container) return;

  container.innerHTML = servicosExtras.map(servico => `
    <div class="col-md-6 col-lg-3 mb-4 reveal">
      <div class="card h-100 d-flex flex-column service-card">
        <img src="${servico.imagem}" class="card-img-top" alt="${servico.nome}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold text-light">${servico.nome}</h5>
          <p class="card-text text-light">${servico.descricao}</p>
          <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de solicitar o serviço *${servico.nome}*. Aguardo retorno para agendamento e orçamento.`)}"
             class="btn btn-outline-warning mt-auto">Pedir Orçamento</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Preenche o select de serviços para leva e traz
function preencherSelectServicos() {
  const select = document.getElementById('servicoLevaTrazSelect');
  if (!select) return;

  const todosServicos = [...servicos.map(s => s.nome), ...servicosExtras.map(s => s.nome)];
  
  select.innerHTML = '<option value="" selected disabled>Escolha um serviço...</option>' +
    todosServicos.map(servico => `<option value="${servico}">${servico}</option>`).join('');
}

/* ========================================= */
/* ANIMAÇÃO DE SCROLL REVEAL                */
/* ========================================= */
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

/* ========================================= */
/* FORMULÁRIO LEVA E TRAZ                   */
/* ========================================= */
function configurarFormularioLevaETraz() {
  const select = document.getElementById('servicoLevaTrazSelect');
  const campos = document.getElementById('levaeTrazCampos');
  const form = document.getElementById('agendamentoForm');

  if (select) {
    select.addEventListener('change', function() {
      if (this.value) {
        campos.style.display = 'block';
      } else {
        campos.style.display = 'none';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const servico = document.getElementById('servicoLevaTrazSelect').value;
      const endereco = document.getElementById('endereco').value.trim();
      const numero = document.getElementById('numero').value.trim();
      const complemento = document.getElementById('complemento').value.trim();
      const cep = document.getElementById('cep').value.trim();
      const veiculo = document.getElementById('veiculo').value.trim();
      const telefone = document.getElementById('telefone').value.trim();

      if (!servico || !endereco || !numero || !cep || !veiculo || !telefone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const mensagem = `Olá, gostaria de agendar o serviço *Leva e Traz* para o serviço de *${servico}*.\n\n` +
                      `*Detalhes da Coleta:*\n` +
                      `*Endereço:* ${endereco}, ${numero}\n` +
                      `${complemento ? `*Complemento:* ${complemento}\n` : ''}` +
                      `*CEP:* ${cep}\n` +
                      `*Veículo:* ${veiculo}\n\n` +
                      `*Contato:*\n` +
                      `*Telefone:* ${telefone}\n\n` +
                      `Por favor, informe o valor e a disponibilidade para agendamento.`;

      const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });
  }
}

/* ========================================= */
/* NAVEGAÇÃO SUAVE                          */
/* ========================================= */
function configurarNavegacaoSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Fecha o menu mobile
          const navCollapse = document.querySelector('.navbar-collapse');
          if (navCollapse && navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
          }
        }
      }
    });
  });
}

/* ========================================= */
/* MÁSCARA DE TELEFONE E CEP               */
/* ========================================= */
function aplicarMascaras() {
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (telefone) {
    telefone.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
      }
      e.target.value = value;
    });
  }

  if (cep) {
    cep.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 8) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
      }
      e.target.value = value;
    });
  }
}

/* ========================================= */
/* INICIALIZAÇÃO                            */
/* ========================================= */
document.addEventListener('DOMContentLoaded', function() {
  // Renderiza todo o conteúdo
  renderizarPacotes();
  renderizarServicos();
  renderizarServicosExtras();
  preencherSelectServicos();
  
  // Configura funcionalidades
  configurarFormularioLevaETraz();
  configurarNavegacaoSuave();
  aplicarMascaras();
  
  // Executa reveal inicial
  reveal();
});

// Adiciona listener de scroll
window.addEventListener('scroll', reveal);