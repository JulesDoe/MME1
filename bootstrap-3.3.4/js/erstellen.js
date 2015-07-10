
$(function(){
    $('.spinner .btn:first-of-type').on('click', function() { // serie mehr
        if($(this)[0].classList.contains("indexed")) // falscher Button
            return false;

        var value = parseInt($('#staffeln').val());
        if(!$.isNumeric(value))
            $('#staffeln').val(1);
        else
            $('#staffeln').val( value + 1);
        Change();
      });

    $('.spinner .btn:last-of-type').on('click', function() { // Serie weniger
        if($(this)[0].classList.contains("indexed")) // falscher Button
            return false;

        var value = parseInt($('#staffeln').val());
        if(!$.isNumeric(value) || value == 1)
           $('#staffeln').val(1);
        else
            $('#staffeln').val( value - 1);
        Change();
    });

    $("#speichern").click(function(event) {
        var data = { action: "createSerie", name: "TestAjax" , beschreibung:"Hier wird was versucht",picture: "games.jpg"};
        $.post( "Database.php",data, function( resp ) {

            var antwort = jQuery.parseJSON(resp);
            console.log(antwort);
            if(!(antwort && antwort["erfolg"]))
                event.preventDefault();

        });

    });
    $( "#staffeln" ).change(function(event){
        Change();
    });
    $( "#staffeln" ).keypress(function(event){
        //console.log(event.keyCode);
        if(event.keyCode == 8 || event.keyCode == 46)
            return true;
        if(!$.isNumeric(event.key))
            return false;

    });
});

function Change(){
    //console.log($(this));

    //console.log($("#episodes").children().length  + " / " + $("#staffeln").val());
    var childcount = $("#episodes").children().length;
    for(var i = 0; i < $("#staffeln").val(); i++ ) // neue Staffeln hinzufügen
    {
        if(i >= childcount){
            var html = generateInput(i);
            $("#episodes").append(html);
            generateEvents(i);
        }
    }

    while($("#episodes").children().length > $("#staffeln").val()) // Überflüssige löschen
    {
        $("#episodes").children()[$("#episodes").children().length - 1].remove();

    }
}

function generateInput(i)
{
     var html = '<div class="staffel'+ i +'"> Staffel ' + (i + 1) + ' <div class="input-group spinner">' ;
        html +=    '<input type="text" class="form-control" id="staffel'+ i +'" value="1">';
        html +=    '<div class="input-group-btn-vertical">';
        html +=        '<button class="btn btn-default '+i+'" type="button"><i class="glyphicon glyphicon-chevron-up"></i></button>';
        html +=        '<button class="btn btn-default '+i+'" type="button"><i class="glyphicon glyphicon-chevron-down"></i></button>';
        html +=    '</div>';
        html +='</div></div>';
     return html;

}

function generateEvents(i){
    $('.staffel'+ i + ' .btn:first-of-type').on('click', function() { // Neues Event registrieren Button plus
        //console.log("w");
        var staffelid = $(this)[0].classList[$(this)[0].classList.length - 1]; // letze Klasse suchen

        var id = "#staffel"+ staffelid; //id suchen
        var value = parseInt($(id).val());
        $(id).val(value + 1);
    });
    $('.staffel'+ i + ' .btn:last-of-type').on('click', function() {// nues Event Button minus

        var staffelid = $(this)[0].classList[$(this)[0].classList.length - 1];

        var id = "#staffel"+ staffelid;
        var value = parseInt($(id).val());
        if(value > 1)
            $(id).val(value - 1);
    });

    $( ".staffel" + i ).keypress(function(event){
        //console.log(event.keyCode);
        if(event.keyCode == 8 || event.keyCode == 46)
            return true;
        if(!$.isNumeric(event.key))
            return false;

    });
}