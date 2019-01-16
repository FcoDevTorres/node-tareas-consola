const argv = require('./config/yargs').argv;
const tareasHelper = require('./helper/tareaHelper');
const colors = require('colors');
const comando = argv._[0];

switch (comando) {
    case "crear":
        let tareaCreada = tareasHelper.crearTarea(argv.descripcion);
        console.log("La siguiente tarea se creo ", tareaCreada);
        let resultado = tareasHelper.guardarTareas();
        if (resultado && resultado != "") {
            console.log("Error al guardar el archivo ".red, resultado);
        } else {
            console.log("Guardado correctamente".green)
        }
        break;
    case "listar":
        let tareas = tareasHelper.getTareas();
        for (const tarea of tareas) {
            console.log("###############TAREAS POR HACER################".green);
            console.log("Descripcion: ", tarea.descripcion.gray);
            console.log("Completado: ", tarea.completado ? "Si".green : "No".red);
            console.log("###############################################".green);
        }
        break;
    case "actualizar":
        let resultadoAct = tareasHelper.actualizarTarea(argv.descripcion, argv.completado);
        console.log(resultadoAct ? "Se ha guardado con éxito".green : `No se ha encontrado la tarea ${argv.descripcion.red}`);
        break;
    case "eliminar":
        let resultadoDel = tareasHelper.borrarTarea(argv.descripcion);
        console.log("Resultado del borrado : ", resultadoDel ? "Éxito".green : "Fallo".red);
        break;
    default:
        console.log("Comando no válidao");
}