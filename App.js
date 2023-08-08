import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Filmes from './src/data/movies'

import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardFilmes from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';
import Series from './src/data/series';

import Routes from './src/routers';

import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler' 

export default function App() {
  return (
   
    <NavigationContainer>
    <Routes></Routes>
    </NavigationContainer>

  );
}


