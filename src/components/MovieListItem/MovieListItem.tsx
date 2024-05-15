import {IonIcon, IonItem} from "@ionic/react";
import {MovieInterface} from "../../domain/MovieInterface";
import {image} from "ionicons/icons";

interface Props {
    movie: MovieInterface
}

export default function MovieListItem({movie}: Props) {
    return (
        <IonItem key={movie.id} button={true} detail={true}>
            {movie.has_poster ?
                <img src={movie.poster_url_thumb} alt={"Poster for " + movie.title} slot="start"
                     style={{width: '50px', height: '50px'}}/>
                : <IonIcon color="danger" slot="start" icon={image}></IonIcon>
            }
            {movie.title}
        </IonItem>
    )
}