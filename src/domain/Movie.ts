import {ConfigurationResponse, MovieResponse} from "moviedb-promise";

/**
 * Wraps an API response containing Movie data and provide helper methods
 */
export class Movie {
    public data: MovieResponse
    private configuration: ConfigurationResponse

    constructor(response: MovieResponse, configuration: ConfigurationResponse) {
        this.data = response;
        this.configuration = configuration;
    }

    /**
     * Returns a valid image url
     */
    public fullImageUrl(): string {
        return this.configuration.images.secure_base_url + this.configuration.images.poster_sizes[2] + this.data.poster_path;
    }
}