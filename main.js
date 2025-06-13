document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const idade = parseInt(document.getElementById('idade').value.trim(), 10);
  const interessesInput = document.getElementById('interesses').value.trim();
  const interessesArray = interessesInput
    .toLowerCase()
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0);
  const gostaDeMusica = interessesArray.includes('música') || interessesArray.includes('musica');
  const usuario = {
    nome,
    email,
    idade,
    interesses: interessesArray,
    gostaDeMusica
  };
  const resultado = document.getElementById('resultado');
  resultado.style.display = 'block';
  resultado.innerHTML = `
    <h2>Cadastro Realizado com Sucesso!</h2>
    <p><strong>Nome:</strong> ${usuario.nome}</p>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Idade:</strong> ${usuario.idade}</p>
    <p><strong>Interesses:</strong> ${usuario.interesses.join(', ')}</p>
    <p><strong>Gosta de música?</strong> ${usuario.gostaDeMusica ? 'Sim' : 'Não'}</p>
  `;
  console.log('Usuário cadastrado:', usuario);
});
