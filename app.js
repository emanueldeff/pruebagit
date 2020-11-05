// requierds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help
    .argv;
const { crearArchivo } = require('./Multiplicar/multiplicar.js');

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

console.log(argv);

// crearArchivo(base)
//     .then(res => console.log(res))
//     .catch(e => console.log(e));