import {
    IonContent,
    IonFooter,
    IonHeader,
    IonList,
    IonPage,
    IonProgressBar,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useState} from "react";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import tmdb from "../../service/Tmdb";
import TmdbCredits from "../../components/TmdbCredits/TmdbCredits";
import useAsync from "../../hooks/useAsync";

export default function Search() {
    const [query, setQuery] = useState<string>('');
    const {data: movies, isLoading} = useAsync(() => tmdb.searchMovies(query), [query], []);

    const handleInput = (ev: Event) => {
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) {
            const newQuery = target.value!.toLowerCase();
            setQuery(newQuery);
        }
    }

    const progressBarIfLoading = isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>;
    // Todo : Fix type error
    const movieListItems = movies.map(movie => (
        <MovieListItem movie={movie}></MovieListItem>
    ));
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar
                        placeholder="Airplane!"
                        showClearButton="always"
                        debounce={500}
                        onIonInput={(ev) => handleInput(ev)}
                    >
                    </IonSearchbar>
                    {progressBarIfLoading}
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {movieListItems}
                </IonList>
            </IonContent>
            <IonFooter>
                <TmdbCredits></TmdbCredits>
            </IonFooter>
        </IonPage>
    );
}