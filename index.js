const pizzas = require('./database/pizzas.json')

function listarPizzas() {
  pizzas.forEach(function (pizza) {
    console.log(`
    ---------------
    Pizza ${pizza.id}

    Sabor: ${pizza.sabor}
    Categoria: ${pizza.categoria}
    Preço: ${pizza.preco}
    Disponível: ${pizza.disponivel ? 'Sim' : 'Não'}
    `)
  })
}

function adicionarPizza(pizza) {
  return pizzas.push(pizza)
}

adicionarPizza({
  id: 5,
  sabor: 'provolone',
  categoria: 'salgada',
  preco: 10,
  disponivel: true
})

listarPizzas()
