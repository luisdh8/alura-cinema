import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "data/db.json";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState([]);
    
    const parametros = useParams();
    // const video = videos.find(video => video.id === Number(parametros.id));
    console.log(video);
    
    useEffect(() => {
    fetch(`http://localhost:8000/videos?id=${parametros.id}`)
    .then(response => response.json())
    .then(data => setVideo(...data))
    }, []);

    if (!video) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1></h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="560" height="315"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    )
}

export default Player;