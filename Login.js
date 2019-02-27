import React, { Component } from 'react';
import {View, Text, ImageBackground, TextInput, TouchableHighlight, StyleSheet, Button, Alert, AsyncStorage, Modal} from 'react-native';
// import LoadingScreen from '../components/LoadingScreen';

export default class Login extends Component{
      
      static navigationOptions = ({navigation}) => ({
          header: null,
          headerMode:'none',
      });

      constructor(props) {
          super(props);
          this.state = {
              userState     : '',
              passwordState : '',
              ident         : ''
          };
          this.logInAction      = this.logInAction.bind(this);
      }

      logInAction() {
          this.setState({userState: '', passwordState: ''});
          this.props.navigation.navigate('MainScreen', {identification: this.state.ident});
          // this.setState({loading:false});
      }

      render() {
       	return (

     	  	  <ImageBackground source={require('../img/fundoJapo.jpg')} style={styles.container}>
                
                <View >
                   <Text style={{fontWeight:'bold', color:'#800000', fontSize:35, marginTop: "-30%"}}>Hamana</Text>
                   <Text style={{fontWeight:'bold', color:'#800000', fontSize:30}}>Comanda</Text>
                </View>
                
                <View style={{ felx:1, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                  <Text style={{fontWeight:'bold', fontSize:16, width: '80%', marginBottom:5, color: "#696969", textAlign: 'left'}}>USUÁRIO:</Text>
                  <TextInput style={styles.input} placeholder="Digite seu usuário" maxLength={15} placeholderTextColor="#000000" underlineColorAndroid="transparent" onChangeText={(user)=> this.setState({userState: user})}/>
                    
                  <Text style={{fontWeight:'bold', fontSize:16, width: '80%', marginBottom:5, color: "#696969", textAlign: 'left'}}>SENHA:</Text>
                  <TextInput style={styles.input} placeholder="Senha" maxLength={8} placeholderTextColor="#000000" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(password)=> this.setState({passwordState: password})}/>

                  <TouchableHighlight  style={styles.btLogin} underlayColor="#00b000" onPress={this.logInAction}>
                      <Text style={styles.btLoginText}>ENTRAR</Text>
                  </TouchableHighlight>
                </View>
                  
            </ImageBackground>
      
       	);
      }
}

const styles = StyleSheet.create({
      container   : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        resizeMode      : 'contain'
      },
      input       : {
        width           : "80%",
        height          : 50,
        backgroundColor : 'rgba(220, 220, 220, 220)',
        borderRadius    : 5,
        color           : '#000000',
        fontSize        : 17,
        marginBottom    : 30
      },
      btLogin     : {
        width           : "80%",
        height          : 50,
        borderRadius    : 5,
        borderWidth     : 0.5,
        backgroundColor : "#FF0000",
        borderColor     : "#FFFFFF",
        justifyContent  : 'center',
        alignItems      : 'center',
        marginTop       : 50
      },
      btLoginText : {
        color           : "#FFFFFF",
        fontSize        : 20,
        fontWeight      : 'bold'
      }
});