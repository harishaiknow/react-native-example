/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar
} from 'react-native';

class App extends Component{
  render() {
    return(
      
      <View style={styles.container}>
      <StatusBar hidden={true}/>    
        <View style={styles.subContainer}>
          <Text style={styles.textStyleEng}>English</Text>
            <Icon style={styles.iconStyle} name="angle-down" size={25} />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textWelcome}>Welcome</Text>
        </View>
        <TextInput style={styles.textStyle2} placeholder="Email"  />
        <View style={styles.mailContainer}>
          <TextInput
            style={[styles.inputLine,{width:'88%'}]}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Icon
            style={[styles.passIcon,styles.iconTop]}
            name="eye-slash"
            size={20}
          />
        </View>
        <View style={[styles.forgotContainer,styles.topSpace1]}>
          <Text style={styles.forgotPwd}>Forgot your password?</Text>
        </View>
        <View style={styles.signIn}>
          <Text style={styles.signInText} >SIGN IN</Text>
        </View>
        <View style={[styles.subContainer,styles.topSpace1]}>
          <Text style={styles.textStyle1}>By clicking here,you agree to our</Text>
          <Text style={[styles.textStyle,styles.textStyle11,styles.content]}>Customer Agreement</Text>
          </View>
        <View style={[styles.subContainer,styles.topSpace]}>       
          <Text style={[styles.textStyle,styles.textStyle2]}>Don't have an account signup</Text>
        </View>
        <View style={[styles.subContainer,styles.textStyle2,styles.topSpace,styles.bottomSpace]}/> 

        <View style={[styles.subContainer,styles.topSpace1]}>
          <Text style={[styles.textStyle,styles.textStyle2]}>Signup with </Text>
        </View>
        <View style={[styles.buttonContainer,styles.topSpace2]}>
           <View style={styles.button}>
              <Icon name="facebook-f" size={35} color="grey"/>
            </View>
            <View style={styles.button}>
              <Icon name="google" size={35} color="grey"/>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',    
    margin:30,
  },
  subContainer: {
    marginTop:15,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyleEng: {    
    fontSize:18,
    color:'grey'
  },
  iconStyle: { 
    color:'grey', 
    paddingLeft:10,
  },
  iconTop: {
    alignSelf: 'center'
  },
  textWelcome: {
    margin:40,
    fontWeight:'bold',
    fontSize:22,
    color:'grey'
  },
  mailContainer: {
    marginTop:30,
    flexDirection:'row',
    borderBottomWidth:.5,
    borderBottomColor:'grey'
  },
  inputLine: {
    justifyContent:'flex-start',
  },
  passIcon: {
    alignSelf: 'center',
    justifyContent:'flex-end',
    color:'grey',
    paddingTop:3
  },

  forgotContainer: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },

  forgotPwd: {
    fontSize:15,
    color:'grey',
    borderBottomWidth:.5
  },
  signIn:{
    marginTop:50,
    padding:20,
    backgroundColor:'grey',
    alignItems:'center',
    borderRadius:5
  },
  signInText:{
    fontSize:15,
    color:'white',
  },
  textStyle: {    
    color:'grey',
    borderBottomWidth:.5,
    borderBottomColor:'grey'
  },

  textStyle1: { 
    color:'grey',   
    fontSize:12, 
  },
  textStyle11: {    
    fontSize:13, 
  },
  textStyle2: {    
    fontSize:15,
    borderBottomWidth:.5,
    borderBottomColor:'grey'
  },
  content:{
    marginLeft:5,
    justifyContent:'flex-end',
  },
  topSpace1:{
    marginTop:10
  },
  topSpace2:{
    marginTop:20
  },
  topSpace: {
    marginTop:60
  },
  bottomSpace: {
    marginBottom:15
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    alignItems:'center',
    width:165,
    padding:10,
    borderRadius:5,
    borderWidth:.5,
    borderColor:'grey'
  }
});

export default App;
