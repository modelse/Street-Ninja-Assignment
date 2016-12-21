
$(document).ready(function (){
    $('#box2').hide()
    $('#player1').hide();
    $('#player2').hide();

    // Hover to view Backgrounds
    $('#beach').hover(function(){
        $('#wrapper').css('background-image' , 'url(beach.jpg)');
    })
    $('#dojo').hover(function(){
        $('#wrapper').css('background-image' , 'url(dojo.jpg)');
    })
    $('#earth').hover(function(){
        $('#wrapper').css('background-image' , 'url(earth.jpg)');
    })
    $('#forest').hover(function(){
        $('#wrapper').css('background-image' , 'url(forest.jpg)');
    })
    $('#snow').hover(function(){
        $('#wrapper').css('background-image' , 'url(snow.jpg)');
    })
    $('#matrix').hover(function(){
        $('#wrapper').css('background-image' , 'url(matrix.jpg)');
    })

    // Select Permanent Background
    $('#beach').click(function(){
        $('#wrapper').css('background-image' , 'url(beach.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })
    $('#dojo').click(function(){
        $('#wrapper').css('background-image' , 'url(dojo.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })
    $('#earth').click(function(){
        $('#wrapper').css('background-image' , 'url(earth.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })
    $('#forest').click(function(){
        $('#wrapper').css('background-image' , 'url(forest.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })
    $('#snow').click(function(){
        $('#wrapper').css('background-image' , 'url(snow.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })
    $('#matrix').click(function(){
        $('#wrapper').css('background-image' , 'url(matrix.jpg)');
        $('#box1').hide();
        $('#box2').show();
        $('#player1').show();
        $('#player2').show();
    })

    // Character Select Number 1
    $('#squirtle').click(function(){
        $("#player1").attr( "src" ,"Squirtle.PNG")
    })
    $('#flareon').click(function(){
        $("#player1").attr( "src" ,"flareon.png")
    })
    $('#ponyta').click(function(){
        $("#player1").attr( "src" ,"Ponyta.png")
    })
    $('#pikachu').click(function(){
        $("#player1").attr( "src" ,"Pickachu.png")
    })
    $('#pichu').click(function(){
        $("#player1").attr( "src" ,"Pichu.png")
    })

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
