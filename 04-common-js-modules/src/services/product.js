//toidas funcoes que lida com produtos
const productType = {
  version: "digital",
  tax: "x1"
}

const apiUrl = {
  url: "ww.google.com/api"
}

async function getFullName(codeId, productName) {
  return console.log("product:", codeId + "---" + productName,
    await doBreackLine()
  )} 

async function doBreackLine() {
  console.log("\n")
}

async function getProductLabel(productName) {
  console.log("Product:"  + productName)
}

module.exports ={
  getFullName,
  getProductLabel,
  productType,
  apiUrl
}