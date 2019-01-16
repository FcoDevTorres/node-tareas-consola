const fs = require('fs');

let tareaList = [];

let crearTarea = (descripcion) => {
    cargarTareas();


    var tareaCreada = {
        descripcion,
        completado: false
    };
    tareaList.push(tareaCreada)

    return tareaCreada;
}

let getTareas = () => {
    cargarTareas();
    return tareaList;
}

let cargarTareas = () => {
    try {
        tareaList = require('../db/db.json');
    } catch (ex) {
        tareaList = [];
    }
}

let actualizarTarea = (desc, comp) => {
    var flag = false;
    cargarTareas();
    var arrIndex = tareaList.findIndex(tarea => {
        return tarea.descripcion.toLowerCase() === desc.toLowerCase()
    });
    if (arrIndex >= 0) {
        tareaList[arrIndex].completado = comp;
        flag = true;
    }
    guardarTareas();
    return flag;
}

let borrarTarea = (desc) => {
    cargarTareas();
    var flag = false;
    var index = tareaList.findIndex(tarea => tarea.descripcion.toLowerCase() === desc.toLowerCase());
    if (index >= 0) {
        tareaList.splice(index, 1)
        flag = true;
    }

    guardarTareas();
    return flag;
}

let guardarTareas = () => {
    var respuesta = "";
    let tareaListJson = JSON.stringify(tareaList);
    fs.writeFile("./db/db.json", tareaListJson, (err) => {
        if (err) {
            respuesta = err;
        }
    })
    return respuesta;
};

module.exports = {
    crearTarea,
    guardarTareas,
    getTareas,
    actualizarTarea,
    borrarTarea
}