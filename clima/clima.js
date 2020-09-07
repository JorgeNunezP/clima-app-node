const axios = require('axios');

const getclima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eae79182dc2b730c4b5ac55d51648c93&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getclima
}