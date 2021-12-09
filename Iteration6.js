'use strict'

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
]

function juguetes() {

    for (var toy of toys) {
        if (toy.name.includes('gato') == true) {
            toys.splice(toys.indexOf(toy), 1)
        }
    }

    while (toys.indexOf(toy) == -1 && toys.length != 0) {
        for (var toy of toys) {
            if (toy.name.includes('gato') == true) {
                toys.splice(toys.indexOf(toy), 1)
            }
        }
    }
    console.log(toys)
}

juguetes(toys)