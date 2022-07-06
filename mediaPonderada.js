const calcular = document.getElementById('calcular');

function validate() {
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');
    const resultado = document.getElementById('resultado');

    const mediaPonderada = (nota1.value * 2 + nota2.value * 3 + nota3.value * 5) / 10;

    nota1.style.border = 'none';
    nota2.style.border = 'none';
    nota3.style.border = 'none';

    if (!nota1.value || !nota2.value || !nota3.value) {
        if (!nota1.value && !nota2.value && !nota3.value) {
            nota1.style.border = '2px solid red';
            nota2.style.border = '2px solid red';
            nota3.style.border = '2px solid red';
        } else if (!nota1.value && !nota2.value) {
            nota1.style.border = '2px solid red';
            nota2.style.border = '2px solid red';
        } else if (!nota1.value && !nota3.value) {
            nota1.style.border = '2px solid red';
            nota3.style.border = '2px solid red';
        } else if (!nota2.value && !nota3.value) {
            nota2.style.border = '2px solid red';
            nota3.style.border = '2px solid red';
        } else if (!nota1.value) {
            nota1.style.border = '2px solid red';
        } else if (!nota2.value) {
            nota2.style.border = '2px solid red';
        } else {
            nota3.style.border = '2px solid red';
        }
    } else {
        resultado.textContent = `A média final do Aluno foi ${mediaPonderada}.`;
    }
}

calcular.addEventListener('click', validate);