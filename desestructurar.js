let colors = require('colors');
const estudiantes1 = ["Juan Medina",
                    "Juan Camilo",
                    "Laura",
                    "Nicolas"];
const estudiantes2 = [
                    "Enrique",
                    "Maicol",
                    "Daniela",
                    "Julian"
]
//operador spread (resto)
const estudiantes3 = ['Veronica' , 
                    ...estudiantes1 ,
                    'Paula' ,
                    ...estudiantes2]

//desestructuracion arreglos
console.log(estudiantes3)

