import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  ScrollView,
  ProgressBarAndroid
} from 'react-native';
const myIcon = <Icon name="angle-down" size={25} />;
class Accounts extends Component{
  render() {
    return(
		<ScrollView style={styles.container}>
      		{/*<StatusBar hidden={true}/> */}
      		<View style={styles.mainSubContainer}>
      			<View style={styles.subContainer}>
  					<Icon style={[styles.textColor,styles.userImg]}
        			name="user-circle"
        			size={70}
      				/>
      				<Text style={[styles.firstText,styles.textColor]}>English</Text>
      				<Icon style={[styles.iconStyle,styles.textColor]}> {myIcon}</Icon>
      			</View>
          		<View style={styles.sub2Container}>
          			<Text style={[styles.firstText,styles.userTextColor,{marginBottom:10}]}>Anbukani David</Text>
          			<Text style={[styles.firstText,styles.userText,styles.userTextColor]}>01/12/1994</Text>
          		</View>
        	 </View>	
          	<ProgressBarAndroid color="black"
          styleAttr="Horizontal"
          indeterminate={false}
          progress={.7}
        />
          	
          	<View style={styles.main2SubContainer}>
          		<View style={[styles.boxBg1]}>
          			<Text style={[styles.firstText,styles.userText,styles.box1]}>Documents</Text>
          			<Text style={[styles.firstText,styles.userText,styles.box1,{fontSize:14.5}]}>Driving License</Text>
          		</View>
          		<View style={[styles.box,styles.boxBg2,{}]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>Transaction History</Text>
          		</View>
          		<View style={[styles.box,styles.boxBg2]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>My Recipients - 2</Text>
          		</View>
          		<View style={[styles.box,styles.boxBg2]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>Link Your My Number Card</Text>
          		</View>
          		<View style={[styles.box,styles.boxBg2]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>Settings</Text>
          		</View>
          		<View style={[styles.box,styles.boxBg2,{flexDirection:'row',justifyContent:'space-between'}]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>Add Bank Account Details </Text>
          			
          			<Icon style={[styles.textColor,{alignSelf:'flex-end'}]}
        				name="adn"
        				size={40}
      					/>
      					
          		</View>
          		<View style={[styles.box,styles.boxBg2,{flexDirection:'row',justifyContent:'space-between'}]}>
          			<Text style={[styles.firstText,styles.userText,styles.textColor,{alignSelf:'center'}]}>Refer a Friend</Text>
          			<Icon style={[styles.textColor,{alignSelf:'flex-end'}]}
        				name="user-plus"
        				size={40}
      					/>
          		</View>
          		
          		

          			
          		</View>
          		<View style={[styles.boxBg2,styles.bottomBox]}>
          			<View style={styles.iconBox}>
          			<Icon style={[styles.textColor]}
        				name="paper-plane"
        				size={40}
      					/>
      				</View>
      				<View style={styles.iconBox}>
          			<Icon style={[styles.textColor]}
        				name="adn"
        				size={40}
      					/>
      				</View>
      				<View style={styles.iconBox}>
          			<Icon style={[styles.textColor]}
        				name="bell"
        				size={40}
      					/>
      				</View>
      				<View style={[styles.iconBox,styles.endIcon]}>
          			<Icon style={[styles.textColor]}
        				name="user"
        				size={40}
      					/>
      				</View>
          		</View>
          		
        
        


       	</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  	flex:1,
    flexDirection:'column',    
  },
  mainSubContainer: {
  	margin:30
  },
  main2SubContainer: {
  	margin:10
  },

  subContainer: { 
  	flexDirection:'row',
  	 
  },
  sub2Container: { 
  	marginTop:10,
  },
  userImg: {
  	flex:1,
  	color:'#222f47'
  }, 
  userTextColor: {
  	color:'#222f47',
  },
  userText: {
  	fontWeight:'bold'
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
  lineBar: {
  	width:'100%',
  	backgroundColor:'grey',
  	borderWidth:2,
  },


  box: {
  	flexDirection:'row',
  	padding:10,
  	paddingLeft:20,
  	paddingRight:20,
  	borderRadius:3,
  	height:70,
  	backgroundColor:'grey',
  },
  boxBg1: {
  	flexDirection:'column',
  	padding:10,
  	paddingLeft:20,
  	borderRadius:3,
  	height:70,
  	backgroundColor:'grey',

  },
  boxBg2: {
  	marginTop:10,
  	backgroundColor:'#edf0f5',
  },

  box1 :{
  	color:'white'
  },
  bottomBox:{
  	flexDirection:'row',
  	
  	height:70
  },
  iconBox :{
  	width:105,
  	height:70,
  	justifyContent:'space-around',
  	alignItems:'center',
  },
  endIcon:{
  backgroundColor:'#ced4de'
	}
  });
export default Accounts
