$(document).ready(function() {
  var carouselItems={"furniture":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
   "electrotools":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
    "garden":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
     "tools":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
      "textile":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
       "dishware":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}]};






    $(".dropdown-button").on("mouseenter", function(){
      $(this).siblings("div").show();
      $(this).css({"color":"yellow"});
       return false;
    });




  $(".dropdown-button").on("mouseleave", function(e){
    if (e.offsetX < 0 || e.offsetX > $(this).width() || e.offsetY < 0) {
         $(this).siblings("div").hide();
        $(this).css({"color":"white"});
     return false;
    }

   
  })




 // <div class="item active">
 //                  <div class="col-lg-2"><a href="#"><img src="images/1.png" class="img-responsive"></a>
 //                   <div><a href="">Спальня Венера </a>
 //                   </div>
 //                   </div>
 //            </div>

  $(".dropdown-div").on("mouseleave", function(){
    $(this).hide();
     return false;
  });


  $(".select-filter").change(function(){
    var type=$(this).val();
    console.log(type);
    var item='<div class="item active">
                      <div class="col-lg-2"><a href="#"><img src="'+src+'"" class="img-responsive"></a>
                   <div><a href="">';


  })



  $('#myCarousel').carousel({
  interval: 4000
})

$('.carousel .item .second').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
});