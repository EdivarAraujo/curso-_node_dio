import { connectToDataBase, disconectDataBase, dataBaseType } from "./utils/dataBase.js"
import { getDataFronApi } from "../src/utils/api.js"

getDataFronApi()
connectToDataBase("TESTE")
disconectDataBase("Desconectado")