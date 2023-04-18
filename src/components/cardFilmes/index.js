import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";


export default function CardFilmes() {

    return(

        <TouchableOpacity style = {styles.ContainerFilmes}>

            <Image style = {styles.ImagemFilmes} source = {require (`../../Img/6.jpg`)}/>
            <Text style = {styles.TituloFilmes}>Creed II</Text>
            <Text style = {styles.NotaFilmes}>9.3</Text>

        </TouchableOpacity>


    );

}