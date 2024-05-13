import React, {useEffect, useState} from "react";
import {MovieResponse} from "moviedb-promise";
import {Movie, Tmdb} from "../../service/Tmdb";

interface Props {
    id: string
}

export default function MovieById({id}: Props): JSX.Element {
    const tmdb = new Tmdb();
    const [movie, setMovie] = useState<Movie>([]);
    useEffect(() => {
        (async () => {
            const movie = await tmdb.findById(id);
            console.log(movie);
            setMovie(movie);
        })();
    }, []);
    return (
        <>
            <p>{movie.title}</p>
            <img src={movie.imageUrl}/>
        </>
    );
}