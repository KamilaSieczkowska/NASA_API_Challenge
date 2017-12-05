function lightbox() {

    let $a = $('.images__container a');
    
    $a.on('click', function(e) {
        e.preventDefault();


        var imgSrc = $(this).attr('href');
        var title = $(this).find('img').attr('alt');
        var $img = $(`<img src="${imgSrc}" alt="${title}" />`);

        var $lightbox = $(`
            <div class="lightbox">
                <div class="lightbox__container">
                    <button class="lightbox__close">X</button>
                    <div class="lightbox__img">
                    </div>
                    <h3>${title}</h3>
                </div>
            </div>`);
        $lightbox.hide();
        $lightbox.find('.lightbox__img').append($img);
        $('body').append($lightbox.fadeIn());
    })

    $(document).on('click', '.lightbox__close', function() {
        $(this).closest('.lightbox').fadeOut(function() {
            $(this).remove();
        })
    })
}

export {lightbox}