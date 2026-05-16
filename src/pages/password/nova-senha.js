const btnAcessar = document.getElementById('btn-acessar');

function continuar(event) {
    event.preventDefault();

    window.location.href = 'https://mail.google.com';
}

btnAcessar.addEventListener('click', continuar);