"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const agregarCeros = (valor: number) => (valor < 10 ? `0${valor}` : valor);

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = new Date().getTime();
    const timeLeft = targetDateTime - currentDateTime;
    return Math.max(0, timeLeft);
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <>
      <h2 className="tiempo">¿Cuánto falta?</h2>
      <div className="tiempo-numeros">
        {timeRemaining > 0 ? (
          <>
            <div className="tiempo-container">
              <div>
                <span>{agregarCeros(days)}</span>
                <span>Días</span>
              </div>
              <span className="punto" id="puntoD">
                :
              </span>
            </div>
            <div className="tiempo-container">
              <div>
                <span>{agregarCeros(hours)}</span>
                <span>Horas</span>
              </div>
              <span className="punto" id="puntoH">
                :
              </span>
            </div>
            <div className="tiempo-container">
              <div>
                <span>{agregarCeros(minutes)}</span>
                <span>Minutos</span>
              </div>
              <span className="punto" id="puntoM">
                :
              </span>
            </div>
            <div className="tiempo-container">
              <div>
                <span>{agregarCeros(seconds)}</span>
                <span>Segundos</span>
              </div>
            </div>
          </>
        ) : (
          <div className="limitTime">
            <h2 className="tiempo">Es ahora!!</h2>
            <span className="imageCumple"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default Countdown;
