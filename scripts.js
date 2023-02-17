function calcularMediaMedianaModa(array) {
    // Calcular a média
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    const media = soma / array.length;

    // Calcular a mediana
    array.sort((a, b) => a - b);
    let mediana;
    if (array.length % 2 === 0) {
        mediana = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        mediana = array[Math.floor(array.length / 2)];
    }

    // Calcular a moda
    const frequencia = {};
    let moda;
    let maxFrequencia = 0;
    for (let i = 0; i < array.length; i++) {
        const valor = array[i];
        frequencia[valor] = (frequencia[valor] || 0) + 1;
        if (frequencia[valor] > maxFrequencia) {
            maxFrequencia = frequencia[valor];
            moda = valor;
        }
    }

    return {
        media: media,
        mediana: mediana,
        moda: moda,
    };
}

const array = [1, 56, 78, 32, 46, 250, 56, 95, 20, 56, 20];
const resultado = calcularMediaMedianaModa(array);
console.log(resultado)
