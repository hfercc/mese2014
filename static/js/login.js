$(document).ready(
  function(){
    $("#login-form").submit(function(e){
    e.preventDefault();
    return false;
})});
function validate_form() {
  var uname=$("#inputUsername");
  var pword=$("#inputPassword");
  if((uname.val().length) == 0){
    $("#ufg").addClass("has-error");
    uname.popover('show');
  }if((pword.val().length) == 0){
    $("#pfg").addClass("has-error");
    pword.popover('show');
  }
};

function clean_error() {
	var uname=$("#inputUsername");
   var pword=$("#inputPassword");
	$("#ufg").removeClass("has-error");
	$("#pfg").removeClass("has-error");
	uname.popover('hide');
	pword.popover('hide');
};