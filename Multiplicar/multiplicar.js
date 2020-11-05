// requierds
const fs = require('fs');
const { Module } = require('module');


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += base + ' X ' + i + ' = ' + base * i + '\n';

        }

        fs.writeFile('C:/Users/emanueldeff/Desktop/node/03-bases-node/Tablas/tala-' + base + '-.txt', data, (err) => {

            if (err) reject(err);

            resolve('tala-' + base + '-.txt');
        });

    });

}

module.exports = {
    crearArchivo
}