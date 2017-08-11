var moviesJSON = require('../movies.json');
//home
exports.home=function(req,res){
    var movies=moviesJSON.movies;
    res.render('home',{
        title:'Star Wars Movie',
        movies: movies
    });
};

//movie_single
exports.movie_single=function(req,res){
    var movies=moviesJSON.movies;
    var episode_number=req.params.episode_number;
    
   
    if(episode_number >= 1 && episode_number <= 6){
                var movie=movies[episode_number-1]
        var main_characters=movie.main_characters;
        var title=movie.title;
        res.render("movie_single",{
            title: title,
            movies:movies,
            movie:movie,
            main_characters:main_characters,
        });
    }else{
        res.render('notFound',{
            movies:movies,
            title:'Not Found'});
    }

};

//not found
exports.notFound=function(req,res){
      var movies=moviesJSON.movies;
    res.render('notFound',{
        movies:movies,
        title:'Not found'});
};