import React, {
    useState,
    useEffect
} from 'react'

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
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
    remove,
} from '../../../../BD'

import styles from '../../styles/Styles'

const EditAdvertising = (props) => {

    const { itemAdvertising } = props.route.params
    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params

    const [type, setTypeAdvertising] = useState('Advertising')
    const [idAdvertising, setIdAdvertising] = useState(itemAdvertising.idAdvertising)
    const [titleAdvertising, setTitleAdvertising] = useState('')
    const [descriptionAdvertising, setDescriptionAdvertising] = useState('')
    const [quantityAdvertising, setQuantityAdvertising] = useState('')
    const [addressAdvertising, setAddressAdvertising] = useState('')
    const [cityAdvertising, setCityAdvertising] = useState('')
    const [stateAdvertising, setStateAdvertising] = useState('')
    const [countryAdvertising, setCountryAdvertising] = useState('')
    const [statusAdvertising, setStatusAdvertising] = useState('1')

    useEffect(() => {
        setTitleAdvertising(itemAdvertising.titleAdvertising)
        setDescriptionAdvertising(itemAdvertising.descriptionAdvertising)
        setQuantityAdvertising(itemAdvertising.quantityAdvertising)
        setAddressAdvertising(itemAdvertising.addressAdvertising)
        setCityAdvertising(itemAdvertising.cityAdvertising)
        setStateAdvertising(itemAdvertising.stateAdvertising)
        setCountryAdvertising(itemAdvertising.countryAdvertising)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleBoxEdit}>

                    <Text style={styles.title}>Dados de Anúncio</Text>
                    <TouchableOpacity
                        style={styles.editIcon}
                        onPress={() => {
                            props.navigation.navigate('home', {
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
                    <Text>Título</Text>
                    <Input
                        onChangeText={(txt) => setTitleAdvertising(txt)}
                        value={titleAdvertising} />

                    <Text>Descrição</Text>
                    <Input
                        onChangeText={(txt) => setDescriptionAdvertising(txt)}
                        value={descriptionAdvertising}
                        multiline={true} />

                    <Text>Quantidade</Text>
                    <Input
                        onChangeText={(txt) => setQuantityAdvertising(txt)}
                        value={quantityAdvertising}
                        keyboardType="numeric" />

                    <Text>Endereço</Text>
                    <Input
                        onChangeText={(txt) => setAddressAdvertising(txt)}
                        value={addressAdvertising} />

                    <Text>Cidade</Text>
                    <Input
                        onChangeText={(txt) => setCityAdvertising(txt)}
                        value={cityAdvertising} />

                    <Text>Estado</Text>
                    <Input
                        onChangeText={(txt) => setStateAdvertising(txt)}
                        value={stateAdvertising} />

                    <Text>País</Text>
                    <Input
                        onChangeText={(txt) => setCountryAdvertising(txt)}
                        value={countryAdvertising} />


                    <TouchableOpacity
                        style={styles.btnEdit}
                        onPress={() => {
                            if (titleAdvertising.trim().length == 0) {
                                alert('Insira o título')
                                return
                            }
                            if (descriptionAdvertising.trim().length == 0) {
                                alert('Insira a descrição')
                                return
                            }
                            if (quantityAdvertising.trim().length == 0) {
                                alert('Insira a quatidade')
                                return
                            }
                            if (addressAdvertising.trim().length == 0) {
                                alert('Insira um logardouro')
                                return
                            }
                            if (cityAdvertising.trim().length == 0) {
                                alert('Insira uma cidade')
                                return
                            }
                            if (stateAdvertising.trim().length == 0) {
                                alert('Insira um estado')
                                return
                            }
                            if (countryAdvertising.trim().length == 0) {
                                alert('Insira um país')
                                return
                            }
                            insertObject(idAdvertising, {
                                type: type,
                                titleAdvertising: titleAdvertising,
                                descriptionAdvertising: descriptionAdvertising,
                                quantityAdvertising: quantityAdvertising,
                                producerAdvertising : email,
                                addressAdvertising: addressAdvertising,
                                cityAdvertising: cityAdvertising,
                                stateAdvertising: stateAdvertising,
                                countryAdvertising: countryAdvertising,
                                statusAdvertising:  statusAdvertising})
                            
                            alert("Alterado com sucesso!")
                            props.navigation.navigate('advertisingUser', {
                                email: email,
                                dataUser: dataUser,
                                dataAdvertising: dataAdvertising,
                                
                            })
                        }}>
                        <Text style={styles.txtBtnEdit}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnDelete}
                        onPress={() => {
                            remove(idAdvertising)
                            props.navigation.navigate('advertisingUser', {
                            email: email,
                            dataUser: dataUser,
                            dataAdvertising: dataAdvertising,
                            })
                        }}>
                        <Text style={styles.txtBtnDelete}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditAdvertising