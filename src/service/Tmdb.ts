import {ConfigurationResponse, MovieDb, MovieResult, MovieResultsResponse, SearchMovieRequest} from "moviedb-promise";
import {Movie} from "../domain/Movie";

export class Tmdb {
    private apiKey = import.meta.env.VITE_TMDB_API_KEY;
    private api = new MovieDb(this.apiKey);
    private configurationPromise: Promise<ConfigurationResponse>

    constructor() {
        this.configurationPromise = this.api.configuration();
    }

    /**
     * Find a movie by its TMDB id
     * @param id
     */
    public async findById(id: string|number): Promise<Movie> {
        const response = await this.api.movieInfo({id: id});
        const config = await this.configurationPromise;
        return new Movie(response, config);
    }

    public async searchMovies(search: string): Promise<MovieResult[]> {
        const response = await this.api.searchMovie({query: search});
        return response.results ?? [];
    }
}

