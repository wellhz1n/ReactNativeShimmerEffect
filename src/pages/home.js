import React, { Component } from 'react';

import { View,Text,StyleSheet,FlatList} from 'react-native';
import ItemLista from '../components/ItemLista';
// import { Container } from './styles';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            lista:[{titulo:'Titulo 1',texto:"Texto do post 1"},
            {titulo:'Titulo 2',texto:"Texto do post 2 texto bem grande para teste de funcionaidade legal"},
            {titulo:'Titulo 3',texto:"Texto do post 3"},
            {titulo:'Titulo 4',texto:"Texto do post 4"},
            {titulo:'Titulo 5',texto:"Texto do post 5"},
            {titulo:'Titulo 6',texto:"Texto do post 6"}],
            buscou:false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
                this.setState({buscou:true});
        },3000)
    }
  render() {
    return (
        <View style={Estilo.container}>
            <FlatList 
            data={this.state.lista}
            renderItem={(item)=>(
           <ItemLista Titulo={item.item.titulo} Texto={item.item.texto} buscou={this.state.buscou}></ItemLista>
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={()=>(<View style={{marginBottom:10}}></View>)}
           />
        </View>
    );
  }
}

const Estilo =  StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },

});
