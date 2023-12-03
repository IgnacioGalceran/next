"use client";
import React, { useEffect, useState } from "react";

const agregarCeros = (valor: number) => (valor < 10 ? `0${valor}` : valor);

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    calculateTimeRemaining()
  );

  function calculateTimeRemaining() {
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = new Date().getTime();
    const timeLeft = targetDateTime - currentDateTime;
    return Math.max(0, timeLeft);
  }

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
    <div>
      <div>
        {agregarCeros(hours)}:{agregarCeros(minutes)}:{agregarCeros(seconds)}
      </div>
    </div>
  );
};

export { agregarCeros };
export default Countdown;
