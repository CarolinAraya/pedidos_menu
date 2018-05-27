const menu = ["ceviche", "empanada", "hamburguesa"];


function estaEnElMenu(pedido) {

    for (let i = 0; i < menu.length; i++) {

        if (menu[i] === pedido) {
            return true;
        }
    }
    return false;
}

function orden() {
    if (estaEnElMenu("ceviche")) {
        return "ceviche";
    }
    if (estaEnElMenu("tacos al pastor")) {
        return "tacos al pastor";
    }
    if (estaEnElMenu("empanada chilena")) {
        return "empanada chilena";
    }
    return "hamburguesa";
}

var r = orden();

var depura = "";