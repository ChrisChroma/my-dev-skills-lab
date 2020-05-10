$(document).ready(function() {
    $('.startSkill').hide();
});

$('#addSkill').click(function() {
    const $skill = $('input').val()
    $("tbody").append("<tr><td><button>X</button> " + $skill + "</td></tr>");
    $('input').val('');
    $('button').addClass('removeSkill');
});

$("#skills tbody").on("click", "button", function (e) {
  // got the element we clicked on with e.target
  // we used the closest method to find the able row we are inside of
  // then we used .remove to remove it
  //    $(e.target).closest('tr').remove();
  console.log(this, "< outside the fadeOut method");

  // find out the element then remove it
  $(this)
    .closest("tr")
    .fadeOut(1500, function () {
      console.log(this, " inside of our callback");
      $(this).remove();
    });
});