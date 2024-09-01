import createItem from  "./services/item.js"
import { addItem, calculateTotal, deleteItem, removeItem, displayCart } from "./services/cart.js"

const myCart = []
const myWhishList = []
console.log("Welcome to the your Shopee Cart!")

//criando dois itens
const item1 = await createItem("HotWhells ferrari", 20.99, 1)
const item2 = await createItem("HotWhells lamborghini", 39.99, 3)

//adiciona dois itens no carrinho
await addItem(myCart, item1)
await addItem(myCart, item2)

await removeItem(myCart, item2)

await displayCart(myCart)

//deleta dois itens no carrinho
// await deleteItem(myCart, item2.name)
// await deleteItem(myCart, item1.name)


await calculateTotal(myCart)
