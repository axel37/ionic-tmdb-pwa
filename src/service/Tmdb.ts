import {ConfigurationResponse, MovieDb, MovieResult} from "moviedb-promise";
import {Movie} from "../domain/Movie";

class Tmdb {
    private static instance: Tmdb;
    private apiKey: string;
    private api: MovieDb;
    private configurationPromise: Promise<ConfigurationResponse>;
    private movieCache: Map<string, Movie>;
    private searchCache: Map<string, MovieResult[]>;


    private constructor() {
        this.apiKey = import.meta.env.VITE_TMDB_API_KEY;
        this.api = new MovieDb(this.apiKey);
        this.configurationPromise = this.api.configuration();
        this.movieCache = new Map();
        this.searchCache = new Map();
    }

    public static getInstance(): Tmdb {
        if (!Tmdb.instance) {
            console.debug("Creating Tmdb instance");
            Tmdb.instance = new Tmdb();
        }
        else {
            console.debug("Returning cached Tmdb instance");
        }

        return Tmdb.instance;
    }

    public async findById(id: string | number): Promise<Movie> {
        if (this.movieCache.has(String(id))) {
            console.log(`Found cached movie with id ${id}`);
            return this.movieCache.get(String(id));
        }
        const response = await this.api.movieInfo({id: id});
        const config = await this.configurationPromise;
        const movie = new Movie(response, config);
        this.movieCache.set(String(id), movie);
        return movie;
    }

    public async searchMovies(search: string): Promise<MovieResult[]> {
        if (this.searchCache.has(search)) {
            console.log(`Found cache results for search ${search}`);
            return this.searchCache.get(search);
        }
        const response = await this.api.searchMovie({query: search});
        const list = response.results ?? [];
        this.searchCache.set(search, list);
        return list;
    }
}

// Usage
const tmdb = Tmdb.getInstance();
export default tmdb;
