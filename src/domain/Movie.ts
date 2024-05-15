import {ConfigurationResponse, MovieResponse, MovieResult} from "moviedb-promise";
import {MovieInterface} from "./MovieInterface";

/**
 * Wraps an API response containing Movie data and provide helper methods
 */
export class Movie implements MovieInterface {
    private data: MovieResponse | MovieResult
    private configuration: ConfigurationResponse

    constructor(response: MovieResponse, configuration: ConfigurationResponse) {
        this.data = response;
        this.configuration = configuration;
    }

    // MovieInterface getters
    get id() {
        return this.data.id;
    }

    get title() {
        return this.data.title;
    }

    get overview() {
        return this.data.overview;
    }

    get poster_path() {
        return this.data.poster_path;
    }

    get has_poster() {
        return !!this.data.poster_path;
    }
    get poster_url() {
        return this.fullImageUrl();
    }
    get poster_url_thumb() {
        return this.fullImageUrl("thumb");
    }
    get poster_url_small() {
        return this.fullImageUrl("small");
    }
    get poster_url_medium() {
        return this.fullImageUrl("medium");
    }
    get poster_url_large() {
        return this.fullImageUrl("large");
    }

    get release_date() {
        return this.data.release_date;
    }

    get vote_average() {
        return this.data.vote_average;
    }

    get vote_count() {
        return this.data.vote_count;
    }

    /**
     * Returns a valid image url
     */
    public fullImageUrl(size: "thumb" | "small" | "medium" | "large" = "small"): string {
        if (!this.has_poster) {
            return null;
        }
        // Depending on the size, we choose a different poster size
        let sizeIndex = 0;
        switch (size) {
            case "thumb":
                sizeIndex = 0;
                break;
            case "small":
                sizeIndex = 1;
                break;
            case "medium":
                sizeIndex = 2;
                break;
            case "large":
                sizeIndex = 3;
                break;
        }
        return this.configuration.images.secure_base_url + this.configuration.images.poster_sizes[sizeIndex] + this.data.poster_path;
    }
}