const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encoderUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${ encoderUrl }&key=098e57fc22fb44ad9e7d9443081405ae`
    });

    const resp = await instance.get();

    if (resp.data.results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.formatted;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}