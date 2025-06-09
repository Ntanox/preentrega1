// opciones del los creditos 
const opciones = [
{tipos: "hipotecario", tasa: 60},
{tipos: "personal", tasa: 30},
{tipos: "automotriz", tasa: 40},
];

// mostrar opciones y tipos de creditos
function pedirTipoCredito(){
    let mensaje = "Tipos de créditos disponibles:\n";
    for (let i = 0; i < opciones.length; i++) {
        mensaje += `${i + 1}. ${opciones[i].tipos} (tasa: ${opciones[i].tasa}%)\n`;
    }
    const seleccion = prompt(mensaje + "ingrese el numero de la opcion deseada):");
    const indice = parseInt(seleccion) - 1;
    if (indice >= 0 && indice < opciones.length) {
        return opciones[indice];
    
    } else{
        alert ("Opción no valida . Por favor, intente de nuevo.");
        return pedirTipoCredito();
    }
}
//funcion para calcular el monto final
function calcularMontoFinal(monto, tasa, cuota) {

    return monto * (1 + (tasa / 100) * cuota);
    
}

 //funcion base del simulador
 function iniciarSimulador() {
    alert("Bienvenido al simulador de créditos");
    const credito = pedirTipoCredito();
    const monto = parseFloat(prompt("Ingrese el monto del crédito:"));
    const cuota = parseInt(prompt("Ingrese el número de cuotas:"));
    if (isNaN(monto) || isNaN(cuota) || monto <= 0 || cuota <= 0) {
        alert("Monto o número de cuotas inválidos. Por favor, intente de nuevo.");
        return iniciarSimulador();
    }
    const montoFinal = calcularMontoFinal(monto, credito.tasa, cuota);
    alert(`El monto final a pagar por el crédito ${credito.tipo} es: $${montoFinal.toFixed(2)}`);   
}
iniciarSimulador();