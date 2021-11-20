import React, {
    useState
} from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {
    Icon,
    Input
} from 'react-native-elements'
import {
    insertObject,
    read
} from '../../../../BD'

import styles from '../../styles/Styles'

const RegisterUser = (props) => {

    const [type, setTypeAdvertising] = useState('User')
    const [cnpjUser, setCnpjUser] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [addressUser, setAddressUser] = useState('')
    const [cityUser, setCityUser] = useState('')
    const [stateUser, setStateUser] = useState('')
    const [countryUser, setCountryUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')
    const [confPasswordUser, setConfPasswordUser] = useState('')

    function validEmail(emailUser) {
        var re = /\S+@\S+\.\S+/;
        return re.test(emailUser);
    }
    function usedEmail(emailUser) {
        var used = 1
        read(emailUser, (error, value)=>{
            if (value != undefined) {
                return used = 0
            }
            else{
                return used = 1
            }
        })
        return used
    }

    return (
        <SafeAreaView style={styles.containerForm}>
            <ScrollView>
                <View style={styles.titleBox}>

                    <Text style={styles.title}>Dados de Cadastro</Text>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={() => {
                            props.navigation.navigate('login')
                        }}>
                        <Icon
                            name='x-circle'
                            type='feather'
                            color='#DCDCDC'/>
                    </TouchableOpacity>

                </View>

                <View style={styles.form}>
                    <Text>CNPJ</Text>
                    <Input
                        onChangeText={(txt) => setCnpjUser(txt)}
                        value={cnpjUser}
                        keyboardType="numeric"/>
                    
                    <Text>Nome</Text>
                    <Input
                        onChangeText={(txt) => setNameUser(txt)}
                        value={nameUser} />

                    <Text>Telefone</Text>
                    <Input
                        onChangeText={(txt) => setPhoneUser(txt)}
                        value={phoneUser}
                        keyboardType="numeric" />

                    <Text>Email</Text>
                    <Input
                        onChangeText={(txt) => setEmailUser(txt)}
                        value={emailUser} />

                    <Text>Endereço</Text>
                    <Input
                        onChangeText={(txt) => setAddressUser(txt)}
                        value={addressUser} />

                    <Text>Cidade</Text>
                    <Input
                        onChangeText={(txt) => setCityUser(txt)}
                        value={cityUser} />

                    <Text>Estado</Text>
                    <Input
                        onChangeText={(txt) => setStateUser(txt)}
                        value={stateUser} />

                    <Text>País</Text>
                    <Input
                        onChangeText={(txt) => setCountryUser(txt)}
                        value={countryUser} />

                    <Text >Senha</Text>
                    <Input
                        secureTextEntry={true}
                        onChangeText={(txt) => setPasswordUser(txt)}
                        value={passwordUser} />

                    <Text >Confirmação de senha</Text>
                    <Input
                        secureTextEntry={true}
                        onChangeText={(txt) => setConfPasswordUser(txt)}
                        value={confPasswordUser} />

                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={() => {
                            //Validações de CNPJ
                            if (cnpjUser.trim().length == 0) {
                                alert('Insira seu CNPJ')
                                return
                            }

                            if (cnpjUser.trim().length != 14){
                                alert('Insira um CNPJ válido( 14 Caracteres)')
                                return
                            }
                            // Validação de nome
                            if (nameUser.trim().length == 0) {
                                alert('Insira seu nome completo')
                                return
                            }
                            //Validação de telefone
                            if (phoneUser.trim().length == 0) {
                                alert('Insira seu número de telefone')
                                return
                            }
                            if (phoneUser.trim().length != 11) {
                                alert('Insira seu número completo com DDD. (Apenas números)')
                                return
                            }
                            //Validações de email
                            if (emailUser.trim().length == 0) {
                                alert('Insira um email')
                                return
                            }
                            if (validEmail(emailUser) == false) {
                                alert("Email inválido")
                                return
                            }
                            if (usedEmail(emailUser) == 0){
                                alert("Email indisponível")
                                return
                            }
                            //Validações de endereço
                            if (addressUser.trim().length == 0) {
                                alert('Insira seu logradouro')
                                return
                            }
                            if (cityUser.trim().length == 0) {
                                alert('Insira sua cidade')
                                return
                            }
                            if (stateUser.trim().length == 0) {
                                alert('Insira seu estado')
                                return
                            }
                            if (countryUser.trim().length == 0) {
                                alert('Insira seu país')
                                return
                            }
                            //Validações de senha
                            if (passwordUser.trim().length == 0) {
                                alert('Insira uma senha')
                                return
                            }
                            if (passwordUser.trim().length < 6) {
                                alert('A senha precisar conter no mínino 6 caracteres')
                                return
                            }
                            if (passwordUser != confPasswordUser) {
                                alert('Senhas não conferem')
                                return
                            }
                            
                            insertObject(emailUser, {
                                type: type,
                                cnpjUser: cnpjUser,
                                nameUser: nameUser,
                                phoneUser: phoneUser,
                                addressUser: addressUser,
                                cityUser: cityUser,
                                stateUser: stateUser,
                                countryUser: countryUser,
                                passwordUser: passwordUser })
                            alert("Cadastrado com sucesso!")
                            props.navigation.navigate('login')
                        }}>
                        <Text style={styles.txtBtnRegister}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default RegisterUser