//Global variables
var topics = ['galaxy space','geometric','sacred geometry','polyhedron', 'lasers', 'space travel'];
var limit = 10;
var apiKey = '8gvZ9zZfOKVehtKyGxFv7q1RUOTqX9Ri';

//Function to make buttons
function mkButtons(){
    for (i = 0; i < topics.length; i++){
         var buttonText = topics[i];
         var button = $('<button>').text(buttonText);
         $(button).appendTo('#buttons');
         button.attr('id', 'giph-button');    
         button.attr('topic', buttonText);
        }
};

function loopPics(){
    
};

//Window load event
$(window).on('load', function() {
    mkButtons();
   // loopPics();

    $('button').on('click', function(){
        
        var giphTopic = $(this).attr('topic');
        $('#giphs').empty();
        //for (i = 0; i < topics.length; i++){
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ 
                        giphTopic +"&api_key="+ 
                        apiKey +"&limit="+ 
                        limit +"";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
            })
                .then(function(giphyResponse) {
                    var giphs = giphyResponse.data;
                    console.log(giphs);
                    for(i = 0; i < giphs.length; i++){
                    var giphDiv = $('<div>');
                    var rating = giphs[i].rating;
                    var pTag = $('<p>').text('Rating: ' + rating);
                    var showImage = $('<img>');
                    showImage.attr('src', giphs[i].images.fixed_height.url);
                    giphDiv.prepend(pTag);
                    giphDiv.prepend(showImage);
                    $('#giphs').prepend(giphDiv);
                    };
                });
            //};//for


});///click
    
    });



       