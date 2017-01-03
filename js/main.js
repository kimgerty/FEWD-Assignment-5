//Handler to delay code from executing until DOM is loaded
$(document).ready(function(){

//To figure out is user has clicked the submit button
  $("form").submit(function(e){
    e.preventDefault();
//Store user imput as variable "city"
    var city = $("#city-type").val().toLowerCase();
    displayCity(city);
  });

//Conditionals to control flow of application
  function displayCity(city) {
    //If the user imputs NYC, New York or New York City
    if(city === "nyc" || city === "new york city" || city === "new york") {
      $("body").attr("class", "nyc");
    }
    //If the user imputs Austin, ATX
    else if(city === "austin" || city === "atx") {
      $("body").attr("class", "austin");
    }
    //If the user imputs LA, Los Angeles, LAX
    else if(city === "la" || city === "los angeles" || city === "lax") {
      $("body").attr("class", "la");
    }
    //If the user imputs SF, San Francisco, Bay Area
    else if(city === "sf" || city === "san francisco" || city === "bay area") {
      $("body").attr("class", "sf");
    }
    //If the user imputs Sydney, syd
    else if(city === "sydney" || city === "syd") {
      $("body").attr("class", "sydney");
    }
  }
});
