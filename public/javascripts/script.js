$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$("#closer").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

$(function(){
    
    //change to two ? how?
   
   $('#selectStatus').change(function(){
     var data= $(this).val();
     if (data==1) {
        var txt1 = "<div class=\"form-group NRP\"> <label for=\"NRP\">NRP</label> <input type=\"text\" class=\"form-control\" id=\"NRP\" placeholder=\"Enter NRP\"> </div>";
        $(".custom-select").after(txt1);
     }
     else if (data==2) $(".NRP").remove();
     else console.error("Value invalid");        
   });
   
   $('.check')
       .val('Alumni')
       .trigger('change');
});