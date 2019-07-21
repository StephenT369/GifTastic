//Global variables
var topics = ['geometric','galaxy space','sacred geometry','polyhedron', 'lasers', 'space travel'];
var iTopic;
var limit = 10;
var apiKey = '8gvZ9zZfOKVehtKyGxFv7q1RUOTqX9Ri';
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ iTopic +"&api_key="+ apiKey +"&limit="+ limit +"";

//Function to make buttons
function mkButtons(){
    for (i = 0; i < topics.length; i++){
         iTopic = topics[i];  
    
         var buttonText = iTopic;
         var button = $('<button>').text(buttonText);
         
         $(button).appendTo('#buttons');    
         button.attr('id','giph-buttons');
        }
};

//Window load event
$(window).on('load', function() {
    mkButtons();

     $('button').on('click', function(){

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
    });
    });



       