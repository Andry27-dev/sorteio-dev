document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button"); // Seleciona o botão de sorteio
    const inputMin = document.querySelector(".input-min"); // Seleciona o input mínimo
    const inputMax = document.querySelector(".input-max"); // Seleciona o input máximo
    const inputResultado = document.querySelector(".input-resultado"); // Seleciona o input do resultado

    button.addEventListener("click", function () {
        const min = parseInt(inputMin.value); // Converte o valor do input mínimo para número
        const max = parseInt(inputMax.value); // Converte o valor do input máximo para número

        if (isNaN(min) || isNaN(max) || min >= max) {
            alert("Por favor, insira valores válidos! O número mínimo deve ser menor que o máximo.");
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número aleatório

        inputResultado.value = randomNumber; // Exibe o número sorteado no input
    });
});
