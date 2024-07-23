// Gerar número aleatório entre 1 e 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guessInput = document.getElementById('guessInput');
    let guess = parseInt(guessInput.value);

    // Verificar se o palpite é um número
    if (isNaN(guess)) {
        showMessage('Por favor, insira apenas números.');
        return;
    }

    // Verificar se o palpite está correto
    if (guess === randomNumber) {
        showMessage('Parabéns! Você acertou!');
    } else {
        // Verificar se o palpite é maior ou menor que o número aleatório
        let message = (guess < randomNumber) ? 'Tente um número maior.' : 'Tente um número menor.';
        showMessage(message);
    }
}

function showMessage(msg) {
    let messageElement = document.getElementById('message');
    messageElement.textContent = msg;
}
