function logout() {
    localStorage.clear();
    location.reload();
}
$(window).on("load",function(){
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/js/bootstrap-multiselect.js" )
    .done(function( script, textStatus ) {
            $('.multiple-checkboxes').multiselect({
                includeSelectAllOption: true,
                buttonWidth: '100%',
                templates: {
                    button: '<button   class="multiselect dropdown-toggle btn bg-white" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
                  },
              });
       
    })
    .fail(function( jqxhr, settings, exception ) {
      $( "div.log" ).text( "Triggered ajaxError handler." );
    });
})


$(document).ready(function () {
   
})
$(window).scroll(function () {
    $("#theFixed").css("top", Math.max(0, 50 - $(this).scrollTop()));
});
