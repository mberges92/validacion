$(document).ready(function() {
    $('input:submit').click(function() {
        $('#formulario').validate({
            debug: true,
            onfocusout: false,
            onclick: false,
            onkeyup: false,
            rules: {
                nombre: {
                    required: true,
                    minlength: 2
                },
                email: 'required',
                comentarios: 'required'
            }
        });
    });
});