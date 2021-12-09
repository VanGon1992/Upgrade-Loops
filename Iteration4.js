'use strict'

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

let value
for (value in alien) {
    console.log(value + ' - ' + alien[value])
}