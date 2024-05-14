import {IonContent, IonHeader, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar} from "@ionic/react";
import {useEffect, useState} from "react";
import {MovieResult} from "moviedb-promise";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import tmdb from "../../service/Tmdb";

export default function Search() {
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