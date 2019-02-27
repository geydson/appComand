import React, { Component } from 'react';
import {AsyncStorage, View, Text, ImageBackground, TextInput,Button, TouchableHighlight, ScrollView, StyleSheet, BackHandler, FlatList} from 'react-native';
// import YourComplaints from '../components/YourComplaints';

export default class HomeComandas extends Component{

      static navigationOptions = ({navigation}) => ({
          headerMode:'none'
      });

      constructor(props) {
          super(props);
          this.state = {
              lista      : [],
              identifica : this.props.navigation.state.params.identification
          };
          // this.atualizaTela  = this.atualizaTela.bind(this);
          // this.atualizaTela();
      }

      UNSAFE_componentWillMount(){
          BackHandler.addEventListener('hardwareBackPress', () => true);
      }

      // componentDidUpdate(prevProps) {
      //   if (this.props !== prevProps) { 
      //      this.atualizaTela();
      //   }
      // }

      // async atualizaTela(){
      //     let ids = this.state.identifica;
      //     let dados = {
      //         method: 'POST',
      //         headers: {
      //           Accept: 'application/json',
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({
      //            id:ids
      //         }),
      //     };

      //     try{
      //         const r = await fetch(URL, dados);
      //         const responseJson = await r.json();
      //         let state = this.state;
      //         state.lista = responseJson.dados;
      //         this.setState(state);
      //     }catch (error) {
      //       console.log(error);
      //     }


      //     // axios.get('https://apsapp.000webhostapp.com/class/login.php?action=consultadenuncias&id='+ids
      //     //  )
      //     // .then((responseJson) => {
      //     // this.setState({lista: responseJson.data.dados});
      //     // }).catch((error) => { 
      //     //     console.log(error.message);
      //     // });
      // }
       

      render() {
       	  return (
       	  	   <ImageBackground source={require('../img/fundoComandas.jpg')} style={styles.container}>
               <Button title="Abrir Drawer" onPress={()=>this.props.navigation.navigate('DrawerToggle')}/>
               </ImageBackground>
       	  );
       }

}

const styles = StyleSheet.create({
    container   : {
     	flex           : 1,
     	justifyContent : 'center',
     	alignItems     : 'center',
     	resizeMode     : 'contain'
    }
});