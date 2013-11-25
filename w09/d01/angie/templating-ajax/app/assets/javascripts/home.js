var $source = $('#country-template').html();
var template = Handlebars.compile($source);

var pointer = 0;


var populateCountries = function() {
  if(pointer < data.countries.length) {
    var $step = parseInt($('#step-input').val());
    var $content = $('#content');
    var limit = pointer + $step;

    var template = Handlebars.compile($('#country-template').html());
    for(var i = pointer; i < limit && i < data.countries.length; i++) {
      var html = template(data.countries[i]);
      $content.append(html);
    };
    pointer = i;
  };
};

var populateAll = function() {
  $.ajax({
  type: 'GET',
  url: 'countries.json'
  dataType: 'json'
  })
  // var $content = $('#content');
  // var template = Handlebars.compile($('#data-template').html());
  // Handlebars.registerPartial("country", $('#country-template').html());
  // $content.html(template(data));
};



// Create the event bindings
    $(document).ready(function() {
      $('#populate-button').on('click', function() {
        populateCountries();
      });
      $('#all-button').on('click', function() {
        $(window).off('scroll');
        populateAll();
      });
      $('#reset-button').on('click', function() {
        pointer = 0;
        $('#content').empty();
      });
      $(window).on('scroll',function() {
          if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            populateCountries();
          }
      });

    //   $(window).scroll(function() {
    //     // Cache our jQuery selector for window
    //     var $win = $(window);

    //     // Infinite scroll math!
    //     if($win.height() + $win.scrollTop() >= $(document).height()) {
    //         populateCountries();
    //     }
    // });
