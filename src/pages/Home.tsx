import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import TmdbCredits from "../components/TmdbCredits/TmdbCredits";
import {useEffect, useState} from "react";
import {Movie} from "../domain/Movie";
import {Tmdb} from "../service/Tmdb";
import MovieCard from "../components/MovieCard/MovieCard";

const Home: React.FC = () => {
    const tmdb = new Tmdb();
    const [movie, setMovie] = useState<Movie>([]);

    // useEffect(() => {
    //     (async () => {
    //         const movie = await tmdb.findById(813);
    //         console.log(movie);
    //         setMovie(movie);
    //     })();
    // }, []);

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
                {/*<MovieCard movie={movie}/>*/}
                <TmdbCredits/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
