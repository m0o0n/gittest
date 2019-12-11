
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
//    doc.onclick = function(){
//       var doc = document.getElementById('#append_new');
//        var elen = document.getElementById('#reg');
//        var elen1 = document.getElementById('#log');
//        elen.style.display = "block";
//        elen1.style.display = "none";
//    };
//   var doc = document.getElementById('#append_new');
//    console.log(doc);
 $(document).ready(function(){
        $("#log_form").submit(function(){
            $.ajax({
               type: 'POST',
                url: 'https://loft-art.com.ua/avpz/Controller/login.php',
                data: $(this).serialize(),
               
                success: function(data){
                 var access_token = data.access_token;
                    sessionStorage.setItem('username', data.login);
                    sessionStorage.setItem('role', data.role);
                    sessionStorage.setItem('access_token', access_token);
                    window.location = "./index.html";
                    console.log(data);
                    //xhr.setRequestHeader("Authorization", "Bearer " + token);
                }
            });
        });
        
        $("#reg_form").submit(function(){
            $.ajax({
                type: 'POST',
                url: 'https://loft-art.com.ua/avpz/Controller/registration.php',
                data: $(this).serialize(),
                error: function(request, status, error, data) {
                var statusCode = request.status;
                    console.log(statusCode);
                    if(statusCode == 405){
                        $("#reg_form").trigger("reset");
                        alert("Not avaible username");
                    }
                    if(statusCode == 200){
                      //  $("#reg_form").trigger("reset");
                       // window.location = "./index.html"
                    //    console.log("hello" + data.login);
                      //  alert("success");
                    }
}
            }).done(function(data){
            $(this).find("input").val("");
            var access_token = data.access_token;
                var error = data.status;
                sessionStorage.setItem('access_token', access_token);
                console.log(sessionStorage.getItem('access_token'));
                console.log(error);
			$("#reg_form").trigger("reset");
                sessionStorage.setItem('username', data.login);
                    window.location = "./index.html";
               // alert("success");
            });

        });
    });
})(jQuery);