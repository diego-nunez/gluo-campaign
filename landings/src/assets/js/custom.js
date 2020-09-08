console.log('entra')
$(document).ready(function() {
    $('#birthday').datepicker()
    $("#contacto").validate({
        rules:{
            subscription: {
                required: true
            },
            birthday: {
                required: true
            }
        },
        messages: {
            subscription: 'Este campo es requerido.',
            birthday: 'Este campo es requerido.'
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "subscription")
                $("#subscription-message").html(error);
        },
    });
});
