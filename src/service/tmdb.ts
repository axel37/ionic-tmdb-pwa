import {MovieDb, MovieResponse, MovieResultsResponse, SearchMovieRequest} from "moviedb-promise";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const tmdb = new MovieDb(apiKey);

export async function search(searchText: string): Promise<MovieResultsResponse> {
    const params: SearchMovieRequest = {query: searchText};
    return await tmdb.searchMovie(params);
}

export async function details(movieId: string): Promise<MovieResponse> {
    return tmdb.movieInfo({id: movieId});
}