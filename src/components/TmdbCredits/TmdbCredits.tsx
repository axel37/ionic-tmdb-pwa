import React from "react";
import {IonNote} from "@ionic/react";

const TmdbCredits: React.FunctionComponent = () => {
    return (
        <IonNote>This product uses the <a href="https://www.themoviedb.org">TMDB</a> API but is not endorsed or certified by TMDB.</IonNote>
    );
};

export default TmdbCredits;