

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
                                console.log(objects[serienr]["episodes"]);
                                var staffeln = objects[serienr]["episodes"];
                                        console.log(staffeln);
                                //var watched = 0;
                                //var fulllength = 0;
                                jQuery.each(staffeln,function( index, staffel ) {
                                    html += '<div class="bar-staffel">'
                                    jQuery.each(staffel,function( index, value ) {
                                        if(value == 1)
                                        {
                                            html += '<div class="bar-folge"></div>';
                                            //watched++;
                                        }
                                        else
                                        {
                                            html += '<div class="bar-folge-ungesehn"></div>';
                                        }

                                        //fulllength++;
                                    });
                                     html += '</div>';
                                });

                                console.log(fulllength + " / " + watched);
                                html += '<progress id="progBar" value="'+watched+'" max="'+fulllength+'">';
                                html += '</div>';
                                $('#content').append(html);

                                //console.log(html);
                        });
            });
});