/* Crear un cronómetro con sus opciones de iniciar, pausar, detener, reiniciar.Mostrar tiempos. */
let option: string | undefined = undefined;

function ask(): void {
  process.stdout.write(
    'Seleccione una opción:\n1-Iniciar, 2-Pausar, 3-Detener, 4-Reiniciar, 5-Salir.\n'
  );
}
ask();

process.stdin.on('data', (data) => {
  option = data.toString().trim();
  if (option === '5') {
    process.exit();
  } else {
    switch (option) {
      case '1':
        console.log('...1...');
        ask();
        break;
      case '2':
        console.log('...2...');
        ask();
        break;
      case '3':
        console.log('...3...');
        ask();
        break;
      case '4':
        console.log('...4...');
        ask();
        break;
      case '5':
        console.log('...5...');
        break;
      default:
        console.log('...?...');
        break;
    }
  }
});
