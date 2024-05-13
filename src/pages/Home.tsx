import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import TmdbCredits from "../components/TmdbCredits/TmdbCredits";
import testTmdbApi from "../service/tmdb";

const Home: React.FC = () => {
    testTmdbApi();
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
                <ExploreContainer/>
                <TmdbCredits/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
