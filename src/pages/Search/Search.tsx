import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonProgressBar,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useEffect, useState} from "react";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import tmdb from "../../service/Tmdb";
import {Movie} from "../../domain/Movie";

export default function Search() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setMovies(await tmdb.searchMovies(query));
            setIsLoading(false)
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
                    {isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}
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