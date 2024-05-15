// src/components/MovieDetails/MovieDetails.tsx
import {MovieInterface} from "../../domain/MovieInterface";
import {IonNote} from "@ionic/react";

interface Props {
    movie: MovieInterface
}

export default function MovieDetails({movie}: Props): JSX.Element {
    return (
        <article>
            <h1>{movie.title}</h1>
            <IonNote>{movie.release_date}</IonNote>
            <br/>
            <img src={movie.poster_url_large} alt="The movie's poster."/>
            <p>{movie.overview}</p>
            <p>Vote average: {movie.vote_average}</p>
            <p>Vote count: {movie.vote_count}</p>
        </article>
    );
}