function operacion() {
    const PI = 3.14;
    function area(radio) {
        var area = PI * radio * radio;
        console.log("El area del circulo es: " +area);

    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);