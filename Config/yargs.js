const yargs = require("yargs");

const argv = yargs.options({
    direccion : {
        alias: 'd',
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
})
.argv;

module.exports = {
    argv
}