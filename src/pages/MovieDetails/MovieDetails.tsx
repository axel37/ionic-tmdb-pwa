import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import tmdb from "../../service/Tmdb";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {MovieInterface} from "../../domain/MovieInterface";
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

interface RouteParams {
    id: string;
}

export default function MovieDetailsPage(): JSX.Element {
    const {id} = useParams<RouteParams>();
    const [movie, setMovie] = useState<MovieInterface | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const movie = await tmdb.findById(id);
            setMovie(movie);
        };
        fetchMovie();
    }, [id]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Search result : {movie?.title}</IonTitle>
                    {movie ? null : <IonProgressBar type="indeterminate"></IonProgressBar>}
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {movie && <MovieDetails movie={movie}/>}
            </IonContent>
        </IonPage>
    );
}