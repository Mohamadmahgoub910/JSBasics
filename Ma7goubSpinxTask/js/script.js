$(document).ready(function () {
  $("h4").css("color", "green");
  // next
  // Event
  $(".next").click(function () {
    $("#page1").css({ display: "none" });
    $("#page1").removeClass("active");
    $("#page2").css({ display: "block" });
    $("#page2").addClass("active");
    $(".next").addClass("disabled");
    $(".previous").removeClass("disabled");
    $(".pageNo").html("<strong>2/2</strong>");
  });
  // ///////////////////////////////////////////
  // prev
  // Event
  $(".previous").click(function () {
    $("#page2").css({ display: "none" });
    $("#page2").removeClass("active");
    $("#page1").css({ display: "block" });
    $("#page1").addClass("active");
    $(".next").removeClass("disabled");
    $(".previous").addClass("disabled");
    $(".pageNo").html("<strong>1/2</strong>");
  });
  // ///////////////////////////////////////////
  // Preloader on refresh
  $(window).on("load", function () {
    $(".loader").hide();
  });
  // Preloader on icon
  $(".reload").click(function () {
    location.reload();
  });
  // //////////////////////////////
  $(".load1").click(function () {
    console.log("Not yet Not yet !!");
  });
  // see correct answer in each div
  $(".see").click(function () {
    if ($("#page1").hasClass("active")) {
      $(".falseApple").addClass("disabled");
      $(".rightApple").css({ display: "inline" });
    } else {
      $(".falseOrange").addClass("disabled");
      $(".rightOrange").css({ display: "inline" });
    }
  });
  // Apple Answer true
  $(".apple").one("click", function () {
    $(".rightApple").show();
    $(".rightApple").addClass("disabled");
    $(".falseApple").addClass("disabled");
    playWow();
    $(".orange").fadeOut();
  });
  //  Apple Answer False
  $(".orange").one("click", function () {
    $(".falseApple").show();
    $(".falseApple").addClass("disabled");
    $(".rightApple").addClass("disabled");
    playOps();
    $(".apple").fadeOut();
  });
  // /////////////////////////////
  //  orange Answer true
  $(".apple2").one("click", function () {
    $(".falseOrange").show();
    $(".falseOrange").addClass("disabled");
    $(".rightOrange").addClass("disabled");
    playOps();
    $(".orange2").fadeOut();
  });
  // Orange answer false
  $(".orange2").one("click", function () {
    $(".rightOrange").show();
    $(".rightOrange").addClass("disabled");
    $(".falseOrange").addClass("disabled");
    playWow();
    $(".apple2").fadeOut();
  });
  function playWow() {
    document.getElementById("wow").play();
  }
  function playOps() {
    document.getElementById("fail").play();
  }
});
