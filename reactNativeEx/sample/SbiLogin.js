import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './Assets/images/logo.png'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const userInfo={email:'anbu@gmail.com',password:'12345'};

class SbiLogin extends Component{
	constructor(props){
		super(props);
		this.state={email:'',password:'', error:''}
	}
  	render() {
    return( 
      <ScrollView style={styles.container}>

      	<View style={styles.firstContainer}>
      		<Text style={[styles.firstText,styles.textColor]}>English</Text>
      		<Icon style={[styles.iconStyle,styles.textColor]} name="angle-down" size={25} />
      	</View>
      	<Image  style={styles.imageStyle} source = {Logo} />
      	<View style={[styles.outerContainer, styles.secondContainer]}>
      		<Text style={[styles.firstText,{alignSelf:'center'}]}>SIGN UP</Text>
      	</View>
      		<View style={styles.secondInnerContainer}>
      			<Text style={[styles.firstText,{alignSelf:'center',fontWeight:'bold',marginBottom:20}]}>SIGN IN</Text>
      			<View style={[styles.inputBox]}>
      				<Icon style={[styles.textIcon]} name="envelope-o" size={20} />
      				<TextInput  
	      				style={styles.textInput} 
	      				placeholder="Email"
	      				placeholderTextColor='black'
	      				onChangeText={(val) => this.setState({email: val})}
	      				value={this.state.email}
      				/>     			
      			</View>
      			<View style={[styles.inputBox]}>
      				<Icon style={[styles.textIcon]} name="lock" size={20} />
      				<TextInput  style={[styles.textInput]}
	      				placeholder="Password"
	      				placeholderTextColor='black'
	      				secureTextEntry={true}
	      				onChangeText={(password) =>this.setState({password})}
	      				value={this.state.password}
      				/>
     				<Icon style={[styles.passIcon]} name="eye-slash" size={20} />    				     							
      			</View>
      			{this.renderError()}
      			<Text style={styles.forgetText} >Forget Password</Text>
      			<TouchableOpacity style={[styles.loginButton]} onPress={this._signin}>
      				<Text  style={styles.loginText}>Login</Text>     			
      			</TouchableOpacity>
      		</View>
      			<Text style={[styles.firstText,styles.signupText,{alignSelf:'center'}]}>Signup/Signin</Text>
      			<View style={[styles.buttonContainer]}>
           <View style={styles.button}>
              <Icon name="facebook-f" size={25} color="blue"/>
            </View>
            <View style={styles.button}>
              <Icon name="google" size={25} color="orange"/>
            </View>
        </View>
     	</ScrollView>
    )
  }

  	renderError() {
  		if(this.state.error) {
			return <Text style={styles.errorMsg}>{this.state.error}</Text>;
  		}
  	}


	_signin = async () => {
		if(userInfo.email===this.state.email && userInfo.password===this.state.password){
			this.setState({error: 'logged'});
		}else{
			this.setState({error: 'Email or password wrong'});
		}
	}
}


const styles = StyleSheet.create({
	container: {
  		flex:1,
    	flexDirection:'column',    
	},
 	firstContainer: {
	  	margin:10,
	  	flexDirection:'row',
	  	justifyContent:'flex-end'
	  },
  	textColor: {
  	 	color:'grey', 
  	},
  	firstText: {		
  		fontSize:18
  	},
  	iconStyle: { 
  		paddingLeft:10 
  	},
  	imageStyle: {
  		width:108,
  		height:100,
  		alignSelf:'center'
 	 },
  	outerContainer: {
  		marginTop:10,
  		marginLeft:10,
  		marginRight:10
 	 },
  	secondContainer: {
	  	marginTop:50,
	  	height:70,
	  	flexDirection:'row',
	  	justifyContent:'center',
	  	borderTopEndRadius:8,
	  	backgroundColor:'#f7f5f0',
	    elevation: 50
	 },
	  secondInnerContainer: {
	  	paddingTop:30,
	    elevation: 50,
	  	justifyContent:'center',
	  	backgroundColor:'#f7f5f0',
	  	borderRadius:8,
	  },
	  inputBox: {
	  	flexDirection:'row',
	  	marginLeft:20,
	  	marginRight:20,
	  	paddingLeft:20,
	  	marginBottom:15,
	  	height:70,
	  	borderRadius:5,
	  	borderWidth:1,
	  	borderColor:'grey',
	  },
	  textIcon: {
	  	color:'blue',
	  	alignSelf:'center'
	  },
	  textInput: {
	  	flex:0.9,
	  	paddingLeft:15,
	  	fontSize:18,
	  	color:'black'
	},
	iconContainer: {
		
		
	},
	passIcon: {
		alignSelf:'center',
		color:'grey'
	},
	forgetText: {
		alignSelf:'flex-end',
		fontSize:18,
	  	borderBottomWidth:1,
	  	marginRight:20
	},
	loginButton: {
		margin:20,
	  	paddingLeft:20,
	  	justifyContent:'center',
		alignItems:'center',
		height:70,
	  	borderRadius:5,
	  	borderWidth:1,
	  	backgroundColor:'#0b48ba',
	},
	loginText: {
		color:'white',
		fontSize:20,
	},
	signupText: {
		paddingTop:30,
		borderBottomWidth:1
	},
	buttonContainer:{
		margin:10,
    	flexDirection:'row',
    	justifyContent:'center'
  },
  button:{
  	margin:10,
    alignItems:'center',
    width:100,
    padding:10,
    borderRadius:5,
    borderWidth:.5,
    borderColor:'grey'
  },
  errorMsg: {
  	color:'red',
  	fontSize:16,
  	alignSelf:'center'
  }
})
export default SbiLogin