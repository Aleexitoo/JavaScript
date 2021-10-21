function area(radio) {
    const PI = 3.14;
    var radio = document.getElementById("radio").value
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado;
}