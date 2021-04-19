/* Recibir dos entradas, fecha de presente y fecha de destino, calcular y
retornar si se va a viajar al futuro o al pasado con años, días, minutos y
segundos.  Nota: Sin meses.
Ejemplo de entrada: (MES DÍA AÑO HORAS MINUTOS)
* Presente: OCT 26 1985 01 21
* Destino: JUN 01 2020 17 00
Ejemplo de salida:
* Vas a viajar al futuro 14 años, 222 días, 15 horas y 39 minutos. */

/**
 * First solution
 */
interface Input {
  month: string;
  day: number;
  year: number;
  hours: number;
  minutes: number;
}

const backToTheFuture1 = (aOrigin: Input, aDestination: Input): string => {
  //console.log(aOrigin.);
  //console.log(aDestination);
  //const origin = new Date('August 19, 1975 23:15:30');
  const origin = new Date(
    `${aOrigin.month} ${aOrigin.day}, ${aOrigin.year} ${aOrigin.hours}:${aOrigin.minutes}`
  );
  console.log(origin);
  return 'working ... ';
};

// tests
backToTheFuture1(
  {
    month: 'OCT',
    day: 26,
    year: 1985,
    hours: 1,
    minutes: 21,
  },
  {
    month: 'JUN',
    day: 1,
    year: 2020,
    hours: 17,
    minutes: 0,
  }
);
