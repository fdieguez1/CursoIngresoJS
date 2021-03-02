/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidadLamparas;
    var argentinaLuz;
    var felipeLamparas;
    var descuentoAplicable;
    var comboMarca;
    var calculo;
    var descuentoCalculado;
    var precioLamparita

    cantidadLamparas = txtIdCantidad.value;
    var cantidadLamparasParsed = parseInt(cantidadLamparas);
    argentinaLuz = "ArgentinaLuz";
    felipeLamparas = "FelipeLamparas";
    precioLamparita = 35;
    comboMarca = Marca.value;

    if (cantidadLamparasParsed > 5) {
        descuentoAplicable = 50;
    }
    else {
        if (cantidadLamparasParsed > 4) {
            if (comboMarca != argentinaLuz) {
                descuentoAplicable = 30;
            }
            else {
                descuentoAplicable = 40;
            }
        }
        if (cantidadLamparasParsed > 3) {
            if (comboMarca == argentinaLuz || comboMarca == felipeLamparas) {
                descuentoAplicable = 25;
            }
            else {
                descuentoAplicable = 20;
            }
        }
        if (cantidadLamparas > 2) {
            if (comboMarca == argentinaLuz) {
                descuentoAplicable = 15;
            }
            else {
                if (comboMarca == felipeLamparas) {
                    descuentoAplicable = 10;
                }
                else {
                    descuentoAplicable = 5;
                }
            }
        }
    }

    totalLamparasSinDescuento = cantidadLamparasParsed * precioLamparita;
    descuentoCalculado = totalLamparasSinDescuento * descuentoAplicable / 100;
    calculo = totalLamparasSinDescuento - descuentoCalculado;

    if (calculo > 119) {
        var impuesto;
        impuesto = calculo * 10 / 100;
        txtIdprecioDescuento.value = calculo + impuesto;
        alert("Usted pago " + impuesto + " de IIBB.”, siendo " + impuesto + " el impuesto que se pagó.")
    }
    else {
        txtIdprecioDescuento.value = calculo;
    }
}
