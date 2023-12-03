"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const buttons = buttonsRef.current.filter(Boolean);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isElementInViewport(el: HTMLElement, offset: number) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 + offset &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) -
          offset &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const buttons = buttonsRef.current.filter(Boolean);

    const handleScroll = () => {
      buttons.forEach((el) => {
        if (el && isElementInViewport(el, -200)) {
          el.classList.add("falling-button");
        } else if (el) {
          el.classList.remove("falling-button");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAudio = () => {
    const audio = document.getElementById("music") as HTMLAudioElement;

    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <main className="content">
        <div id="music-button" className="audio-container">
          <span
            id="play"
            className={`material-symbols-outlined ${
              isPlaying ? "invisible" : ""
            }`}
            onClick={toggleAudio}
          >
            play_circle
          </span>
          <span
            id="pause"
            className={`material-symbols-outlined ${
              isPlaying ? "" : "invisible"
            }`}
            onClick={toggleAudio}
          >
            stop_circle
          </span>
          <button id="music-text" className="music" onClick={toggleAudio}>
            {isPlaying ? "Pausar" : "Dale play!"}
          </button>
          <audio id="music" src="./musica/music.mp3" preload="auto"></audio>
        </div>
        <div className="title-container">
          <h1 className="titulo">Itatí</h1>
          <h2 className="fecha">17-12-2023</h2>
        </div>
      </main>
      <div className="section-container">
        <section className="cuadro-uno">
          <span>
            15 años, mezcla rara, dulce y hermosa... Edad de sueños, emociones y
            nuevas experiencias. Porque sos parte de mi vida y simplemente te
            quiero, te invito a compartir...
          </span>
          <p className="mi-dia">¡Mi día!</p>
        </section>
        <section className="cuadro-dos">
          <h2 className="tiempo">¿Cuánto falta?</h2>
          <div className="tiempo-numeros">
            <div className="tiempo-container">
              <span id="day"></span>
              <span id="day-d"></span>
              <span className="punto" id="puntoD"></span>
            </div>
            <div className="tiempo-container">
              <span id="hour"></span>
              <span id="hour-h"></span>
              <span className="punto" id="puntoH"></span>
            </div>
            <div className="tiempo-container">
              <span id="minute"></span>
              <span id="minute-m"></span>
              <span className="punto" id="puntoM"></span>
            </div>
            <div className="tiempo-container">
              <span id="second"></span>
              <span id="second-s"></span>
            </div>
          </div>
        </section>
        <section className="cuadro-imagen">
          <img
            className={`Foto ${scrollY > 600 ? "visible" : "hidden"}`}
            src="./imagenes/Foto4.jpeg"
          />
        </section>
        <section className="cuadro-cuatro">
          <img
            className="ubicacion"
            width="70px"
            height="70px"
            src="./imagenes/ubicacion.png"
          />
          <h1 className="mi-casa">Lugar</h1>
          <p>Calle 69 entre 52 y 54</p>
          <p>de 18:00 a 20:00</p>
          <a
            ref={(el) => buttonsRef.current.push(el)}
            className="button"
            target="_blank"
            href="https://maps.app.goo.gl/nszSTxFr4wy4y5tB7"
          >
            Cómo llegar
          </a>
        </section>
        <section className="cuadro-imagen">
          <img
            className={`Foto ${scrollY > 1100 ? "visible" : "hidden"}`}
            src="./imagenes/Foto3.jpeg"
          />
        </section>
        <section className="cuadro-imagen">
          <img
            className={`Foto ${scrollY > 2000 ? "visible" : "hidden"}`}
            src="./imagenes/Foto2.jpeg"
          />
        </section>
        <section className="cuadro-cinco">
          <img width="70px" height="70px" src="./imagenes/musica.png" />
          <span className="musica">¡Quiero que nos divirtamos juntos!</span>
          <span>Ayudame desde ahora a hacer</span>
          <span>
            la playlist para ese día con las canciones que no pueden faltar!
          </span>
          <a
            ref={(el) => buttonsRef.current.push(el)}
            className="button"
            target="_blank"
            href="https://spotify.link/InwxOehjbDb"
          >
            Playlist
          </a>
        </section>
        <section className="cuadro-imagen">
          <img
            className={`Foto ${scrollY > 3000 ? "visible" : "hidden"}`}
            src="./imagenes/Foto1.jpeg"
          />
        </section>
        <section className="cuadro-seis">
          <img width="70px" height="70px" src="./imagenes/corazon.png" />
          <span className="corazon">
            ¡El mejor regalo para mí, es tu compañía!
          </span>
        </section>
        <section className="cuadro-imagen">
          <img
            className={`Foto ${scrollY > 3800 ? "visible" : "hidden"}`}
            src="./imagenes/Foto5.jpeg"
          />
        </section>
        <section className="cuadro-siete">
          <h3 className="confirmar">Confirmá tu asistencia</h3>
          <span>
            Para mi es muy importante que confirmes esta invitación, dejame tu
            mensaje
          </span>
          <a
            ref={(el) => buttonsRef.current.push(el)}
            className="button"
            target="_blank"
            href="https://wa.me/543462590896"
          >
            Confirmación
          </a>
        </section>
        <section className="cuadro-ocho">
          <span>
            Los momentos más felices de la vida son cuando tenemos la suerte de
            compartirlos con las personas más queridas.
          </span>
          <p>Vos estás entre ellas.</p>
          <p className="espero">¡Te espero!</p>
          <h2 className="ita-final">Ita</h2>
        </section>
      </div>
      <footer>Aplicaciones web - Ignacio Galcerán</footer>
    </>
  );
}
