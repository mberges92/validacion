$('#formulario').validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: 'required',
        email: 'required',
        comentarios: 'required'
    },
    errorLabelContainer: '#errores',
    wrapper: 'li'
});
