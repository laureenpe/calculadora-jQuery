$(document).ready(function () {
    $("input:button").click(function () {
        btn = $(this).val();
        pantalla = $("#resultado").val();
        if (btn == "C") {

        } else {
            if (btn == "=") {
                $("#resultado").val(eval(pantalla));
            } else {
                $("#resultado").val(pantalla + btn);
            }

        }
    })
});

//Lo que hace $this es seleccionar al elemento que activo el evento, de esta manera hacemos que el evento corra de forma individual en cada uno de los elementos (en este caso, de los botones). Así que lo que hicimos fue decirle a jQuery que cuando se haga clic en el input button corra un evento, pero que este evento corra únicamente en este/this elemento (el elemento que provocó el evento).

//.eval() en cada uno de los elementos (en este caso, de los botones). Así que lo que hicimos fue decirle a jQuery que cuando se haga clic en el input button corra un evento, pero que este evento corra únicamente en este/this elemento (el elemento que provocó el evento).