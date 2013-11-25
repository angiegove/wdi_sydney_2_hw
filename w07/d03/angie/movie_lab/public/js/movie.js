_.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

$(document).ready(function(){

  $('#fetch').click(function(event) {
    event.preventDefault();

  var title = $('#title').val(); //This is to enable the user to set their own maximum random number
    if (! title) {
      alert('Please enter a  valid movie title');
      $('#title').focus();
      return;
    };

    var data = {
      title: title
    };

    $.get('/movie.json', data, function(result) {
      console.log(result)

      var template = $('#movie_template').html();
      var movie_templater = _.template( template );
      $('#movies').html( movie_templater( result ) );

      $('#title').text(result.Title)
      $('#title').text(result.Year)

    });

  });
});