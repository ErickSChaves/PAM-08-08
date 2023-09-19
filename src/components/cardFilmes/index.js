import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


export default function CardFilmes({Nome, Imagem, Nota, Descricao}) {

    const Navigation = useNavigation();

    return(

        <TouchableOpacity onPress = {() => Navigation.navigate('Details', {Nome:Nome, Imagem:Imagem, Nota:Nota, Descricao:Descricao})} style = {styles.ContainerFilmes}>

            <Image style = {styles.ImagemFilmes} source = {{uri: `https://image.tmdb.org/t/p/original/${Imagem}`}}/>
            <Text style = {styles.TituloFilmes}>{Nome}</Text>
            <Text style = {styles.NotaFilmes}>{Nota}</Text>
            

        </TouchableOpacity>


    );

}