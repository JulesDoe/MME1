$(function(){
    var data = { action: "getSeries"};
    $.post( "Database.php",data, function( resp ) {
                console.log(resp);
                var objects =   jQuery.parseJSON(resp);
                $.each(objects, function(serienr) {
                            var html = '<div class="row box">';
                                html += '<img class="col-md-3" src="../' + objects[serienr]["imgsource"] + '" alt="dexter"/>';
                                html += '<h2 class="col-md-9">';
                                html += objects[serienr]["name"];
                                html += '</h2>';
                                html += '<p class="col-md-9">';
                                html += objects[serienr]["beschreibung"];
                                html += '</p>';
                                var staffeln = objects[serienr][""];
                                var watched = 0;
                                var fulllength = 0;
                                for(var i = 0; i <= staffeln.length; i++)
                                {
                                    for(var a = 0; a <= staffeln[i].length; a++)
                                    {
                                        if(staffeln[i][a] == 1)
                                            watched++;
                                        fulllength++;
                                    }
                                }
                                html += '<progressbar';
                                html += '</div>';
                                $('#content').append(html);

                                //console.log(html);
                        });
            });
});