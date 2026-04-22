
const nome = document.getElementById('text-nome'); 
const email = document.getElementById('text-email');
const btnEntrar = document.getElementById('btn-entrar');

function entrar(event) {
    event.preventDefault();

    const nomeInput = nome.value.trim();
    const emailInput = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

    if (nomeInput === '' || emailInput === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!emailRegex.test(emailInput)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Guardar dados antes de navegar
    localStorage.setItem('nomeUsuario', nomeInput);
    localStorage.setItem('emailUsuario', emailInput);

    alert('Login realizado com sucesso!');
    window.location.href = '/src/pages/bem-vindo/saudacao.html';
}

btnEntrar.addEventListener('click', entrar);