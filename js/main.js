alert(`Bienvenido a la Segunda Pre-Entrega del Proyecto Final JavaScript.
       
Nota: Para Cerrar, presione 0.`);

//Variables para almacenar el precio de las pizzas.
const precio_1 = 2100.0;
const precio_2 = 2300.0;
const precio_3 = 2225.0;
const precio_4 = 2600.0;
const precio_5 = 2400.0;
const precio_6 = 2800.0;
const precio_7 = 2800.0;
const precio_8 = 2700.0;

//Menú de elección de Pizzas para la compra:
alert(`Elija el número de la pizza que quiere comprar:`);
let elegirPizza = Number(
  prompt(` PIZZA:               PRECIO:
         1-Muzzarella:       $ ${precio_1} 
         2-Roquefort:        $ ${precio_2} 
         3-Jamón:            $ ${precio_3}
         4-Jamón y Morrones: $ ${precio_4} 
         5-Fugazza:          $ ${precio_5}
         6-Napolitana:       $ ${precio_6}
         7-Jamon y Huevo:    $ ${precio_7}
         8-Calabresa:        $ ${precio_8}
         0-Para acabar y salir.`)
);

//variables para almacenar las cantidades totales de las pizzas a comprar, asimismo, variable del monto total.
let cantidad_1 = 0;
let cantidad_2 = 0;
let cantidad_3 = 0;
let cantidad_4 = 0;
let cantidad_5 = 0;
let cantidad_6 = 0;
let cantidad_7 = 0;
let cantidad_8 = 0;
let total = 0.0;

//Acumulacion de cada Pizza Elegida.
function acumulaTotal(precio, cantidad) {
  total += precio * cantidad;
  return total;
}

//Seleccion de pizzas y cantidades.
while (elegirPizza != "0") {
  switch (elegirPizza) {
    case 1:
      let cant1 = Number(
        prompt(`Seleccionaste Pizza Muzzarella, indique la cantidad: `)
      );
      acumulaTotal(precio_1, cant1);
      cantidad_1 += cant1;
      break;
    case 2:
      let cant2 = Number(
        prompt(`Seleccionaste Pizza Roquefort, indique la cantidad: `)
      );
      acumulaTotal(precio_2, cant2);
      cantidad_2 += cant2;
      break;
    case 3:
      let cant3 = Number(
        prompt(`Seleccionaste Pizza Jamón, indique la cantidad: `)
      );
      acumulaTotal(precio_3, cant3);
      cantidad_3 += cant3;
      break;
    case 4:
      let cant4 = Number(
        prompt(`Seleccionaste Pizza Jamón y Morrones, indique la cantidad: `)
      );
      acumulaTotal(precio_4, cant4);
      cantidad_4 += cant4;
      break;

    case 5:
      let cant5 = Number(
        prompt(`Seleccionaste Pizza Fugazza, indique la cantidad: `)
      );
      acumulaTotal(precio_5, cant5);
      cantidad_5 += cant5;
      break;

    case 6:
      let cant6 = Number(
        prompt(`Seleccionaste Pizza Napolitana, indique la cantidad: `)
      );
      acumulaTotal(precio_6, cant6);
      cantidad_6 += cant6;
      break;

    case 7:
      let cant7 = Number(
        prompt(`Seleccionaste Pizza Jamón y Huevo, indique la cantidad: `)
      );
      acumulaTotal(precio_7, cant7);
      cantidad_7 += cant7;
      break;

    case 8:
      let cant8 = Number(
        prompt(`Seleccionaste Pizza Calabresa, indique la cantidad: `)
      );
      acumulaTotal(precio_8, cant8);
      cantidad_8 += cant8;
      break;

    default:
      alert("Ingrese una opción válida.");
      break;
  }
  //presento menu de seleccion nuevamente hasta que el usuario elija "0" y salga del menú.
  elegirPizza = Number(
    prompt(` Desea seleccionar otro producto?
        PIZZA:                     PRECIO:
    1-Pizza Muzzarella:        $ ${precio_1} 
    2-Pizza Roquefort:         $ ${precio_2} 
    3-Pizza Jamón:             $ ${precio_3}
    4-Pizza Jamón y Morrones:  $ ${precio_4} 
    5-Pizza Fugazza:           $ ${precio_5}
    6-Pizza Napolitana:        $ ${precio_6}
    7-Pizza Jamón y Huevo:     $ ${precio_7}
    8-Pizza Calabresa:         $ ${precio_8}
    0-Para acabar y salir.`)
  );
}

// presento el resumen de la compra con: precio unitario y cantidad elegida + el monto a pagar.
alert(`Resumen de la compra:    
          PRODUCTO                   PRECIO:           CANT.:  
       -- Pizza Muzzarella:         $ ${precio_1}      ${cantidad_1}
       -- Pizza Roquefort:          $ ${precio_2}      ${cantidad_2}
       -- Pizza Jamón:              $ ${precio_3}      ${cantidad_3}
       -- Pizza Jamón y Morrones:   $ ${precio_4}      ${cantidad_4}
       -- Pizza Fugazza:            $ ${precio_5}      ${cantidad_5}
       -- Pizza Napolitana:         $ ${precio_6}      ${cantidad_6}
       -- Pizza Jamón y Huevo:      $ ${precio_7}      ${cantidad_7}
       -- Pizza Calabresa:          $ ${precio_8}      ${cantidad_8}
       -- El total de la compra es de $ ${total}`);

alert(`Resumen de pago:
A pagar: $ ${total}
Muchas gracias por elegirnos!`);

//Fin.
