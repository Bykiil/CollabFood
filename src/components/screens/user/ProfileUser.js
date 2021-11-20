import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

import styles from '../../styles/Styles'
import MenuBar from '../menuBar'

const ProfileUser = (props) => {

    const { email } = props.route.params
    const { dataUser } = props.route.params
    const { dataAdvertising } = props.route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleBox}>

                    <Text style={styles.title}>Dados de Cadastro</Text>
                    <TouchableOpacity
                        style={styles.editIcon}
                        onPress={() => {
                            props.navigation.navigate('editUser', {
                                email: email,
                                dataUser: dataUser,
                                dataAdvertising: dataAdvertising
                            })
                        }}>
                        <Icon
                            name='edit-2'
                            type='feather'
                            color='#DCDCDC'/>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.form}>
                    <Text style={styles.txtTitleProfile}>CNPJ</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.cnpjUser}</Text>

                    <Text style={styles.txtTitleProfile}>Nome</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.nameUser}</Text>

                    <Text style={styles.txtTitleProfile}>Telefone</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.phoneUser}</Text>

                    <Text style={styles.txtTitleProfile}>Email</Text>
                    <Text style={styles.txtDataProfile}>{email}</Text>

                    <Text style={styles.txtTitleProfile}>Endereço</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.addressUser}</Text>

                    <Text style={styles.txtTitleProfile}>Cidade</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.cityUser}</Text>

                    <Text style={styles.txtTitleProfile}>Estado</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.stateUser}</Text>
                    
                    <Text style={styles.txtTitleProfile}>País</Text>
                    <Text style={styles.txtDataProfile}>{dataUser.countryUser}</Text>
                </View>
            </ScrollView>

            <MenuBar dados={{dataUser, email, dataAdvertising, navigation: props.navigation}}/>
            
        </SafeAreaView>
    )
}

export default ProfileUser