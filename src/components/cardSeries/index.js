import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


export default function CardSeries({Nome, Imagem, Nota, Temporadas}) {

    const Navigation = useNavigation();

    return(

        <TouchableOpacity onPress = {() => Navigation.navigate('Details', {Imagem:Imagem, Nome:Nome, Nota:Nota, Temporadas:Temporadas})} style = {styles.ContainerSeries}>

            <Image style = {styles.ImagemSeries} source = {{uri: `https://image.tmdb.org/t/p/original/${Imagem}`}}/>
            <Text style = {styles.TituloSeries}>{Nome}</Text>
            <Text style = {styles.NotaSeries}>{Nota}</Text>
            <Text style = {styles.TemporadasSeries}>{Temporadas}</Text>

        </TouchableOpacity>


    );

}