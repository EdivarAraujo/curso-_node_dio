//quais acoes meu carrinho pode fazer

//adicionar item ao carrinho
async function addItem(userCart, item){
  userCart.push(item)
}

//calcular o total
async function calculateTotal(userCart) {
  console.log("\n Shopee Cart Total IS!")

  const result = await userCart.reduce((total, item) => total + item.subtotal(),0)
  console.log(`Total: ${result}`)
}

//deletar um item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if(index !== -1){
    userCart.splice(index, 1)
  }
}

//remover um item - diminuir um item
async function removeItem(userCart, index) {
  if(index >= 0 && index < userCart.length){
    userCart.splice(index, 1)
  } 
}

async function displayCart(userCart) {
  console.log("\n Shopee carts list")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
  });
}

export {
  calculateTotal,
  addItem,
  deleteItem,
  displayCart,
  removeItem
}