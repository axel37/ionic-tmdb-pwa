// Interface containing common movie data. See Movie, MovieResponse, MovieResult
export interface MovieInterface {
    id?: number;
    title?: string;
    overview?: string;
    poster_path?: string;
    poster_url?: string;
    has_poster: boolean;
    poster_url_thumb?: string;
    poster_url_small?: string;
    poster_url_medium?: string;
    poster_url_large?: string;
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
}