/*
let num= [5,8,9]
num[3]= 6 -> Acrecentara mais uma posição no array inserido o elemento 6
num.push(7) -> Acrecentara mais uma posição no array automatico inserido o elemento 7
num.length -> LENGTH tamanho do array
num.short() -> Orderna os elementos em ordens crecente
*/

let num=[5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} quantidades`)
console.log(`O primeiro valor da posição do vetor é ${num[0]}`)

/*indexOF faz a buscar pelo valor do elemento, mostrando a posição*/ 
var pos= num.indexOf(8)

if(pos == -1) {
    console.log(`O valor não foi encontrado`)

} else {
    console.log(`O valor esta na posição ${pos}`)
}
