$( document ).ready(function() {
    $( "#anmelden" ).click(function(event) {
        var data = { action: "checkuser",
                     user : $("#email").val(),
                     pw :  $("#password").val()};
        $.post( "Database.php",data, function( resp ) {
            console.log(resp);
            var obj =   jQuery.parseJSON(resp);
            if(obj && obj.UID)
                console.log("Log IN");
            else
                event.preventDefault();
        });
        //console.log( "fertig");
    });
});