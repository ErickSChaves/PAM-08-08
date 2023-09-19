import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Filmes from '../../data/movies'
import Header from '../../components/header';
import SearchBar from  '../../components/searchbar';
import CardFilmes from '../../components/cardFilmes';
import CardSeries from '../../components/cardSeries';
import Series from '../../data/series';
import React,{useEffect, useState} from 'react';



export default function App() {

  const [movies,setMovies] = useState([]);
  const [series,setSeries] = useState([]);

  useEffect(()=>{

    async function getMovies(){

      try{

      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2f4660be84fe257d8514f6ae20e88410&language=pt-BR")

      const data = await response.json();

      console.log(data.results)
      setMovies(data.results)

      }catch(error){
        console.error("REQUISIÇÃO FALHOU",error)
      }
    }

    getMovies();

  },[])

  useEffect(()=>{

    async function getSeries(){

      try{

      const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=2f4660be84fe257d8514f6ae20e88410&language=pt-BR")

      const data = await response.json();

      console.log(data.results)
      setSeries(data.results)

      }catch(error){
        console.error("REQUISIÇÃO FALHOU",error)
      }
    }

    getSeries();

  },[])

  return (
   
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerFilmes></BannerFilmes>

      <View style = {{width:'90%'}}>
      <FlatList
      
          horizontal = {true}
          data = {movies}
          renderItem = {({item}) => (

              <CardFilmes
              Nome = {item.title} 
              Nota = {item.vote_average}
              Imagem = {item.poster_path}
              Descricao = {item.overview}
              >
              
              </CardFilmes>

          )}
          
          
      />
      </View>

      <View style = {{width:'90%'}}>
      <FlatList
      
          horizontal = {true}
          data = {series}
          renderItem = {({item}) => (

            <CardSeries
            Nome = {item.name} 
            Nota = {item.vote_average}
            Imagem = {item.poster_path}
            Descricao = {item.overview}
            >

            </CardSeries>
          )}
          
          
      />
      </View>
          
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F76B1C',
    alignItems:"center",
    overflow: 'scroll'
    
  },
});
