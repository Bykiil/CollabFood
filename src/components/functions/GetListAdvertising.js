import React, {
    useState
} from 'react'
import {
    read,
    allKeys
} from '../../../BD'


export const getListAdvertising = () =>{

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
                        return (bancoAd)
                    }
                }
            })
        })
    }) 
}