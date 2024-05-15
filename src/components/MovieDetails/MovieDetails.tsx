// src/components/MovieDetails/MovieDetails.tsx
import {MovieInterface} from "../../domain/MovieInterface";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonModal,
    IonNote,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useRef} from "react";

interface Props {
    movie: MovieInterface
}

export default function MovieDetails({movie}: Props): JSX.Element {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <article>
            <h1>{movie.title}</h1>
            <IonNote>{movie.release_date}</IonNote>
            <br/>
            <IonButton id="open-modal" fill="outline">
                <img src={movie.poster_url_small} alt="The movie's poster."/>
            </IonButton>
            <p>{movie.overview}</p>
            <p>Vote average: {movie.vote_average}</p>
            <p>Vote count: {movie.vote_count}</p>

            <IonModal ref={modal} trigger="open-modal"  style={{"--height": "100%"}}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                        </IonButtons>
                        <IonTitle>Poster</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonImg src={movie.poster_url_large} alt="The movie's poster."/>
                </IonContent>
            </IonModal>
        </article>
    );
}