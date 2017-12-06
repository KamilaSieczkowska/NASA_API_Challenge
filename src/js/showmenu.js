function showMenu () {
    
    $('.main__nav__toggle').on('click', function(){
        $(this).next().toggleClass('show')
    })
} 

export {showMenu}