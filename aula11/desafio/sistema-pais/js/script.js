function calcular() {
    const pais = document.getElementById('pais').value.trim();
    const resultadoDiv = document.getElementById('res');

    if (pais.toLowerCase() === 'brasil') {
        resultadoDiv.innerHTML = 'O país é brasileiro.';
    } else {
        resultadoDiv.innerHTML = 'O país é estrangeiro.';
    }
}