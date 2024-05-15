import {IonIcon, IonItem, IonLabel} from "@ionic/react";
import {MovieInterface} from "../../domain/MovieInterface";
import {image} from "ionicons/icons";

interface Props {
    movie: MovieInterface
}

export default function MovieListItem({movie}: Props) {
    return (
        <IonItem key={movie.id} button={true} detail={true} routerLink={`/movie/${movie.id}`}>
            {movie.has_poster ?
                <img src={movie.poster_url_thumb} alt={"Poster for " + movie.title} slot="start"
                     style={{width: '50px', height: '50px'}}/>
                : <IonIcon color="danger" slot="start" icon={image}></IonIcon>
            }
            <IonLabel>
                {movie.title}
            </IonLabel>
        </IonItem>
    )
}