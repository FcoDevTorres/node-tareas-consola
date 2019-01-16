var descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea"
};

const argv = require('yargs')
    .command('listar', 'Enlista las tareas pendientes', {

    }).command('crear', 'Crea una tarea', {
        descripcion
    }).command('eliminar', 'Elimina una tarea', {
        descripcion
    }).command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado: {
            demand: true,
            alias: "c",
            default: true
        }
    }).help().argv;
module.exports = {
    argv
}