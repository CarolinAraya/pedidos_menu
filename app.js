const menu = ["ceviche", "empanada", "hamburguesa"];


function estaEnElMenu(pedido) {

    for (let i = 0; i < menu.length; i++) {

        if (menu[i] === pedido) {
            return true;
        }
    }
    return false;
}

var r = estaEnElMenu("empanada");


