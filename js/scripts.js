$(document).ready(function() {
  $("#toggleMenu").click(function() {
    if ($(".mobileNav .navlist").hasClass("showing") === true) {
      $(".mobileNav .navlist").removeClass("showing");
      $("#toggleMenu").removeClass("changeBackground");
    } else {
      $(".mobileNav .navlist").addClass("showing");
      $("#toggleMenu").addClass("changeBackground");
    }
  });

  // function slideshow(i) {
  //   setTimeout(function(){
  //     $("#slideShow img").attr("src","images/slideshow/" + imagesrc + ".jpg");
  //     if (imagesrc < 6) {
  //       imagesrc++;
  //     } else if (imagesrc >= 6) {
  //       imagesrc = 1;
  //     }
  //     slideshow(imagesrc);
  //   }, timeAmount);
  // };
  //
  // slideshow(imagesrc);
});
