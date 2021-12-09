'use strict'

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

function approved(param) {
    debugger
    for (let i = 0; i < param.length; i++) {
        let contador = 0
        if (param[i].T1 == true) {
            contador += 1
        }
        if (param[i].T2 == true) {
            contador += 1
        }
        if (param[i].T3 == true) {
            contador += 1
        }
        if (contador >= 2) {
            param[i].isApproved = true
        } else {
            param[i].isApproved = false
        }
        return param
    }
}

let resultadoFinal = approved(alumns)
console.log(resultadoFinal)

// console.log(approved(alumns))

// function approved(param) {
//     for (let i = 0; i < param.length; i++) {
//         let contador = 0
//         if (param[i].T1 = true) {
//             contador += 1
//         } else if (param[i].T2 = true) {
//             contador += 1
//         } else if (param[i].T3 = true) {
//             contador += 1
//         } else if (contador >= 2) {
//             param[i]['aprobado:'] = true
//         } else {
//             param[i]['aprobado:'] = false
//         }
//     }
// }


// let resultado = approved(alumns)
// console.log(resultado)

// const usuarios = [
//     { name: 'Gonzalo', dni: '546373k', mail: 'gonzalo@gmail.com' },
//     { name: 'Marta', dni: '758590X', mail: 'marta@gmail.com' },
//     { name: 'Alex', dni: '536674L', mail: 'alex@gmail.com' },
//     { name: 'Laura', dni: '837648P', mail: 'laura@gmail.com' }
// ]

// function apellido(param) {
//     for (let i = 0; i < param.length; i++) {
//         param[i].apellido = 'Jimenez'
//     }
// }
// let usuarioCompleto = apellido(usuarios)
// console.log(usuarios)