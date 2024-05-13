import {MovieDb} from "moviedb-promise";


const apiKey = import.meta.env.VITE_TMDB_API_KEY;

async function testTmdbApi(): Promise<void> {
    const tmdb = new MovieDb(apiKey);
    const results = await tmdb.searchMovie({query: "airplane"});
    console.log(results);
}

export default testTmdbApi;