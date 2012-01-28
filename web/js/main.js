//

$(document).ready(function(){
	
  $("#Center>a +br").hide();
  $("#Center>a").appendTo("#Center");

  $("#globalNav").appendTo("#Footer");
  $("#topBanner").hide();
  $("#FooterContainer p").hide();
  $("#HeaderContainer h1").hide();
  $("#Center div.partsHeading").hide();

  $("#localNav").appendTo('#HeaderContainer');

  $("#HeaderContainer").prepend('<div class="span2 offset1"><img src="http://houou.github.com/NOTIFY_CENTER.png" style="float: left;"></div>');
  $("#HeaderContainer").prepend('<div class="span2"><img src="http://placehold.it/120x38" style="float: left;"></div>');



  $("#page_community_home .gorgon-box").hide();



  




  $("#LayoutA , #sideBanner").wrapAll('<div class="row">');
  $("#LayoutA").addClass("span14");

  $("#ContentsContainer").addClass("span18");

  $("#HeaderContainer>*").wrapAll('<div class="row">');
  $("#HeaderContainer").addClass('span18');
  $("#Left , #Center").wrapAll('<div class="row">');
  $("#Left").addClass("span5");
  $("#Center").addClass("span9");
  $("#sideBanner").addClass("span4");
  
  $("#sideBanner .partsHeading").css("background","none");

  $(".input_submit").wrap('<div class="row"><div class="span6 offset3"></div></div>');
  $(".input_submit").addClass("btn primary span6 small");

  $("#Top").addClass("span8");
  $("#MailAddressLogin th").addClass("span5");
  $("#MailAddressLogin label").addClass("span5");
});
