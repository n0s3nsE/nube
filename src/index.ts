import * as readlineSync from 'readline-sync'

let num: number[] = []

function rand(): number {
  return Math.floor(Math.random() * 10)
}

for (let i = 0; i < 3; i++) {
  while (true) {
    let a: number = rand()
    if (!num.includes(a)) {
      num.push(a)
      break
    }
  }
}

while (true) {
  let n: string = readlineSync.question('>> ')
  console.log('----------')
  if (n == 'end') {
    console.log(`num: ${num.toString().replace(/,/g, '')}\nbye.`)
    break
  }
  const user_value: string[] = n.split('')
  let eat: number = 0
  let bite: number = 0
  let flag: number[] = [0, 0, 0]

  for (let i = 0; i < 3; i++) {
    if (user_value[i] === num[i].toString()) {
      eat = eat + 1
      flag[i] = Number(user_value)
    } else {
      if (num.includes(Number(user_value[i])) === true) {
        bite = bite + 1
      }
    }
  }

  console.log(`input: ${n}\n${eat}eat, ${bite}bite\n----------\n`)
  if (eat === 3) {
    console.log(`value is \'${num.toString().replace(/,/g, '')}\'\ngreat!!!`)
    break
  }
}

/*参考
https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
https://pisuke-code.com/js-create-non-overlap-randoms/
*/
