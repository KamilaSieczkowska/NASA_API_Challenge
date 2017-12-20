function uploadImages(){
    
    let nasaAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=345&api_key=J0MCwnniX5tD5Hd0fymDwHTwztHBtyMYfx18aqvR'
    
    var lastImage = 0;
    let gallery = $('#images__container')

    function insertMarsPhotos(images) {
        const buttonMore = $("<button class='load__more'>").html("Więcej &raquo;");
        
        $.each(images, function(indexImage, image) {
            let photoMars = $("<a class='image'><figure><img src=" + image.img_src + " data-author=" + (image.rover).name + " data-earthdate=" + image.earth_date + "></figure></a>");
            photoMars.find("img").attr("data-camera", (image.camera).full_name);

            if (indexImage <= 3) {
                gallery.append(photoMars);
                lastImage = indexImage;
            } else {
                gallery.append(photoMars);
                photoMars.prev().hide();
            }
        });

        $("figure").append("<figurecaption>");
       
        $("img").each(function() {
            var date = $(this).attr("data-earthdate");
            var camera = $(this).attr("data-camera");
            $(this).next().html(date + '<br>' + camera);
        });

        // add button
        gallery.after(buttonMore);
    }


    function loadGallery() {
        $.ajax({
            url: nasaAPI,
            type: "GET",
            dataType: "json"
        }).done(function(response) {
            insertMarsPhotos(response.photos); 
        }).fail(function(error) {
            console.log(error);
        })
    }
    loadGallery();


    // button 'more' event

    $("body").on('click', 'button', function(e) {
        e.preventDefault();
        var showPhotos = 0;

        $.each(gallery.find('a.image'), function(newIndex, element) {
                           
            if (newIndex > lastImage && showPhotos < 4) {   
                $(element).show();
                lastImage = newIndex;
                showPhotos++ 
            }  
        }
    )}
)}


export {uploadImages}