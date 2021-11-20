import AsyncStorage from "@react-native-async-storage/async-storage";

const insertString = async (key, value, callback = null) => {
    if (typeof value != 'string'){
        throw new Error('O value precisa ser string')
    }

    try{
        await AsyncStorage.setItem(key, value, callback)
    }catch (e) {
        throw new Error('Não foi possivel inserir os dados')
    }
}

const insertObject = async(key,value, callback = null) => {
    try{
        const obj = JSON.stringify(value)
        await AsyncStorage.setItem(key, obj, callback)
    }catch (e){
        throw new Error('Não foi possivel inserir os dados')
    }
}
const read = async (key, callback= null) => {
    try{
        await AsyncStorage.getItem(key, callback)
    }catch(e){
        throw new Error('Não foi possivel recuperar o item com a chave')
    }
}

const allKeys = async (callback = null) =>{
    try{
        await AsyncStorage.getAllKeys(callback)
    }catch{
        throw new Error('Não foi possivel recuperar todos os itens salvos!')
    }
}

const remove = async (key, callback = null) =>{
    try{
        await AsyncStorage.removeItem(key,callback)
    }catch (e) {
        throw new Error('Não foi possivel remover o item')
    }
}

const clear = async (callback = null) => {
    try{
        await AsyncStorage.clear(callback)
    }catch (e){
        throw new Error('Não foi possivel limpar a base de dados')
    }
}


export{allKeys}
export {clear}
export {insertString}
export {insertObject}
export {read}
export{remove}
