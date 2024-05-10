import React, {Component} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Header from "./Header";
import List from "./List";

export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            feed: [
                {
                  id: '1', 
                  nome: 'Lucas Silva', 
                  descricao: 'Mais um dia de muitos bugs :)', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
                  likeada: false, 
                  likers: 0
                 },
                {
                  id: '2', 
                  nome: 'Matheus', 
                  descricao: 'Isso sim é ser raiz!!!!!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
                  likeada: false, 
                  likers: 0
                },
                {
                  id: '3', 
                  nome: 'Jose Augusto', 
                  descricao: 'Bora trabalhar Haha', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
                  likeada: false, 
                  likers: 3
                },
                {
                  id: '4', 
                  nome: 'Gustavo Henrique', 
                  descricao: 'Isso sim que é TI!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
                  likeada: false, 
                  likers: 1
                },
                {
                  id: '5', 
                  nome: 'Guilherme', 
                  descricao: 'Boa tarde galera do insta...', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                  likeada: false, 
                  likers: 32
                }
              ]
        }
    }


    render() {
        return(
            <View style={styles.container}>
                <Header />
                <FlatList
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.feed}
                    renderItem={({item}) => <List data={item} />}
                />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});