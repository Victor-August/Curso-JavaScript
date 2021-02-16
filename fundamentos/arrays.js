const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste') //push inclui elementos no array
console.log(valores)

console.log(valores.pop()) //retira elemento
delete valores[0] //deletando elemento
console.log(valores)

console.log(typeof valores)