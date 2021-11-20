import React from 'react'

import {
    TouchableOpacity,
    View,
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

import styles from '../styles/Styles' 


const MenuBar = (props) =>{
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity
                onPress={() => {                    
                    props.dados.navigation.navigate('home', {
                        email: props.dados.email,
                        dataUser: props.dados.dataUser,
                        dataAdvertising: props.dados.dataAdvertising
                    })
                }}>
                <Icon
                        name='home'
                        type='feather'
                        color='#D3D3D3'/>
                </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.dados.navigation.navigate('registerAdvertising', {
                        email: props.dados.email,
                        dataUser: props.dados.dataUser,
                        dataAdvertising: props.dados.dataAdvertising
                    })
                }}>
                <Icon
                        name='file-plus'
                        type='feather'
                        color='#D3D3D3'/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.dados.navigation.navigate('advertisingUser', {
                        email: props.dados.email,
                        dataUser: props.dados.dataUser,
                        dataAdvertising: props.dados.dataAdvertising
                    })
                }}>
                <Icon
                        name='list'
                        type='feather'
                        color='#D3D3D3'/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.dados.navigation.navigate('profileUser', {
                        email: props.dados.email,
                        dataUser: props.dados.dataUser,
                        dataAdvertising: props.dados.dataAdvertising
                    })
                }}>
                <Icon
                        name='user'
                        type='feather'
                        color='#DCDCDC'/>
            </TouchableOpacity>
        </View>
    )
}



export default MenuBar