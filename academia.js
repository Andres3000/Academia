"use strict"
//Definición de funciones
/**
 * @fileOverview En este fichero hay funciones de ejemplo
 * @author Andrés Garrido
 * @version 2.2
 */
//Función que nos devuelve un array con el nombre de los alumnos
/**
 * @description Función que nos devuelve un array con el nombre de los alumnos.
 * @param {Array} listaAlumnos Array de objetos tipo alumno
 * @returns {Nombre} nombre de alumnos 
 */
function nombreAlumnos(listaAlumnos){ 
    let nombres=[];
    for(let alumno of listaAlumnos){       
        nombres.push(alumno.nombre); //Cambiar nombres por nombre
    }
    return nombres;
}


//Función que nos devuelve un objeto alumno, buscamos por nombre
//Si no encuentra ningún alumno con ese nombre devuelve null
/**
 * @description Función que nos devuelve un objeto alumno, buscamos por nombre,si no encuentra ningún alumno con ese nombre devuelve null.
 * @param {Array} listaAlumnos Array de objetos tipo alumno
 * @param {String} nombre el nombre del alumno
 * @returns {Nombre} nombre del alumno
 */
function buscarAlumno(nombre,listaAlumnos){
    for(let alumno of listaAlumnos){
               
        if(alumno.nombre==nombre){
            return alumno;
        }
        
    }
    return null;
}

ghfghf
//función que nos devuelve el nombre completo de un alumno
//recibe como parametro un objeto alumno
/**
 * @description Función que nos devuelve el nombre completo de un alumno.
 * @param {String} alumno objeto alumno
 * @returns {Nombre} nombre del alumno
 */
function nombreCompleto(alumno){
    let nombre="";
    nombre=alumno.nombre;
    for(let apellido of alumno.apellidos){
        nombre=nombre+" "+apellido;
    }
    return nombre;
}

//función que devuelve los alumnos que pertenecen a determinado curso
/**
 * @description Función que devuelve los alumnos que pertenecen a determinado curso.
 * @param {Array} listaAlumnos Array de objetos tipo alumno
 * @param {String} curso curso al que pertenece el alumno
 * @returns {Nombre} devuelve el nombre del alumno que pertenece a ese curso.
 */
function alumnosCurso(curso,listaAlumnos){
    let alumnosCurso=[];
    for(let alumno of listaAlumnos){
        if(alumno.curso==curso){
            alumnosCurso.push(alumno);
        }
        
    }
    return alumnosCurso;
}


//Función que devuelve los alumnos matriculados en la asignatura
//que pasamos como parámetro
/**
 * @description Función que devuelve los alumnos matriculados en la asignatura que pasamos como parámetro.
 * @param {Array} listaAlumnos Array de objetos tipo alumno
 * @param {String} asignatura asignatura ala que pertenece el alumno
 * @returns {Nombre} devuelve el nombre de la asignatura a la cual pertenece el alumno
 */
function alumnosAsignatura(asignatura,listaAlumnos){
    let alumnosAsignatura=[];
    
    //Completar código

    return alumnosAsignatura;
}


//////////////////////////EMPIEZA EL PROGRAMA//////////////////////////////////////////

console.log("Empieza el programa");
let fs = require("fs");
let alumnos = fs.readFileSync("alumnos.json","utf-8");



let alumnosArray=JSON.parse(alumnos);


/*
console.log("El número de alumnos del ficheros es: ",
alumnosArray.length);

console.log("Los nombres de los alumnos matriculados son:");
let nombres_de_alumnos=nombreAlumnos(alumnosArray);
console.log(nombres_de_alumnos);
*/
/*
console.log("Voy a comprobar si hay una alumna llamada Olivia")
let alumno=buscarAlumno("Olivia",alumnosArray); //Como no hay tendría que mostrar null
console.log(alumno);
/*

console.log("Voy a comprobar si hay un alumno llamado Pedro");
//let alumno=buscarAlumno("Pedro",alumnosArray); //Como si lo hay tendría que mostrar el alumno Pedro
//console.log(alumno);
*/
/*
console.log("Ahora voy a mostrar el nombre completo de Pedro");
let alumno=buscarAlumno("Pedro",alumnosArray); //Es necesario que buscarAlumno funcione bien
let nombre_completo=nombreCompleto(alumno);
console.log(nombre_completo);
*/

console.log("Alumnos de Primero")
let alumnos_primero=alumnosCurso("primero",alumnosArray);
console.log(alumnos_primero);





