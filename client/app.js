$(document).ready(function(){

  $('form').submit(function (event) {
    event.preventDefault();
    var dataToSend = $(this).serializeArray();
    dataToSend = dataToSend[0];

    console.log(dataToSend);
    $.post("/add", dataToSend, console.log("Data was sent!")).then( function () {
      $('.data-display').empty();
      $('input[type=text]').val("");
    }).then(updateList);

  });

  updateList();


});

function updateList() {
  $.get('/cats', function(response) {
    response.forEach( function(cat) {
      $('.data-display').append("<p>" + cat.name + "</p>");
    });
  });
}
