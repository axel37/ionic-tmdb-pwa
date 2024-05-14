import {
    IonContent,
    IonHeader,
    IonInput, IonItem, IonList,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    SearchbarInputEventDetail
} from "@ionic/react";
import {useEffect, useState} from "react";
import {MovieResult} from "moviedb-promise";
import {Tmdb} from "../../service/Tmdb";
import MovieListItem from "../../components/MovieListItem/MovieListItem";

export default function Search() {
    // TODO : TMDB should be a singleton
    const tmdb = new Tmdb();
    const [movies, setMovies] = useState<MovieResult[]>([]);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(await tmdb.searchMovies(query));
        };
        fetchMovies();
    }, [query]); // Run effect whenever query changes

    const handleInput = (ev: Event) => {
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) {
            const newQuery = target.value!.toLowerCase();
            setQuery(newQuery);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar
                    placeholder="The kentucky fried movie"
                    showClearButton="always"
                    debounce={1000}
                    onIonInput={(ev) => handleInput(ev)}
                >
                </IonSearchbar>

                <IonList>
                    {movies.map(movie => (
                        <MovieListItem movie={movie}></MovieListItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
}