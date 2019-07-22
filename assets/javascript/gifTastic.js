//Global variables
var topics = ['galaxy space','geometric','sacred geometry','polyhedron', 'lasers', 'space travel'];
var limit = 10;
var apiKey = '8gvZ9zZfOKVehtKyGxFv7q1RUOTqX9Ri';

//Function to make buttons
function mkButtons(){
    $('#buttons').empty();
    for (i = 0; i < topics.length; i++){
         var buttonText = topics[i];
         var button = $('<button>').text(buttonText);
         $(button).appendTo('#buttons');
         button.attr('id', 'giph-button');    
         button.attr('topic', buttonText);
         
        };
};

//Display giphs
function displayGiphs(){
    var giphTopic = $(this).attr('topic');
    $('#giphs').empty();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ 
                    giphTopic +"&api_key="+ 
                    apiKey +"&limit="+ 
                    limit +"";
    $.ajax({
        url: queryURL,
        method: "GET"
        })
            .then(function(giphyResponse) {
                var giphs = giphyResponse.data;
                //console.log(giphs);
                for(i = 0; i < giphs.length; i++){
                var giphDiv = $('<div>').addClass('column');
                var rating = giphs[i].rating;
                var brTag = $('<br>')
                var spanTag = $('<span>').html('Rating: ' + rating + '<br><br>').addClass('rating');
                var showImage = $('<img>');
                showImage.attr('still-src', giphs[i].images.fixed_height_still.url);
                showImage.attr('animate-src', giphs[i].images.fixed_height.url);
                showImage.attr('src', giphs[i].images.fixed_height_still.url).addClass('showGiphs');
                showImage.attr('giph-state', 'still');
                giphDiv.prepend(brTag, spanTag);
                giphDiv.append(showImage);
                $('#giphs').prepend(giphDiv);   
            };
            });
};

function animateGiphs(){
    $('.showGiphs').on('click', function(){
        var giphState = $(this).attr('giph-state');

        if (giphState === 'still'){
            $(this).attr('src', $(this).attr('animate-src'));
            $(this).attr('giph-state', 'animate');
        }else {
            $(this).attr('src', $(this).attr('still-src'));
            $(this).attr('giph-state', 'still');
        };
    });
};

$('#add-button').on('click', function(event) {
    event.preventDefault();
    var newButton = $('#topic-input').val().trim();
    topics.push(newButton);
    mkButtons();
});

$(document).on('click', '#giph-button', displayGiphs);
$(document).on('click', '.showGiphs', animateGiphs);

mkButtons();       