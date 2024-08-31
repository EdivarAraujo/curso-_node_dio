const dataBaseType = {
  userType: "admin",
  type: "datalocal"
}

async function connectToDataBase(dataName) {
  //logica de conexao
  console.log(`Estou conectado com o ${dataName}`)
}

async function disconectDataBase() {
  console.log("Desconectando do bando de dados")
}

export {connectToDataBase, disconectDataBase, dataBaseType}
