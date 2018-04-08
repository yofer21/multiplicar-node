const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      return reject(`El valor base introducido "${base}" no es un número`);
    }

    if (!Number(limite)) {
      return reject(`El valor limite introducido "${limite}" no es un número`);
    }

    console.log(`========================`.green);
    console.log(`= Tabla de ${base}`.green);
    console.log(`========================`.green);


    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
    }



  });

}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      return reject(`El valor introducido "${base}" no es un número`);
    }

    if (!Number(limite)) {
      return reject(`El valor limite introducido "${limite}" no es un número`);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tabla-${base}.txt`)
    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}