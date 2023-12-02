const Familia = () => {
  let targetDate = new Date("2023-12-17 14:30:00").getTime();
  let currentDate = new Date().getTime();
  let timeLeft = targetDate - currentDate;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  function agregarCeros(valor: number) {
    return valor < 10 ? `0${valor}` : valor;
  }

  return <h1>hola</h1>;
};

export default Familia;
