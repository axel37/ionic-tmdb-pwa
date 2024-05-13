import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import TmdbCredits from "../components/TmdbCredits/TmdbCredits";
import MovieById from "../components/MovieById/MovieById";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MovieById id="813"/>
                <TmdbCredits/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
