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

//Animate giphs
function animateGiphs(){
    $('.showGiphs').empty();
    var giphTopic = $(this).attr('topic');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ 
                    giphTopic +"&api_key="+ 
                    apiKey +"&limit="+ 
                    limit +"";
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(giphyResponse){
            var giphs = giphyResponse.data;
            for(i = 0; i < giphs.length; i++){
                var showAnimate = $('<img>');
                showAnimate.attr('src', giphs[i].images.fixed_height.url);
                //$('.showGiphs').append(showAnimate);
                $(showAnimate).appendTo('.showGiphs');
            }
        });
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
                console.log(giphs);
                for(i = 0; i < giphs.length; i++){
                var giphDiv = $('<div>').addClass('column');
                var rating = giphs[i].rating;
                var brTag = $('<br>')
                var spanTag = $('<span>').html('Rating: ' + rating + '<br><br>').addClass('rating');
                var showImage = $('<img>');
                showImage.attr('giphId', giphs[i].id);
                showImage.attr('src', giphs[i].images.fixed_height_still.url).addClass('showGiphs');
                giphDiv.prepend(brTag, spanTag);
                giphDiv.append(showImage);
                $('#giphs').prepend(giphDiv);
                
            };
            $('.showGiphs').on('click', function(){
                                   
                showImage.attr('src', giphs[i].images.fixed_height.url);
                giphDiv.append(showImage);
        });
            });
};

$('#add-button').on('click', function(event) {
    event.preventDefault();
    var newButton = $('#topic-input').val().trim();
    topics.push(newButton);
    mkButtons();
});

$(document).on('click', '#giph-button', displayGiphs);

mkButtons();       