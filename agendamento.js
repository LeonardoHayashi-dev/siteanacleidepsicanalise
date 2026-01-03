document.getElementById('formAgendamento').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const email = document.getElementById('email').value;
  const motivo = document.getElementById('motivo').value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const mensagem = `Olá, gostaria de agendar uma consulta.%0A
Nome: ${nome}%0A
WhatsApp: ${whatsapp}%0A
Email: ${email}%0A
Motivo: ${motivo}%0A
Tipo: ${tipo}`;

  const numero = '5511976780584'; // coloque o número

  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});