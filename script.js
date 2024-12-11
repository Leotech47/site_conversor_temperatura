function converter() {
    const temperaturaInput = document.getElementById('temperatura');
    const unidadeInicial = document.getElementById('unidadeInicial').value;
    const unidadeFinal = document.getElementById('unidadeFinal').value;
    const resultadoElement = document.getElementById('resultado');

    const temperatura = parseFloat(temperaturaInput.value);

    // Funções de conversão
    function celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function celsiusParaKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function fahrenheitParaKelvin(fahrenheit) {
        return (fahrenheit + 459.67) * 5/9;
    }

    function kelvinParaCelsius(kelvin) {
        return kelvin - 273.15;
    }

    function kelvinParaFahrenheit(kelvin) {
        return (kelvin * 9/5) - 459.67;
    }

    let resultado;
    if (unidadeInicial === 'C' && unidadeFinal === 'F') {
        resultado = celsiusParaFahrenheit(temperatura);
    } else if (unidadeInicial === 'C' && unidadeFinal === 'K') {
        resultado = celsiusParaKelvin(temperatura);
    } else if (unidadeInicial === 'F' && unidadeFinal === 'C') {
        resultado = fahrenheitParaCelsius(temperatura);
    } else if (unidadeInicial === 'F' && unidadeFinal === 'K') {
        resultado = fahrenheitParaKelvin(temperatura);
    } else if (unidadeInicial === 'K' && unidadeFinal === 'C') {
        resultado = kelvinParaCelsius(temperatura);
    } else if (unidadeInicial === 'K' && unidadeFinal === 'F') {
        resultado = kelvinParaFahrenheit(temperatura);
    } else {
        resultado = "Unidades inválidas";
    }

    resultadoElement.textContent = `Resultado: ${resultado.toFixed(2)} ${unidadeFinal}`;
}
