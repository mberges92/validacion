$(document).ready(function() {
    $("input:submit").click(function() {

        $("#formulario").validate({
            debug: true,
            onclick: false,
            onkeyup: false,
            onfocusout: false    
        });
        alert("Formulario validado al pulsar enviar");
    });
});
