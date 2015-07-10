

$(function(){
    var data = { action: "getSeries"};
    $.post( "Database.php",data, function( resp ) {
                console.log(resp);
                var objects =   jQuery.parseJSON(resp);
                $.each(objects, function(serienr) {
                            var html = '<div class="row box">';
                                html += '<img class="col-xs-6 col-md-3" src="../' + objects[serienr]["imgsource"] + '" alt="dexter"/>';
                                html += '<h2 class="col-xs-6 col-md-9">';
                                html += objects[serienr]["name"];
                                html += '</h2>';
                                html += '<p class="col-xs-6 col-md-9">';
                                html += objects[serienr]["beschreibung"];
                                html += '</p>';
                                //console.log(objects[serienr]["episodes"]);
                                var staffeln = objects[serienr]["episodes"];
                                        //console.log(staffeln);
                                //var watched = 0;
                                //var fulllength = 0;
                                jQuery.each(staffeln,function( index, staffel ) {
                                    html += '<div class="col-xs-6 col-md-9 bar-staffel">'
                                    jQuery.each(staffel,function( index, value ) {
                                        if(value == 1)
                                        {
                                            html += '<div class="bar-folge"></div>';
                                            //watched++;
                                        }
                                        else
                                        {
                                            html += '<div class="bar-folge-ungesehen"></div>';
                                        }

                                        //fulllength++;
                                    });
                                     html += '</div>';
                                });

                                //console.log(fulllength + " / " + watched);
                                //html += '<progress id="progBar" value="'+watched+'" max="'+fulllength+'">';
                                html += '</div>';
                                $('#content').append(html);

                                //console.log(html);
                                $(".bar-folge").click(function(object)
                                {
                                    //console.log(object.target);

                                    $( this ).toggleClass("bar-folge-ungesehen");
                                    $( this ).toggleClass("bar-folge");
                                    //TODO AJAXA Update aufrufen
                                });

                                $(".bar-folge-ungesehen").click(function(object)
                                {
                                    $( this ).toggleClass("bar-folge");
                                    $( this ).toggleClass("bar-folge-ungesehen");
                                    //TODO AJAXA Update aufrufen
                                });
                        });
            });

});


