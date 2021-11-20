import React ,{
    useState,
    useEffect
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
} from '../../../../BD'

import styles from '../../styles/Styles'
import MenuBar from '../menuBar'

const AdvertisingUser = (props) => {

    //Consts para envio de dados pelo navigation.navigate
    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params


    //Const para guardar apenas os anúncios do usuário logado
    const [DataUserAdv, setDataUserAdv] = useState([])

    //Faz a filtragem dos anúncios publicados pelo usuário logado
    const getProducerAdvertising = () =>{
        var dadosAdv = []
        var bancoAd = []
        allKeys((error, keys)=>{    
            keys.forEach(keys => {
                read(keys, (error, value)=>{
                    if (value != undefined) {
                        var dadosAdvertising = JSON.parse(value)
                        if (dadosAdvertising.type == 'Advertising') {
                            if (dadosAdvertising.producerAdvertising == email){
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
                                setDataUserAdv(bancoAd);
                            }
                        }
                    }
                })
            })
        })
    }
    
    useEffect(()=>{ 
        getProducerAdvertising()
    },[])

    return (
        <SafeAreaView style={styles.containerAdvertising}>
            <View style={styles.titleBoxAdvertising}>

                <Text style={styles.txtTitleTwo}> Meus Anúncios</Text>
                <TouchableOpacity
                    style={styles.refreshIcon}
                    onPress={() => {
                        getProducerAdvertising();
                    }}>
                    <Icon
                            name='refresh-cw'
                            type='feather'
                            color='#A9A9A9'/>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={DataUserAdv}
                keyExtractor={(item) => item.idAdvertising}
                renderItem={({item}) => (
                    <View style={styles.formAdvertising}>
                        <Text style={styles.txtTitleOne}> {item.titleAdvertising}</Text>
                        <Text> {item.addressAdvertising}</Text>
                        <Text> {item.cityAdvertising} - {item.stateAdvertising}
                        , {item.countryAdvertising}</Text>
                        <View style={styles.subFormAdvertising}>
                            <View style={styles.quantityBox}>
                                <Text style={styles.txtQuantity}> Quantidade: {item.quantityAdvertising}</Text>
                            </View> 
                            <TouchableOpacity
                                style={styles.btnAdvertising}
                                onPress={() => {
                                    props.navigation.navigate('editAdvertising', {
                                        itemAdvertising: item,
                                        email: email,
                                        dataUser: dataUser,
                                        dataAdvertising: dataAdvertising   
                                    })
                                }}>
                                <Text style={styles.btnTxtAdvertising}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <MenuBar dados={{dataUser, email, dataAdvertising, navigation: props.navigation}}/>
        </SafeAreaView>
    )
}

export default AdvertisingUser
