import {IonIcon, IonItem} from "@ionic/react";
import {MovieResult} from "moviedb-promise";
import {image, listCircle} from "ionicons/icons";

interface Props {
    movie: MovieResult
}

export default function MovieListItem({movie}: Props) {
    return (
        <IonItem key={movie.id} button={true} detail={true}>
            <IonIcon color="danger" slot="start" icon={image} size="large"></IonIcon>
            {movie.title}
        </IonItem>
    )
}