import React, { useEffect } from 'react';

import { View, StyleSheet } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';

import { useDispatch } from 'react-redux'
import { updateList } from '../redux/actions/index'


export default function Compra(props){

    const dispatch = useDispatch()

    return (
        <View style={styles.compra}>
            <Text style={styles.text}>{props.value.item.produto}</Text>
            <Checkbox 
                status={props.value.item.comprado ? 'checked' : 'unchecked'}
                onPress={() => dispatch(updateList(props.value.item))}
            />
        </View>
    )


}


const styles = StyleSheet.create({

    compra: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 1,
        minHeight: 40
    },

    text: {
        fontSize: 20,
        marginRight: 5
    }



})