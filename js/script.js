$(document).ready(function() {

    var carouselItems={"furniture":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
   "electrotools":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
    "garden":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
     "tools":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"}],
      "textile":[{"img":"images/2.png", "description":"Тесктиль Х"},{"img":"images/2.png", "description":"текстиль х2 Х1"}],
       "dishware":[{"img":"images/2.png", "description":"посуда Х"},{"img":"images/2.png", "description":"посуда Х2"},{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"},{"img":"images/2.png", "description":"Кухня Х1"}],
       "all":[{"img":"images/2.png", "description":"Кухня Х"},{"img":"images/2.png", "description":"Кухня Х1"},,{"img":"images/2.png", "description":"Кухня Х1"},]};

       var btns=[[".basic2 .next",".basic2 .prev"],[".basic3 .next",".basic3 .prev"],[".basic3 .next",".basic3 .prev"]]

    $(".dropdown-button").on("mouseenter", function(){
      $(".dropdown-button").siblings("div").hide();
      $(".dropdown-button").css({"color":"white"});
      $(".dropdown-button").removeClass("selected-button");
      $(this).siblings("div").show();
      $(this).css({"color":"yellow"});
      $(this).addClass("selected-button");
       return false;

    });

    $("#mail").click(function(){
      $("#mail-popup").show();


    })
  $("#cart").click(function(){
      $("#cart-popup").show();


    })

  $(".dropdown-button").on("mouseleave", function(e){
    if (e.offsetX < 0 || e.offsetX > $(this).width() || e.offsetY < 0) {
      $(this).siblings("div").hide();
      $(this).css({"color":"white"});
       $(this).removeClass("selected-button");
      return false;
    }
  })

  $(".dropdown-div").on("mouseleave", function(){
    $(this).hide();
     return false;
  });


  $(".select-filter").change(function(){
    var type=$(this).val();
    var slider=$(this).closest(".sliders")
    changeSlider(type, slider);

  })



  $('#myCarousel').carousel({
  interval: 4000
  });


  function changeSlider(key, slider){
    var container=slider.find("ul");
    container.empty();
     // slider.find(".basic2 .carousel").jCarouselLite('destroy');
    var items=carouselItems[key];
    console.log(items);
    numItems=0;
    for(var i=0; i<items.length; i++)
      {
        t=$.parseHTML('<li class="elems"><div><img src='+items[i].img+'></div> <a href="#5">'+items[i].description+'</a></li>')
        container.append(t)
      }
      console.log(container)
    reloadCarousel(slider, items.length);



  }




   $(".basic2 .carousel").jCarouselLite({
    btnNext: ".basic2 .next",
    btnPrev: ".basic2 .prev",
    visible:4, 
    speed: 500,
    circular: false
})

    $(".basic3 .carousel").jCarouselLite({
    btnNext: ".basic3 .next",
    btnPrev: ".basic3 .prev",
    visible:4, 
    speed: 500,
    circular: false
})
    $(".basic4 .carousel").jCarouselLite({
    btnNext: ".basic4 .next",
    btnPrev: ".basic4 .prev",
    visible:4, 
    speed: 500,
    circular: false
})
   function reloadCarousel(slider, items)
   
   {
      switch(slider.data("id")){
        case "basic2":
             var b1= ".basic2 .next";
            var b2= ".basic2 .prev";
            break;
        case "basic3":
            var b1= ".basic3 .next";
            var b2= ".basic3 .prev";
            break;
            case "basic4":
            var b1= ".basic4 .next";
            var b2= ".basic4 .prev";
            break;
        default:
         console.log("LOL")
        }
    console.log("LOLOLOLO"+ items);
    var car=slider.find("div.carousel")
    car.trigger('endCarousel');
    car.jCarouselLite({
      btnNext: b1,
      btnPrev: b2,
      visible:4, 
      speed: 500,
      circular: false
    })

   }



});