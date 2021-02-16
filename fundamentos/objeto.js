

// criando um objeto vazio e adicionando objetos à ele
const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)


//notação literal de objetos (não é um JSON)
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

    //JSON = texto

    `{
    "nome": "Camisa Polo",
    "preco": 79.90
}`

console.log(prod2) 