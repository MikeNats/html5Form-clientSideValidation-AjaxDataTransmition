html5Form-clientSideValidation-AjaxDataTransmition
==================================================
(function($,window, document, undefined) { 
    var defaultVariables = {
        r: "challengeEventsUpdatesFormAjax.jsp",
        t:"POST";
        m:'<p>Thank you for the registration!</p>',
        regName: /^[a-z,A-Z," "]+$/,
        regEmail:/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/,

        formValidation: function() {
            if (defaultVariables.nameValidation() != 1 && defaultVariables.emailValidation() != 1 && defaultVariables.termsValidation() != 1) {
                $.ajax({
                    type: defaultVariables.t,
                    url: defaultVariables.r,
                    data: {
                        cv_name: $("#cv_FirstName").val(),
                        cv_email: $("#cv_Email").val()
                    },
                    success: function(e) {
                        $("#cv_register").css("display", "none");
                        $("#indexBannerText").append(defaultVariables.m)
                    }
                })
            }
        },
        nameValidation: function(e) {
            var t = $("#cv_FirstName").val();
            if (t != "" && t != "First name" && defaultVariables.regName.test(t)) {
                $("#cv_FirstName").removeClass("error");
                return 0
            } else {
                $("#cv_FirstName").addClass("error");
                return 1
            }
        },
        emailValidation:function() {
            var t = $("#cv_Email").val();
            if (t != "" && t != "Email" && defaultVariables.regEmail.test(t)) {
                $("#cv_Email").removeClass("error");
                return 0
            } else {
                $("#cv_Email").addClass("error");
                return 1
            }
        }
    }
    return{
        validateAndExecuteForm: function(){
            defaultVariables.formValidation();
        }
    }
})( jQuery, window, document);
