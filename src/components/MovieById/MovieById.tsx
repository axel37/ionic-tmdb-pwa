import React, {useEffect, useState} from "react";
import {details} from "../../service/tmdb";
import {MovieResponse} from "moviedb-promise";

interface Props {
    id: string
}

export default function MovieById({id}: Props): JSX.Element {
    const [result, setResult] = useState<MovieResponse>([]);
    useEffect(() => {
        (async () => {
            const movieResponse = await details(id);
            console.log(movieResponse);
            setResult(movieResponse);
        })();
    }, []);
    return (
        <>
            <p>{result.original_title}</p>
            {/*<img src={"https://www.themoviedb.org" + result.poster_path}/>*/}
        </>
    );
}