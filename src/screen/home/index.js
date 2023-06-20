import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Filmes from '../../data/movies'
import Header from '../../components/header';
import SearchBar from  '../../components/searchbar';
import CardFilmes from '../../components/cardFilmes';
import CardSeries from '../../components/cardSeries';
import Series from '../../data/series';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

    <View style = {{width:'90%'}}>
     <FlatList
     
        horizontal = {true}
        data = {Filmes}
        keyExtractor = {(item) => item.Id}
        renderItem = {({item}) => (

            <CardFilmes
            Nome = {item.Nome} 
            Nota = {item.Nota}
            Imagem = {item.Imagem}
            >
             
            </CardFilmes>

        )}
        
        
     />
     </View>

     <View style = {{width:'90%'}}>
     <FlatList
     
        horizontal = {true}
        data = {Series}
        keyExtractor = {(item) => item.Id}
        renderItem = {({item}) => (

          <CardSeries
          Nome = {item.Nome} 
          Nota = {item.Nota}
          Imagem = {item.Imagem}
          Temporadas = {item.Temporadas}
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
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
