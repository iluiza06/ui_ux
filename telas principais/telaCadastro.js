document.getElementById('criarContaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;
    const errorMessage = document.getElementById('errorMessage');
    
    const requiredFields = ['nome', 'sobrenome', 'cep', 'endereco', 'bairro', 'email', 'telefone', 'telefoneemergencia', 'contatodeemergencia', 'senha'];

    requiredFields.forEach(function(id) {
        const input = document.getElementById(id);
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = 'red'; 
        } else {
            input.style.borderColor = ''; 
        }
    });

    if (!isValid) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        window.location.href = './login.html'; 
    }
});

document.querySelector('.ccprofissional').addEventListener('click', function() {
    window.location.href = './cad_func.html'; 
});
