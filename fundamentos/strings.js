const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //código relacionado a tabela Unicode
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) //substituindo com REGEX

console.log('Ana, Maria, Pedro'.split(',')) //Criando um array a partir de uma string (SPLIT)
console.log('Ana, Maria, Pedro'.split(/,/)) //Criando um array a partir de uma string (SPLIT E REGEX)




