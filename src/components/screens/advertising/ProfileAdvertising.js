import React ,{useState}from 'react'

import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {
    read
} from '../../../../BD'

import styles from '../../styles/Styles'
import MenuBar from '../menuBar'

const ProfileAdvertising = (props) => {

    const { itemAdvertising } = props.route.params
    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params

    const [producerName, setproducerName] = useState('')
    
    //Descobre o nome do produtor para listagem
    const findNameProducer = () =>{
        var emailProducer = itemAdvertising.producerAdvertising;
        read(emailProducer, (error, value)=>{
            if (value != undefined) {
                var dataProducer = JSON.parse(value)
                var nameProducer = dataProducer.nameUser
                setproducerName(nameProducer)
            }
        })
    }

    findNameProducer();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../../assets/img/mapImg.png')}
                style={styles.imageBackground}>
                <ScrollView>
                    <View style={styles.formProfile}>
                        <Text style={styles.txtTitle}>{itemAdvertising.titleAdvertising}</Text>
                        <Text>{producerName}</Text>
                        <Text>{itemAdvertising.descriptionAdvertising}</Text>
                        <Text>{itemAdvertising.addressAdvertising}</Text>
                        <Text>{itemAdvertising.cityAdvertising} - {itemAdvertising.stateAdvertising}
                        , {itemAdvertising.countryAdvertising}</Text>
                        <View style={styles.subForm}>
                            <Text style={styles.txtQuantityProfile}> Quantidade: {itemAdvertising.quantityAdvertising}</Text>
                            <TouchableOpacity
                                style={styles.btnAdvertising}
                                onPress={() => {
                                    alert('To be continue..')
                                    console.log('To be continue..')
                                }}>
                                <Text style={styles.btnTxtAdvertising}>Retirar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

            <MenuBar dados={{dataUser, email, dataAdvertising, navigation: props.navigation}}/>

        </SafeAreaView>
    )
}

export default ProfileAdvertising