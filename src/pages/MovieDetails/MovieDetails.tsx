import {useParams} from "react-router-dom";
import tmdb from "../../service/Tmdb";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonProgressBar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import useAsync from "../../hooks/useAsync";

interface RouteParams {
    id: string;
}

export default function MovieDetailsPage(): JSX.Element {
    const {id} = useParams<RouteParams>();
    const {data: movie, isLoading} = useAsync(() => tmdb.findById(id), [id]);

    const progressBarIfLoading = isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>;
    const movieIfLoaded = movie && <MovieDetails movie={movie}/>;
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    {/*TODO Fix type error ?*/}
                    <IonTitle>Search result : {movie?.title}</IonTitle>
                    {progressBarIfLoading}
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {movieIfLoaded}
            </IonContent>
        </IonPage>
    );
}