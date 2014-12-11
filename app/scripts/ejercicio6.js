$('#formulario').validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: 'required',
        email: 'required',
        comentarios: 'required'
    },
    errorPlacement: function(error, element) {
        error.insertBefore(element);
    }
});
