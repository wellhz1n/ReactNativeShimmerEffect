import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

// import { Container } from './styles';

export default function ItemLista(props) {
  return (
    <View style={[Estilo.itemLayout,{
        borderColor: props.buscou == true?'#aaaaaa':'#0000000',
        borderWidth:props.buscou?0.5:0.2,
        borderRadius:20
    }]}>

                <View style={{flexDirection:'row',alignItems:'center'}}>
        <ShimmerPlaceHolder style={{height:50,width:50,borderRadius:50/2,marginRight:5}} autoRun={true} visible={props.buscou}>
                <View style={{height:50,width:50,borderRadius:50/2,backgroundColor:'#aa33ff',
                                marginRight:5,justifyContent:'center',alignItems:'center'}}></View>
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder  autoRun={true} visible={props.buscou}>
                 <Text style={{fontWeight:'bold'}}>{props.Titulo}</Text>
        </ShimmerPlaceHolder>
                </View>
                <View style={{flexDirection:'row',marginLeft:30,paddingBottom:20,paddingTop:5,paddingRight:10}}>
        <ShimmerPlaceHolder  autoRun={true} visible={props.buscou}>
                <Text style={{textAlign:'justify'}}>{props.Texto}</Text>
                </ShimmerPlaceHolder>
                </View>
            </View>
  );
}
const Estilo =  StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    itemLayout:{
        padding:10,
        flexDirection:'column',
        flexWrap:'wrap',
    }
});