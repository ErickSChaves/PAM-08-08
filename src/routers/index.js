import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screen/home'
import Details from '../screen/Details'

export default function Routes() {

    const stack =  createStackNavigator();

    return(

        <NavigationContainer>

            <stack.Navigator>

                <stack.Screen name = "Home" component = {Home} options = {{headerShown:false}}/>
                <stack.Screen name = "Details" component = {Details}/>

            </stack.Navigator>

        </NavigationContainer>

    )

}