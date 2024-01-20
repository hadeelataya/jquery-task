/*scroll*/

$(window).on('scroll',function(){

    let scrollTop = $(window).scrollTop()
})
$("#leftMenu a").click(function(){
 
    var positionOfSection = $( $(this).attr("href")).offset().top;

    $("html , body").animate({ scrollTop : positionOfSection }, 1500 );
    
})

// open 

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'200px'},200)
   $("#home-content").animate({marginLeft :'200px'},200)
})
$(".closeBtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},100)
   $("#home-content").animate({marginLeft :'0px'},100)
})

// Duration 
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

// details
window.onload = function() {
    countDownToTime("7 october 2023 6:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
// contact 
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});