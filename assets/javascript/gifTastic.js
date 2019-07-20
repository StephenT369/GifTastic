var topics = ['geometric','galaxy space','sacred geometry','polyhedron', 'lasers', 'space travel'];

$(window).on('load', function() {
    
    for (i = 0; i < topics.length; i++){
        var iTopic = topics[i];
        var limit = 10;
        var apiKey = '8gvZ9zZfOKVehtKyGxFv7q1RUOTqX9Ri';
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ iTopic +"&api_key="+ apiKey +"&limit="+ limit +"";
        var buttonText = iTopic;
        var button = $('<button>').text(buttonText);
        
        $(button).appendTo('#buttons');    
        button.attr('id','giph-buttons');
       
        $.ajax({
            type: "GET",
            url: queryURL
        })
        .then(function(giphyResponse) {
            var giphs = giphyResponse.data;
            console.log(giphs);   
        })
    }
});