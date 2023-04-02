$(function() {

   function playAudio() {
      myAudio.play();
      $("#unmute").hide();
      $("#mute").show();


   }

   function muteAudio() {
      myAudio.pause();
      $("#unmute").show();
      $("#mute").hide();
     
   }

   let myAudio = document.querySelector('#audio')

   // let mySound = new Audio('mixkit-big-thunder-rumble-1297.wav')
   // mySound.play();

   document.getElementById("unmute").addEventListener("click", playAudio);
   document.getElementById("mute").addEventListener("click", muteAudio);


   var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
   }


   setInterval(lightningOne, Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000);
   setInterval(lightningTwo, Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000);
   setInterval(lightningThree, Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000);


   $("#head").click(function() {

      if (headclix < 9) {
         $("#head").animate({left:"-=367px"},500);
         headclix += 1;
      } else {
         $("#head").animate({left:"0px"},500);
         headclix = 0;
      }
   });

   $('#head').on('contextmenu', function(e) {
      e.preventDefault();
      if (headclix > 0) {
          $(this).animate({ left: "+=367px" }, 500);
          headclix -= 1;
      }
      return false;
  });

  $("#eyes").click(function() {

   if (eyeclix < 9) {
      $("#eyes").animate({left:"-=367px"},500);
      eyeclix += 1;
   } else {
      $("#eyes").animate({left:"0px"},500);
      eyeclix = 0;
   }
});

$('#eyes').on('contextmenu', function(e) {
   e.preventDefault();
   if (eyeclix > 0) {
       $(this).animate({ left: "+=367px" }, 500);
       eyeclix -= 1;
   }
   return false;
});


  $("#nose").click(function() {

   if (noseclix < 9) {
      $("#nose").animate({left:"-=367px"},500);
      noseclix += 1;
   } else {
      $("#nose").animate({left:"0px"},500);
      noseclix = 0;
   }
});

$('#nose').on('contextmenu', function(e) {
   e.preventDefault();
   if (noseclix > 0) {
       $(this).animate({ left: "+=367px" }, 500);
       noseclix -= 1;
   }
   return false;
});

$("#mouth").click(function() {

   if (mouthclix < 9) {
      $("#mouth").animate({left:"-=367px"},500);
      mouthclix += 1;
   } else {
      $("#mouth").animate({left:"0px"},500);
      mouthclix = 0;
   }
});

$('#mouth').on('contextmenu', function(e) {
   e.preventDefault();
   if (mouthclix > 0) {
       $(this).animate({ left: "+=367px" }, 500);
       mouthclix -= 1;
   }
   return false;
});
   
   $('button').mousedown(function(event) {
      switch (event.which) {
      case 1:
         document.querySelector('.output').innerHTML = 'Left Mouse Button';
         break;
      case 2:
         document.querySelector('.output').innerHTML = 'Middle Mouse Button';
         break;
      case 3:
         document.querySelector('.output').innerHTML = 'Right Mouse Button';
           break;
      default:
         break;
     }
  });
  
  function lightningOne() {
     $("#lightning1").fadeIn(250).fadeOut(250);
     setTimeout("lightningOne()", 4000);

  }

//   setInterval(function () {
//    lightningOne;
// }, 10000);

  function lightningTwo() {
   $("#lightning2").fadeIn(250).fadeOut(250);
   setTimeout("lightningTwo()", 4000);
}

function lightningThree() {
   $("#lightning3").fadeIn(250).fadeOut(250);
   setTimeout("lightningThree()", 4000);
}
  

});