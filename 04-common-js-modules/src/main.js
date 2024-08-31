const { getFullName, getProductLabel,productType } = require("./services/product")
const config = require("./services/config")
const database = require("./services/dataBase")

async function main() {
  console.log("Carrinho de compras")
  getFullName("408", "mousepad")
  getProductLabel("MousePad")
 
  database.connectToDataBase()
}

main()