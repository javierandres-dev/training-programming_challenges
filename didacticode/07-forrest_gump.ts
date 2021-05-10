/* Crear un cronómetro con sus opciones de iniciar, pausar, detener, reiniciar.Mostrar tiempos. */
let chronometer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
  },
  run: any;

const formatDecimal = (aNum: number): string =>
  aNum < 10 ? `0${aNum}` : `${aNum}`;

const getChronometer = (): string => {
  return `${formatDecimal(chronometer.hours)}:${formatDecimal(
    chronometer.minutes
  )}´${formatDecimal(chronometer.seconds)}´´${formatDecimal(
    chronometer.centiseconds
  )}`;
};

const setHours = (): void => {
  chronometer.hours === 23 ? (chronometer.hours = 0) : chronometer.hours++;
};

const setMinutes = (): void => {
  chronometer.minutes === 59
    ? (chronometer.minutes = 0)
    : chronometer.minutes++;
};

const setSeconds = (): void => {
  chronometer.seconds === 59
    ? (chronometer.seconds = 0)
    : chronometer.seconds++;
};

const setCentiseconds = (): void => {
  chronometer.centiseconds === 99
    ? (chronometer.centiseconds = 0)
    : chronometer.centiseconds++;
};

const incrementChronometer = (): void => {
  setCentiseconds();
  if (chronometer.centiseconds === 0) {
    setSeconds();
  }
  if (chronometer.seconds === 0 && chronometer.centiseconds === 0) {
    setMinutes();
  }
  if (
    chronometer.minutes === 0 &&
    chronometer.seconds === 0 &&
    chronometer.centiseconds === 0
  ) {
    setHours();
  }
};

const startChronometer = (): void => {
  process.stdout.write('Ha seleccionado: "1-Iniciar"\t');
  run = setInterval(() => {
    process.stdout.write(`${getChronometer()}\n`);
    incrementChronometer();
  }, 1);
};

const pauseChronometer = (): void => {
  clearInterval(run);
  process.stdout.write('Ha seleccionado: "2-Pausar"\t');
  process.stdout.write(`
--------------------------------
Cronómetro:\t${getChronometer()}
--------------------------------
Seleccione una opción:
1-Iniciar, 2-Pausar (PAUSADO), 3-Detener, 4-Reiniciar, 5-Salir.
`);
};

const stopChronometer = () => {
  clearInterval(run);
  run = null;
  process.stdout.write('Ha seleccionado: "3-Detener"\t');
  process.stdout.write(`
--------------------------------
Cronómetro:\t${getChronometer()}
--------------------------------
Seleccione una opción:
1-Iniciar, 2-Pausar, 3-Detener (DETENIDO), 4-Reiniciar, 5-Salir.
`);
  chronometer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
  };
};

const resetChronometer = () => {
  chronometer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
  };
  process.stdout.write('Ha seleccionado: "4-Reiniciar"\t');
};

const offChronometer = () => {
  clearInterval(run);
  run = null;
  process.stdout.write('Ha seleccionado: "5-salir"');
  process.exit();
};

function onChronometer(): void {
  let option: string;
  process.stdout.write(`
--------------------------------
Cronómetro:\t${getChronometer()}
--------------------------------
Seleccione una opción:
1-Iniciar, 2-Pausar, 3-Detener, 4-Reiniciar, 5-Salir.
`);

  process.stdin.on('data', (data) => {
    option = data.toString().trim();

    switch (option) {
      case '1':
        startChronometer();
        break;
      case '2':
        pauseChronometer();
        break;
      case '3':
        stopChronometer();
        break;
      case '4':
        resetChronometer();
        break;
      case '5':
        offChronometer();
        break;
      default:
        process.stdout.write('Selecciona una opción válida.');
        break;
    }
  });
}
onChronometer();
