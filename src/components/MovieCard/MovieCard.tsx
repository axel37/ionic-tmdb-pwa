import {Movie} from "../../domain/Movie";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";

interface Props {
    movie: Movie
}

export default function MovieCard({movie}: Props): JSX.Element {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{movie.data.title}</IonCardTitle>
                <IonCardSubtitle>{movie.data.release_date}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <img src={movie.fullImageUrl()} alt="The movie's poster."/>
            </IonCardContent>
        </IonCard>
    );
}