$('#phone').mask('(00) 00000-0000');

const nome = document.getElementById('text-nome');
const sobrenome = document.getElementById('text-sobrenome');
const email = document.getElementById('text-email');
const telefone = document.getElementById('phone');
const btnCadastro = document.getElementById('btn-cadastro');

function cadastro(event) {
    event.preventDefault();

    const nomeInput = nome.value.trim();
    const sobrenomeInput = sobrenome.value.trim();
    const emailInput = email.value.trim();
    const telefoneInput = telefone.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

    if (nomeInput === '' || sobrenomeInput === '' || emailInput === '' || telefoneInput === '') {
            alert('Por favor, preencha todos os campos.');
            return;
    } 
    
    if (!emailRegex.test(emailInput)) {
            alert('Por favor, insira um email válido.');
            return;
    }
    alert('Cadastro realizado com sucesso!');
    window.location.href = '/src/pages/login/login.html';

    localStorage.setItem('nome', nomeInput);
    localStorage.setItem('sobrenome', sobrenomeInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('telefone', telefoneInput);
}

btnCadastro.addEventListener('click', cadastro);
