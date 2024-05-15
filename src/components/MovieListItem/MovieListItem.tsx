import {IonIcon, IonImg, IonItem, IonLabel, IonThumbnail} from "@ionic/react";
import {MovieInterface} from "../../domain/MovieInterface";
import {image} from "ionicons/icons";

interface Props {
    movie: MovieInterface
}

export default function MovieListItem({movie}: Props) {
    return (
        <IonItem key={movie.id} button={true} detail={true} routerLink={`/movie/${movie.id}`}>
            <IonThumbnail slot="start">
                {movie.has_poster ?
                    <IonImg src={movie.poster_url_thumb} aria-hidden="true" alt=""/>
                    : <IonIcon icon={image} aria-hidden="true" size="large"></IonIcon>
                }
            </IonThumbnail>

            <IonLabel>
                {movie.title}
            </IonLabel>
        </IonItem>
    )
}