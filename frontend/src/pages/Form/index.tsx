import { Link } from 'react-router-dom';
import './styles.css'

function Form() {
    const movie = {
        id: 1,
        image: "https://i.pinimg.com/originals/4c/dc/e1/4cdce167bae75ed83f4c3c7eae5cf637.png",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title }</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Inform your e-mail</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Select your score</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Save</button>
                    </div>
                </form>
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;

