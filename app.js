const {argv} = require('./Config/yargs');
const axios = require('axios');

const key = '27c675200emsh896e7f07cc6a501p10e254jsn913dcf36f613';
const encodedURI = encodeURI(argv.direccion);

const instancia = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
    timeout: 1000,
    headers: {'X-RapidAPI-Key': key}
  });


instancia.get()
.then(respuesta => {
    console.log(respuesta.data.Results[0]);
})
.catch(err => {
    console.log("ERROR!!!", err);
});

