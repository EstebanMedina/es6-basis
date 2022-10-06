//Traer la dependencia del
//componente suma 
//Traer la dependencia de del


import {sumar, restar, multiplicar} from './sumar.js'
import materias from './materias.js'

//1.recorrido de arreglo: forEach
materias.forEach((materia)=>{
    if(materia.profesor === 'Cristian Buitrago'){
    console.log( `materia: ${materia.name}`)
    console.log( `notas: ${materia.notas}`)
    }
    })
//2. convertir a un arreglo de profesores
// metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)

// 3. Agregar una materia al arreglo de materias
//push()
materias.push(
    {
        id:5,
        name: "Cultura fisica",
        profesor: "Luis baquero",
        notas: [
            2,
            3.5
        ]
    }
)
console.log(materias)

//4. busqueda en arreglos:
//find 
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
}) 
    console.log(PHP)

/*console.log (`ID estudiante ${ id }`)
console.log (`Nombre estudiante ${ first_name }`)
console.log (`Apellido estudiante ${ last_name }`)
console.log (`DNI estudiante ${ DNI}`)*/


//Destructuración:
//let { id, first_name, last_name, DNI } = estudiantes


//let: Variables

//let a = 10

//const: constantes

//const b = 29

//console.log(`suma de a+b:${sumar(a,b)}`)
//console.log(`resta de a-b:${restar(a,b)}`)