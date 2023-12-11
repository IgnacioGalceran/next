"use client";
import { useEffect, useRef, useState } from "react";
import VisibilityDetector from "../visibility";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("../time"), {
  ssr: false,
});

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const handleVisibilityChange1 = () => {
    setIsVisible1(true);
  };

  const handleHiddenChange1 = () => {
    setIsVisible1(false);
  };

  const handleVisibilityChange2 = () => {
    setIsVisible2(true);
  };

  const handleHiddenChange2 = () => {
    setIsVisible2(false);
  };

  const handleVisibilityChange3 = () => {
    setIsVisible3(true);
  };

  const handleHiddenChange3 = () => {
    setIsVisible3(false);
  };

  const handleVisibilityChange4 = () => {
    setIsVisible4(true);
  };

  const handleHiddenChange4 = () => {
    setIsVisible4(false);
  };

  const handleVisibilityChange5 = () => {
    setIsVisible5(true);
  };

  const handleHiddenChange5 = () => {
    setIsVisible5(false);
  };

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
          <Countdown targetDate={"2023-12-17 20:30"} />
        </section>
        <section className="cuadro-imagen">
          <VisibilityDetector
            onVisible={handleVisibilityChange1}
            onHidden={handleHiddenChange1}
          />
          <img
            className={`Foto ${isVisible1 ? "visible" : "hidden"}`}
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
          <p>Desde las 20:30</p>
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
          <VisibilityDetector
            onVisible={handleVisibilityChange2}
            onHidden={handleHiddenChange2}
          />
          <img
            className={`Foto ${isVisible2 ? "visible" : "hidden"}`}
            src="./imagenes/Foto3.jpeg"
          />
        </section>
        <section id="cuadro-cuatro" className="cuadro-cuatro">
          <div className="percha-container">
            <img width="90px" height="90px" src="./imagenes//sol.png" />
          </div>
          <p className="malla">Si querés, traé tu malla y toallón</p>
        </section>
        <section className="cuadro-imagen">
          <VisibilityDetector
            onVisible={handleVisibilityChange3}
            onHidden={handleHiddenChange3}
          />
          <img
            className={`Foto ${isVisible3 ? "visible" : "hidden"}`}
            src="./imagenes/Foto2.jpeg"
          />
        </section>
        <section className="cuadro-imagen">
          <VisibilityDetector
            onVisible={handleVisibilityChange4}
            onHidden={handleHiddenChange4}
          />
          <img
            className={`Foto ${isVisible4 ? "visible" : "hidden"}`}
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
          <VisibilityDetector
            onVisible={handleVisibilityChange5}
            onHidden={handleHiddenChange5}
          />
          <img
            className={`Foto ${isVisible5 ? "visible" : "hidden"}`}
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
