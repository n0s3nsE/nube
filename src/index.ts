import * as readlineSync from 'readline-sync'

const userName: string = readlineSync.question('name? ')
console.log(`->hello ${userName}!`)
