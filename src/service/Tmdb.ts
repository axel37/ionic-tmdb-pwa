import {ConfigurationResponse, MovieDb, MovieResultsResponse, SearchMovieRequest} from "moviedb-promise";
import {Movie} from "../domain/Movie";

export class Tmdb {
    apiKey = import.meta.env.VITE_TMDB_API_KEY;
    api = new MovieDb(this.apiKey);
    configurationPromise: Promise<ConfigurationResponse>

    constructor() {
        this.configurationPromise = this.api.configuration();
    }

    search(searchText: string): Promise<MovieResultsResponse> {
        const params: SearchMovieRequest = {query: searchText};
        return this.api.searchMovie(params);
    }

    async findById(id: string): Promise<Movie> {
        const response = await this.api.movieInfo({id: id});
        const config = await this.configurationPromise;
        return new Movie(response, config);
    }
}

