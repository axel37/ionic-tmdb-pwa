import {
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import TmdbCredits from "../components/TmdbCredits/TmdbCredits";
import {useEffect, useState} from "react";
import {Movie} from "../domain/Movie";
import {Tmdb} from "../service/Tmdb";
import MovieCard from "../components/MovieCard/MovieCard";
import {search} from "ionicons/icons";

const Home: React.FC = () => {
    const tmdb = new Tmdb();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        (async () => {
            const movie = await tmdb.findById(813);
            console.log(movie);
            setMovie(movie);
        })();
    }, []);
    debugger;
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic TMDB</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {movie && <MovieCard movie={movie}/>}
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton routerLink="/search">
                        <IonIcon icon={search}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <TmdbCredits/>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Home;
