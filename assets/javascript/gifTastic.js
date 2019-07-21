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

//Window load event
$(window).on('load', function() {
    mkButtons();

    $('button').on('click', function(){
        
        var giphTopic = $(this).attr('topic');
        $('#giphs').empty();
        
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
                    var brTag = $('<br>')
                    var pTag = $('<span>').html('Rating: ' + rating + '<br>');
                    var showImage = $('<img>');
                    showImage.attr('src', giphs[i].images.fixed_height_still.url);
                    giphDiv.prepend(brTag, pTag);
                    giphDiv.append(showImage);
                    
                    $('#giphs').prepend(giphDiv);
                    };
                });
});
    });



       