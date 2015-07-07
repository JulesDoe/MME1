$( document ).ready(function() {
    $( "#anmelden" ).click(function(event) {
        var data = { action: "checkuser",
                     user : $("#email").val(),
                     pw :  $("#password").val()};
        var erg = false;
        $.post( "Database.php",data, function( resp ) {
            console.log(resp);
            var obj =   jQuery.parseJSON(resp);
            if(obj && obj.UID)
            {
                erg = true;
            }
            else
            {
                //event.preventDefault();
                console.log("error");
            }
                //
        });
        if(!erg)
            event.preventDefault();
        //event.preventDefault();
    });
});