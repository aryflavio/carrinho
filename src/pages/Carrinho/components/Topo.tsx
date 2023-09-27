import React from 'react';
import {Image, Text, StyleSheet, Dimensions} from 'react-native';

import topo from '../../../../assets/topo.png';

const widht = Dimensions.get('screen').width;

type Props = {
    titulo: string;
}

export default function Topo({titulo}: Props) {
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>{titulo}</Text>
    </>
}
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * widht
    },
    
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "black",
        position: "absolute",
        padding: 16
    }

});