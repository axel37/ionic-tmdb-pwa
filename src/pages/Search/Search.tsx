import {IonContent, IonHeader, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar} from "@ionic/react";
import {useEffect, useState} from "react";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import tmdb from "../../service/Tmdb";
import {Movie} from "../../domain/Movie";

export default function Search() {
    const [movies, setMovies] = useState<Movie[]>([]);
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
                <IonToolbar>
                    <IonSearchbar
                        placeholder="The kentucky fried movie"
                        showClearButton="always"
                        debounce={1000}
                        onIonInput={(ev) => handleInput(ev)}
                    >
                    </IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {movies.map(movie => (
                        <MovieListItem movie={movie}></MovieListItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
}