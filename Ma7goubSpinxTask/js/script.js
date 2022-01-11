$(document).ready(function () {
  $("h3").css("color", "green");
  // next
  // Event
  $(".next").one("click", function () {
    $(".Q1").css({ display: "none" });
    $(".Q2").css({ display: "block" });
    $(".next").addClass("disabled");
  });
  // ///////////////////////////////////////////

  // prev
  // Event
  $(".previous").one("click", function () {
    $(".Q2").css({ display: "none" });
    $(".Q1").css({ display: "block" });
    $(".previous").addClass("disabled");
  });
  // ///////////////////////////////////////////

  /**
    * document.getElementById("page1").style.display="none";

    document.getElementById("page2").style.display="block";
    $('#page2').addClass('active');
    $('#page1').removeClass('active');


    $('.next').addClass('disabled');

    $('.back').removeClass('disabled');

    document.getElementById("page-no").textContent="2 of 2";
    */
  // prev
  // Q1
  // Q2
});
