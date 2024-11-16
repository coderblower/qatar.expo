jQuery(document).ready(function() {
        $(function () {
            $('#defaultCountdown').countdown({until: new Date(2024, 11, 16, 23, 59)}); // year, month, date, hour
        });
});		


var elm = $('#open_contact'); 
var target = $('#de-extra-wrap')
elm.on('click', function(e){
  
    e.preventDefault();
    if(target.hasClass('open')){
    
    } else {
      
        target.addClass('open'); target.removeClass('close')
        
    
    }

});

