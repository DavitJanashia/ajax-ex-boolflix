// api key mag saitidan
//meore api pdfshia
function addSearchClickListener (){
  var target = $('#search');
  target.click(mySearch);
}

function mySearch(){
  var target = $('#results');
  target.html('');

  getMovies();
  getSeries();

  var target = $('#query');
  target.val('');
}


function getMovies(query){
  var target = $('#query');
  var query = target.val();
  // target.val('');

  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    data: {
      'api_key': '302b0422f5bd2db3260002b93e481593',
      'query': query
    },
    success: function(data){
      var movies = data['results'];
      // console.log(movies);

      var target = $('#results');
      var template = $('#movie-template').html();
      var compiled = Handlebars.compile(template);
      // target.html('');

      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        // console.log(movie);

        var votoM = movies[i]['vote_average'];
        var stelle = parseInt(votoM / 2);
        var fullStar = $('#full-star');
        var emptyStar = $('#empty-star');


        // console.log(votoM, stelle);
        var starr = $('#star-template');

        var myPoster;
        if(movie['poster_path'] == null){
          // myPoster = 'img/cat.jpg';
        } else{
          myPoster = 'https://image.tmdb.org/t/p/w342' + movie['poster_path'];
        }

        var movieHTML = compiled({
          li_class: i,
          title: movie['title'],
          type: '<div class="movie">Movie</div>',
          original_title: movie['original_title'],
          original_language: movie['original_language'],
          image: myPoster
        });
        target.append(movieHTML);


        var targetvotee = $(`li[data-id="${i}"] .votee`);
        // console.log(stelle);
        for (var q = 0; q < stelle; q++) {
          targetvotee.append($('#fullstar-template').html());
        }
        for (var p = 0; p < (5 - stelle); p++) {
          targetvotee.append($('#emptystar-template').html());
        }

        var tempFlagg = $('#flag-uk-template').html();

        var targetlangg = $(`li[data-id="${i}"] .langg`);
        if (targetlangg.html() == 'en'){
          targetlangg.html('');
          targetlangg.append(tempFlagg);
        }

      }

    },
    error: function (err){
      console.log(err);
    }
  });
}
function getSeries(){
  var target = $('#query');
  var query = target.val();
  // target.val('');

  $.ajax({
    url: 'https://api.themoviedb.org/3/search/tv',
    method: 'GET',
    data: {
      'api_key': '302b0422f5bd2db3260002b93e481593',
      'query': query
    },
    success: function(data){
      var series = data['results'];
      // console.log(movies);

      var target = $('#results');
      var template = $('#tv-template').html();
      var compiled = Handlebars.compile(template);
      // target.html('');

      for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        // console.log(serie);

        var votoM = series[i]['vote_average'];
        var stelle = parseInt(votoM / 2);
        var fullStar = $('#full-star');
        var emptyStar = $('#empty-star');



        // console.log(votoM, stelle);
        var starr = $('#star-template');

        var myPoster;
        if(serie['poster_path'] == null){
          // myPoster = 'img/cat.jpg';
        } else{
          myPoster = 'https://image.tmdb.org/t/p/w342' + serie['poster_path']
        }

        var serieHTML = compiled({
          li_class: i,
          name: serie['name'],
          type: '<div class="series">Series</div>',
          original_name: serie['original_name'],
          original_language: serie['original_language'],
          imagee: myPoster

        });
        target.append(serieHTML );


        var targetvoteeTv = $(`li[data-id-tv="${i}"] .voteetv`);
        // console.log(stelle);
        for (var q = 0; q < stelle; q++) {
          targetvoteeTv.append($('#fullstar-template').html());
        }
        for (var p = 0; p < (5 - stelle); p++) {
          targetvoteeTv.append($('#emptystar-template').html());
        }

        var tempFlagg = $('#flag-uk-template').html();

        var targetlanggTv = $(`li[data-id-tv="${i}"] .langgtv`);

        if (targetlanggTv.html() == 'en'){
          targetlanggTv.html('');
          targetlanggTv.append(tempFlagg);
        }

      }

    },
    error: function (err){
      console.log(err);
    }
  });

}


function myHover(){
  $(document).on({
    mouseenter: function () {
      $(this).addClass('grey');
      $(this).children('.myPosterr').addClass('myHide');
      $(this).children('.myInfo').removeClass('myHide');
    },

    mouseleave: function () {
      $(this).removeClass('grey');
      $(this).children('.myPosterr').removeClass('myHide');
      $(this).children('.myInfo').addClass('myHide');
    }
  }, '.mycard');
}

function init(){
  addSearchClickListener();
  myHover();
}

$(document).ready(init);



// funzione per ordinare array in base alla chiave DA VEDERE SE FUNZIONA
// function sortByKey(array, key) {
//     return array.sort(function(a, b) {
//         var x = a[key];
//         var y = b[key];
//         return ((x < y) ? 1 : ((x > y) ? -1 : 0));
//     });
// }
































// end
