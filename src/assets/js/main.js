function logout(){
    localStorage.clear();
    location.reload();
}
$(window).scroll(function(){
    $("#theFixed").css("top", Math.max(0, 50 - $(this).scrollTop()));
});
