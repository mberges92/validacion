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
            },
            // Esta es tu forma
            errorLabelContainer: '#errores',
            wrapper: 'li'
                /*
                // Esto me lo deja debajo del form...
                errorLabelContainer: '#errores',
                wrapper: 'li',
                errorPlacement: function(error, element) {
                    error.appendTo("form").;
                }
                */
        });
    });
});
