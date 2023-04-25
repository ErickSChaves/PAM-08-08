import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";


export default function CardSeries({Nome, Imagem, Nota, Temporada}) {

    return(

        <TouchableOpacity style = {styles.ContainerSeries}>

            <Image style = {styles.ImagemSeries} source = {require (`../../Img/${Imagem}`)}/>
            <Text style = {styles.TituloSeries}>{Nome}</Text>
            <Text style = {styles.NotaSeries}>{Nota}</Text>
            <Text style = {styles.TemporadasSeries}>{Temporada}</Text>

        </TouchableOpacity>


    );

}