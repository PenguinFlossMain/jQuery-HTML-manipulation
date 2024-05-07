$(document).ready(function () {
let btnAlert = $('#first')
$(btnAlert).click(function(){
    alert('I love you')
})
let btnSubmit = $('#third')
$(btnSubmit).click(function(){
    alert($('#second').val())  
})

$('#fourth').mouseover(function(){
    $('fourth').css('background-color', 'red')
})


$('#fifth').click(function(){
    $('spanMe').text($('<span>' + 'joel' + '</span>').appendTo('#spanMe'))
})

let friends = array('Adam','Ben','Charlie','Dennis','Elijah','Francis','Gerald','Henry','Indiana','Javier')
$('#sixth').click(function(){
    $('#list').text($('<li>' + friends + '</li>').appendTo('#list'))
})
})