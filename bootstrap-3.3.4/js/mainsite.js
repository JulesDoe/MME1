$(function(){
    var data = { action: "getSeries"};
    $.post( "Database.php",data, function( resp ) {
                console.log(resp);
                var objects =   jQuery.parseJSON(resp);
                $.each(objects, function(serienr) {
                            var html = '<div class="row">';
                                html += '<img class="col-md-3" src="../' + objects[serienr]["imgsource"] + '" alt="dexter"/>';
                                html += '<h2 class="col-md-9">';
                                html += objects[serienr]["name"];
                                html += '</h2>';
                                html += '<p class="col-md-9">';
                                html += objects[serienr]["beschreibung"];
                                html += '</p>';
                                html += '</div>';
                                $('#content').append(html);

                                console.log(html);
                        });
            });
});