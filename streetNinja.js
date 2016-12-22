
$(document).ready(function (){
    $('#box2').hide()
    $('#player1').hide();
    $('#player2').hide();

    // Hover to view Backgrounds
    $('button').hover(function(){
        var arena=$(this).attr("id")
        switch(arena){
            case "beach":
            $('#wrapper').css('background-image' , 'url(beach.jpg)');
            break
            case "dojo":
            $('#wrapper').css('background-image' , 'url(dojo.jpg)');
            break
            case "earth":
            $('#wrapper').css('background-image' , 'url(earth.jpg)');
            break
            case "forest":
            $('#wrapper').css('background-image' , 'url(forest.jpg)');
            break
            case "snow":
            $('#wrapper').css('background-image' , 'url(snow.jpg)');
            break
            case "matrix":
            $('#wrapper').css('background-image' , 'url(matrix.jpg)');
        }
    })


    // Select Permanent Background
    $('button').click(function(){
        var arena=$(this).attr("id")
        switch (arena){
            case "beach":
            $('#wrapper').css('background-image' , 'url(beach.jpg)');
            break
            case "dojo":
            $('#wrapper').css('background-image' , 'url(dojo.jpg)');
            break
            case "earth":
            $('#wrapper').css('background-image' , 'url(earth.jpg)');
            break
            case "forest":
            $('#wrapper').css('background-image' , 'url(forest.jpg)');
            break
            case "snow":
            $('#wrapper').css('background-image' , 'url(snow.jpg)');
            break
            case "matrix":
            $('#wrapper').css('background-image' , 'url(matrix.jpg)');
            break
        }
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })


    // Character Select Number 1
    $('option').click(function(){
        var character=$(this).attr("id")
        // alert(character)
        switch (character){
        case "squirtle":
        $("#player1").attr( "src" ,"Squirtle.PNG")
        break
        case "flareon":
        $("#player1").attr( "src" ,"flareon.png")
        break
        case "ponyta":
        $("#player1").attr( "src" ,"Ponyta.png")
        break
        case "pikachu":
        $("#player1").attr( "src" ,"Pickachu.png")
        break
        case "pichu":
        $("#player1").attr( "src" ,"Pichu.png")

        }
        })

//

    // Character Select Number 2
    $('#squirtle2').click(function(){
        $("#player2").attr( "src" ,"Squirtle.PNG")
        $("#box2").hide()
    })
    $('#flareon2').click(function(){
        $("#player2").attr( "src" ,"flareon.png")
        $("#box2").hide()
    })
    $('#ponyta2').click(function(){
        $("#player2").attr( "src" ,"Ponyta.png")
        $("#box2").hide()
    })
    $('#pikachu2').click(function(){
        $("#player2").attr( "src" ,"Pickachu.png")
        $("#box2").hide()
    })
    $('#pichu2').click(function(){
        $("#player2").attr( "src" ,"Pichu.png")
        $("#box2").hide()
    })
})
