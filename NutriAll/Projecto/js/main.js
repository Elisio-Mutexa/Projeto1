// Função para o ícone do menu
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
  if (ul.classList.contains('ativo')) {
    ul.classList.remove('ativo');
    document.querySelector('.menu-icon img').src = 'img/menu.png';
  } else {
    ul.classList.add('ativo');
    document.querySelector('.menu-icon img').src = 'img/close.png';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Função para animar a contagem dos números
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Selecionar todos os spans que precisam ser animados
  const spans = document.querySelectorAll('.resultados-numero span');
  spans.forEach((span) => {
    const endValue = parseInt(span.textContent.replace(/[^\d]/g, '')); // Remover caracteres não numéricos e converter para inteiro
    animateValue(span, 0, endValue, 2000); // Animar por 2 segundos
  });

  // Formulário de agendamento
  const agendamentoForm = document.getElementById("agendamentoForm");
  const responseMessage = document.getElementById("responseMessage");

  agendamentoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Validação básica
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !phone || !service || !date || !time) {
      responseMessage.textContent = "Por favor, preencha todos os campos.";
      responseMessage.style.color = "red";
      return;
    }

    // Se passar na validação, exibe a mensagem de sucesso
    responseMessage.textContent = "Serviço agendado com sucesso!";
    responseMessage.style.color = "green";

    // Opcional: Limpa o formulário após o envio
    agendamentoForm.reset();
  });
});
