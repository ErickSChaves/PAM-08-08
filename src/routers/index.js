import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from './stack';
import About from '../screen/About'

export default function Routers(){

    const Drawer = createDrawerNavigator();

    return(

            <Drawer.Navigator>

                <Drawer.Screen name = 'home' component = {Stack} />    
                <Drawer.Screen name = 'Sobre' component = {About}/>

            </Drawer.Navigator>

    )

}