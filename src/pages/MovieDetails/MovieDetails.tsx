import {useParams} from "react-router-dom";
import tmdb from "../../service/Tmdb";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonProgressBar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import useAsync from "../../hooks/useAsync";
import {build} from "ionicons/icons";
import {MovieInterface} from "../../domain/MovieInterface";

interface RouteParams {
    id: string;
}

export default function MovieDetailsPage(): JSX.Element {
    const {id} = useParams<RouteParams>();
    const {data: movie, isLoading, error} = useAsync<MovieInterface | null>(() => tmdb.findById(id), [id], null);

    const movieTitleIfLoaded = movie && movie.title;
    const progressBarIfLoading = isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>;
    const movieIfLoaded = movie && <MovieDetails movie={movie}/>;
    const errorMessage = error && <p><IonIcon icon={build}></IonIcon>An error occurred while displaying this movie.</p>;

    if (error) {
        console.warn(error);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Search result : {movieTitleIfLoaded}</IonTitle>
                    {progressBarIfLoading}
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {movieIfLoaded}
                {errorMessage}
            </IonContent>
        </IonPage>
    );
}