import MovieScore from "components/MovieScore";


function MovieCard() {
    const movie = {
        id: 1,
        image: "https://i.pinimg.com/originals/4c/dc/e1/4cdce167bae75ed83f4c3c7eae5cf637.png",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }

    return(
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Value</div>
            </div>
        </div>

    );
}

export default MovieCard;