import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";


export default function CardFilmes({Nome, Imagem, Nota}) {

    return(

        <TouchableOpacity style = {styles.ContainerFilmes}>

            <Image style = {styles.ImagemFilmes} source = {require (`../../Img/${Imagem}`)}/>
            <Text style = {styles.TituloFilmes}>{Nome}</Text>
            <Text style = {styles.NotaFilmes}>{Nota}</Text>

        </TouchableOpacity>


    );

}