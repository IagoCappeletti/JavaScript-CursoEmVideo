let num = [5,8,4]
num[3] = 6 
num.push(7)

console.log(num)
console.log (num.length)
console.log(`O primeitro valor do VETOR é ${num[0]}`)
console.log(`O segundo valor do VETOR é ${num[1]}`)
console.log(`O terceitro valor do VETOR é ${num[2]}`)
console.log(`O quatro valor do VETOR é ${num[3]}`)
console.log(`O quinto valor do VETOR é ${num[4]}`)

console.log(num.sort())
console.log(`${num}`)
console.log()
let pos = num.indexOf(8)
if (pos == -1 ){
    console.log('O valor não foi encontrado! ')
} else {
    console.log(`O valor está na posição ${pos}`)
}