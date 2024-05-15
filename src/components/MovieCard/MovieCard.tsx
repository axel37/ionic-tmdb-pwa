import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";
import {MovieInterface} from "../../domain/MovieInterface";

interface Props {
    movie: MovieInterface
}

export default function MovieCard({movie}: Props): JSX.Element {
    return (
        <IonCard>
            <img src={movie.poster_url_small} alt="The movie's poster."/>

            <IonCardHeader>
                <IonCardTitle>{movie.title}</IonCardTitle>
                <IonCardSubtitle>{movie.release_date}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Hello :)
            </IonCardContent>
        </IonCard>
    );
}