document.addEventListener('DOMContentLoaded', function () {
    var botaoSalvar = document.getElementById("salvar");
    var mensagemErro = document.getElementById("error-message");

    botaoSalvar.addEventListener('click', function (event) {
        var novaSenha = document.getElementById("novasenha").value;
        var confirmaSenha = document.getElementById("confirmanovasenha").value;

        if (novaSenha === "" || confirmaSenha === "") {
            mensagemErro.innerText = "Por favor, preencha ambos os campos de senha.";
            mensagemErro.style.display = "inline";
            event.preventDefault(); 
        } 
        else if (novaSenha !== confirmaSenha) {
            mensagemErro.innerText = "As senhas não coincidem";
            mensagemErro.style.display = "inline";
            event.preventDefault(); 
        } 
        else if (!/^\d{4}$/.test(novaSenha)) {
            mensagemErro.innerText = "A senha deve conter exatamente 4 dígitos numéricos.";
            mensagemErro.style.display = "inline";
            event.preventDefault(); 
        } 
        else {
            mensagemErro.style.display = "none";
        }
    });
});