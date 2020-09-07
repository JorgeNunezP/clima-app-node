const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;





const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getclima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es ${temp}`;
    } catch (e) {
        return `NMo se pudo determinar el clima de ${direccion}`;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);