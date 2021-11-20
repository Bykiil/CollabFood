import React ,{
    useState
}from 'react'

import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

import {
    allKeys,
    read
} from '../../../BD'

import MenuBar from './menuBar'
import styles from '../styles/Styles' 

const Home = (props) => {

    //Consts para envio de dados pelo navigation.navigate
    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params

    //Monta a lista de todos os anúncios disponíveis
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
        refreshPage()
    }


    const refreshPage = () => {
        if (DataAdvertising == ''){       
            alert('Erro, por favor clique em atualizar novamente')
        }
        else{
            props.navigation.navigate('home', {
                email: email,
                dataUser: dataUser,
                dataAdvertising: DataAdvertising
            })
        }
    }

    const [DataAdvertising, setDataAdvertising] = useState([])

    return (
        <SafeAreaView style={styles.containerHome}>
            <View style={styles.titleBoxHome}>
                <View style={styles.titleBoxTxt}>
                    <Text style={styles.txtTitleOne}>Olá,</Text>
                    <Text style={styles.txtTitleTwo}>{dataUser.nameUser}</Text>
                </View>
            
                <TouchableOpacity
                    style={styles.iconRefresh}
                    onPress={() => {
                        getListAdvertising()
                    }}>
                    <Icon
                            name='refresh-cw'
                            type='feather'
                            color='#A9A9A9'/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconLogout}
                    onPress={() => {
                        props.navigation.navigate('login')
                    }}> 
                    <Icon
                        name='log-out'
                        type='feather'
                        color='#A9A9A9'/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txtBodyPage}>Encontre a sua doação</Text>
            </View>

            <FlatList
                data={dataAdvertising}
                keyExtractor={(item) => item.idAdvertising}
                renderItem={({item}) => (
                    <View style={styles.formAdvertising}>
                        <Text style={styles.txtTitleOne}> {item.titleAdvertising}</Text>
                        <Text> {item.addressAdvertising}</Text>
                        <Text> {item.cityAdvertising} - {item.stateAdvertising}
                        , {item.countryAdvertising}</Text>
                        <View style={styles.subFormAdvertising}>
                            <Text style={styles.txtQuantity}> Quantidade: {item.quantityAdvertising}</Text>
                            <TouchableOpacity
                                style={styles.btnAdvertising}
                                onPress={() => {
                                    props.navigation.navigate('profileAdvertising', {
                                        itemAdvertising: item,
                                        email: email,
                                        dataUser: dataUser,
                                        dataAdvertising: dataAdvertising
                                    })
                                }}>
                                <Text style={styles.btnTxtAdvertising}>Detalhes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            
            <MenuBar dados={{dataUser, email, dataAdvertising, navigation: props.navigation}}/>
            
        </SafeAreaView>
    )
}


export default Home

