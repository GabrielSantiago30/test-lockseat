const form = document.getElementById('cadastroForm');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const cnpjInput = document.getElementById('cnpj');
const validationMessage = document.getElementById('validationMessage');
const passwordMatch = document.getElementById('passwordMatch');
const cnpjValidationMessage = document.getElementById('cnpjValidationMessage');

senhaInput.addEventListener('input', validarSenha);
confirmarSenhaInput.addEventListener('input', validarRepeticaoSenha);
cnpjInput.addEventListener('input', validarCNPJ);

function validarSenha() {
    const value = senhaInput.value;
    let validCount = 0;

    if (value.length >= 8) {
        document.getElementById('ruleLength').classList.add('valid');
        validCount++;
    } else {
        document.getElementById('ruleLength').classList.remove('valid');
    }

    if (/[A-Z]/.test(value)) {
        document.getElementById('ruleUppercase').classList.add('valid');
        validCount++;
    } else {
        document.getElementById('ruleUppercase').classList.remove('valid');
    }

    if (/[a-z]/.test(value)) {
        document.getElementById('ruleLowercase').classList.add('valid');
        validCount++;
    } else {
        document.getElementById('ruleLowercase').classList.remove('valid');
    }

    if (/\d/.test(value)) {
        document.getElementById('ruleNumber').classList.add('valid');
        validCount++;
    } else {
        document.getElementById('ruleNumber').classList.remove('valid');
    }

    if (/[\W_]/.test(value)) {
        document.getElementById('ruleSpecial').classList.add('valid');
        validCount++;
    } else {
        document.getElementById('ruleSpecial').classList.remove('valid');
    }

    if (validCount === 5) {
        validationMessage.textContent = "Senha válida";
        validationMessage.style.color = "green";
        return true;
    } else {
        validationMessage.textContent = "Senha inválida";
        validationMessage.style.color = "red";
        return false;
    }
}

function validarRepeticaoSenha() {
    if (senhaInput.value === confirmarSenhaInput.value) {
        passwordMatch.classList.remove('hidden');
        passwordMatch.textContent = 'As senhas coincidem!';
        return true;
    } else {
        passwordMatch.classList.add('hidden');
        passwordMatch.textContent = '';
        return false;
    }
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validarSenha() && validarRepeticaoSenha() && validarCNPJ()) {
        validationMessage.style.color = "green";
        // Redireciona para a nova página se todos os campos forem válidos
        window.location.href = "index.html";
    } else {
        validationMessage.style.color = "red";
    }
});

module.exports = {validarCNPJ};


