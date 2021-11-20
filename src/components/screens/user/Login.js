import React, {
    useState,
    useEffect
} from 'react'

import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {
    Input
} from 'react-native-elements'
import {
    allKeys,
    read,
} from '../../../../BD'

import styles from '../../styles/Styles'

const Login = (props) => {

    const getListAdvertising = () =>{
        var bancoAd = []
        var dadosAdv = []
        allKeys((error, keys)=>{ 
            keys.forEach(keys => {
                read(keys, (error, value)=>{
                    if (value != undefined) {
                        var dadosAdvertising = JSON.parse(value)
                        if (dadosAdvertising.type == 'Advertising') {
                            dadosAdv = JSON.parse(value)
                            const note = 
                            {
                                idAdvertising: keys,
                                titleAdvertising: dadosAdv.titleAdvertising,
                                descriptionAdvertising: dadosAdv.descriptionAdvertising,
                                quantityAdvertising: dadosAdv.quantityAdvertising,
                                producerAdvertising:dadosAdv.producerAdvertising,
                                addressAdvertising:dadosAdv.addressAdvertising,
                                cityAdvertising:dadosAdv.cityAdvertising,
                                stateAdvertising:dadosAdv.stateAdvertising,
                                countryAdvertising:dadosAdv.countryAdvertising
                            };
                            bancoAd.push(note);
                            setDataAdvertising(bancoAd)
                        }
                    }
                })
            })
        }) 
    }
    

    useEffect(()=>{
        getListAdvertising()
    },[])

    //Consts para envio dos dados pelo props.navigation
    const [emailUser, setEmailUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')

    const [dataAdvertising, setDataAdvertising] = useState([])
    
    return (
        <SafeAreaView style={styles.containerBlue}>
            <ScrollView>
                <View style={styles.titleBoxLogin}>
                    <Image
                        source={require('../../../assets/img/logoImg.png')}
                        style={styles.logo}/>
                    <Text style={styles.title}>Uso consciente, distribuição inteligente.</Text>
                    <Text style={styles.title}>Doação colaborativa.</Text>
                </View>

                <View style={styles.formLogin}>
                    <Input 
                        style={styles.inputLogin}
                        placeholder='email'
                        placeholderTextColor="white"
                        underlineColorAndroid="white"
                        onChangeText={(txt) => setEmailUser(txt)}
                        value={emailUser} />
                    <Input
                        style={styles.inputLogin}
                        placeholder='senha'
                        placeholderTextColor="white"
                        underlineColorAndroid="white"
                        secureTextEntry={true}
                        onChangeText={(txt) => setPasswordUser(txt)}
                        value={passwordUser} />

                    <TouchableOpacity 
                        style={styles.btnLogin}
                        onPress={() => {
                            read(emailUser, (error, value) => {
                                if (value != undefined) {
                                    var dataUser = JSON.parse(value)
                                    if (dataUser.passwordUser == passwordUser) {
                                        props.navigation.navigate('home', {
                                            email: emailUser,
                                            dataUser: dataUser,
                                            dataAdvertising: dataAdvertising
                                        })                                    
                                    } else {
                                        alert("Senha incorreta!")
                                    }
                                } else {
                                    alert('Usuário não existente')
                                }
                            })
                        }}>
                        <Text style={styles.txtBtnLogin}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                                props.navigation.navigate('registerUser')
                            }}>
                        <Text style={styles.inputLogin}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default Login