function typing(){

    var i = 0;
    var txt = 'Nasa api challenge';
    var speed = 150;
    let hello = '';
    
    function type() {
      if (i < txt.length) {
        
        hello += txt.charAt(i)

        $('.hello__title').text(hello)  
        
        i++;
        setTimeout(type, speed);
      }
    }

    type()
}

export {typing}