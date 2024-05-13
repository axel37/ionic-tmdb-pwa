import {ConfigurationResponse, MovieDb, MovieResponse, MovieResultsResponse, SearchMovieRequest} from "moviedb-promise";

export class Movie {
    title: string
    imageUrl: string
    constructor(response: MovieResponse, configuration: ConfigurationResponse) {
        this.title = response.title;
        this.imageUrl = this.createImageUrl(configuration.images.secure_base_url, configuration.images.poster_sizes[1], response.poster_path);
    }

    createImageUrl(basePath: string, size: string, url: string): string {
        return basePath + size + url;
    }
}

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

