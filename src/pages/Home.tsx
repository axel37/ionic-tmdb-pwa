import {
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import TmdbCredits from "../components/TmdbCredits/TmdbCredits";
import {useEffect, useState} from "react";
import {Movie} from "../domain/Movie";
import {search} from "ionicons/icons";
import tmdb from "../service/Tmdb";

const Home: React.FC = () => {
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
                <IonLabel>
                    Tap the search icon to look for movies !
                </IonLabel>
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
