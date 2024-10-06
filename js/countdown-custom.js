jQuery(document).ready(function() {
        $(function () {
            $('#defaultCountdown').countdown({until: new Date(2024, 12, 14, 12, 59, 59)}); // year, month, date, hour
        });
});		


var elm = $('#open_contact'); 
var target = $('#de-extra-wrap')
elm.on('click', function(e){
    console.log(this)
    e.preventDefault();
    if(target.hasClass('open')){
    
    } else {
      
        target.addClass('open'); target.removeClass('close')
        
    
    }

});

