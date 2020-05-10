$(document).ready(function() {
    $('.startSkill').hide();
});

$('#addSkill').click(function() {
    const $skill = $('input').val()
    $('#skills').append('<button>X</button> ' + $skill + '<br>')
});