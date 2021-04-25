/* Recibir dos entradas, fecha de presente y fecha de destino, calcular y
retornar si se va a viajar al futuro o al pasado con años, días, minutos y
segundos.  Nota: Sin meses.
Ejemplo de entrada: (MES DÍA AÑO HORAS MINUTOS)
* Presente: OCT 26 1985 01 21
* Destino: JUN 01 2020 17 00
Ejemplo de salida:
* Vas a viajar al futuro 34 años, 227 días, 15 horas y 39 minutos. */

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

const backToTheFuture = (aOrigin: Input, aDestination: Input): string => {
  const origin: any = new Date(
    `${aOrigin.month} ${aOrigin.day}, ${aOrigin.year} ${aOrigin.hours}:${aOrigin.minutes}`
  );

  const destination: any = new Date(
    `${aDestination.month} ${aDestination.day}, ${aDestination.year} ${aDestination.hours}:${aDestination.minutes}`
  );

  if (origin - destination === 0) return 'No vas a viajar en el tiempo.';

  const difference: number = origin - destination,
    second: number = 1000,
    minute: number = second * 60,
    hour: number = minute * 60,
    day: number = hour * 24,
    year: number = day * 365;
  let toThe: string;

  Math.sign(difference) === -1 ? (toThe = 'futuro') : (toThe = 'pasado');

  const years = Math.floor(Math.abs(difference) / year);
  let rest: number = Math.abs(difference) - years * year;
  const days = Math.floor(rest / day);
  rest -= days * day;
  const hours = Math.floor(rest / hour);
  rest -= hours * hour;
  const minutes = Math.floor(rest / minute);

  return `Vas a viajar al ${toThe} ${years} años, ${days} días, ${hours} horas y ${minutes} minutos.`;
};

// tests
let res: string;
res = backToTheFuture(
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 40,
  },
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 40,
  }
);
console.log(res);
res = backToTheFuture(
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
console.log(res);
res = backToTheFuture(
  {
    month: 'OCT',
    day: 26,
    year: 1985,
    hours: 1,
    minutes: 21,
  },
  {
    month: 'JUN',
    day: 15,
    year: 2010,
    hours: 15,
    minutes: 30,
  }
); // future 24y 238d 14h 9m
console.log(res);
res = backToTheFuture(
  {
    month: 'OCT',
    day: 26,
    year: 1985,
    hours: 1,
    minutes: 21,
  },
  {
    month: 'JUN',
    day: 15,
    year: 1975,
    hours: 15,
    minutes: 30,
  }
); // past 10y 135d 9h 51m
console.log(res);
res = backToTheFuture(
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 39,
  },
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 40,
  }
);
console.log(res);
res = backToTheFuture(
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 40,
  },
  {
    month: 'APR',
    day: 24,
    year: 2021,
    hours: 19,
    minutes: 39,
  }
);
console.log(res);
