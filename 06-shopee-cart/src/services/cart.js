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
async function removeItem(userCart, item) {
  //encontrar o indice do item
   const indexFound = userCart.findIndex((produto) => produto.name === item.name)

  //se nao encontrar o item
  if(indexFound == 1){
    console.log("Item nao encontrado")
    return
  }

  //se item > 1 subtrair um item, 
  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
  }
  
  //agora se tiver so item tem que deletar um item
   if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
   }



  
  //transforma o indice visual do usuario para o indice do backend
  // const deleteIndex = index - 1

  // if(index >= 0 && index < userCart.length){
  //   userCart.splice(deleteIndex, 1)
  // } 
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