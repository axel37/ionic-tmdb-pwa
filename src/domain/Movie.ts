import {ConfigurationResponse, MovieResponse} from "moviedb-promise";

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