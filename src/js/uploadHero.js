let heroURL = 'https://api.nasa.gov/planetary/apod?api_key=J0MCwnniX5tD5Hd0fymDwHTwztHBtyMYfx18aqvR'

let $mainHero = $(".main__hero"); 

function insertHero(photos) {
    $.each(photos, function(indexPhoto, photo) {
        $mainHero.css({background: "#000000 url(" + photo.hdurl + ") no-repeat fixed center"});
    });
}

function uploadHero() {
    $.ajax({
        url: heroURL,
        type: "GET",
        dataType: "json"
    }).done(function(response) {
        insertHero([response]); 
    }).fail(function(error) {
        console.log(error);
    })
}

export {uploadHero}

