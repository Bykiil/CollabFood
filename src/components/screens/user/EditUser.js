import React, {
    useState,
    useEffect
} from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {
    Input,
    Icon
} from 'react-native-elements'

import {
    insertObject,
    read
} from '../../../../BD'

import styles from '../../styles/Styles'

const EditUser = (props) => {

    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params
    
    const [type, setTypeAdvertising] = useState('User')
    const [cnpjUser, setCnpjUser] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')
    const [addressUser, setAddressUser] = useState('')
    const [cityUser, setCityUser] = useState('')
    const [stateUser, setStateUser] = useState('')
    const [countryUser, setCountryUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')
    const [confPasswordUser, setConfPasswordUser] = useState('')

    useEffect(() => {
        setCnpjUser(dataUser.cnpjUser)
        setNameUser(dataUser.nameUser)
        setPhoneUser(dataUser.phoneUser)
        setAddressUser(dataUser.addressUser)
        setCityUser(dataUser.cityUser)
        setStateUser(dataUser.stateUser)
        setCountryUser(dataUser.countryUser)
        setPasswordUser(dataUser.passwordUser)
        setConfPasswordUser(dataUser.passwordUser)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleBox}>

                    <Text style={styles.title}>Dados de Cadastro</Text>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={() => {
                            props.navigation.navigate('profileUser', {
                                email: email,
                                dataUser: dataUser,
                                dataAdvertising: dataAdvertising
                            })
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
                        value={cnpjUser} />
                    
                    <Text>Nome</Text>
                    <Input
                        onChangeText={(txt) => setNameUser(txt)}
                        value={nameUser} />

                    <Text>Telefone</Text>
                    <Input
                        onChangeText={(txt) => setPhoneUser(txt)}
                        value={phoneUser} />

                    <Text>Endere??o</Text>
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

                    <Text>Pa??s</Text>
                    <Input
                        onChangeText={(txt) => setCountryUser(txt)}
                        value={countryUser} />

                    <Text >Senha</Text>
                    <Input
                        secureTextEntry={true}
                        onChangeText={(txt) => setPasswordUser(txt)}
                        value={passwordUser} />
                    <Input
                        secureTextEntry={true}
                        placeholder={'Confirme a senha'}
                        onChangeText={(txt) => setConfPasswordUser(txt)}
                        value={confPasswordUser} />

                    <TouchableOpacity
                        style={styles.btnEdit}
                        onPress={() => {
                            //Valida????es de CNPJ
                            if (cnpjUser.trim().length == 0) {
                                alert('Insira seu CNPJ')
                                return
                            }

                            if (cnpjUser.trim().length != 14){
                                alert('Insira um CNPJ v??lido( 14 Caracteres)')
                                return
                            }
                            // Valida????o de nome
                            if (nameUser.trim().length == 0) {
                                alert('Insira seu nome completo')
                                return
                            }
                            //Valida????o de telefone
                            if (phoneUser.trim().length == 0) {
                                alert('Insira seu n??mero de telefone')
                                return
                            }
                            if (phoneUser.trim().length != 11) {
                                alert('Insira seu n??mero completo com DDD. (Apenas n??meros)')
                                return
                            }
                            //Valida????es de endere??o
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
                                alert('Insira seu pa??s')
                                return
                            }
                            //Valida????es de senha
                            if (passwordUser.trim().length == 0) {
                                alert('Insira uma senha')
                                return
                            }
                            if (passwordUser != confPasswordUser) {
                                alert('Senhas s??o conferem')
                                return
                            }
                            if (passwordUser.trim().length < 6) {
                                alert('A senha precisar conter no m??nino 6 caracteres')
                                return
                            }
                            insertObject(email, {
                                type: type,
                                cnpjUser: cnpjUser,
                                nameUser: nameUser,
                                phoneUser: phoneUser,
                                addressUser: addressUser,
                                cityUser: cityUser,
                                stateUser: stateUser,
                                countryUser: countryUser,
                                passwordUser: passwordUser })
                            alert("Alterado com sucesso!")

                            read(email, (error, value) => {
                                const newDados = JSON.parse(value)
                                props.navigation.navigate('profileUser', {
                                    email: email,
                                    dataUser: newDados,
                                    dataAdvertising: dataAdvertising
                                })
                            })
                        }}>
                        <Text style={styles.txtBtnEdit}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditUser
