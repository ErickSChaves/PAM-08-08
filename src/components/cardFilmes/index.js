import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


export default function CardFilmes({Nome, Imagem, Nota}) {

    const Navigation = useNavigation();

    return(

        <TouchableOpacity onPress = {() => Navigation.navigate('Details', {Nome:Nome, Imagem:Imagem, Nota:Nota})} style = {styles.ContainerFilmes}>

            <Image style = {styles.ImagemFilmes} source = {require (`../../Img/${Imagem}`)}/>
            <Text style = {styles.TituloFilmes}>{Nome}</Text>
            <Text style = {styles.NotaFilmes}>{Nota}</Text>

        </TouchableOpacity>


    );

}