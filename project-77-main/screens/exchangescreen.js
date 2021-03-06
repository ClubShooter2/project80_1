import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';
    import db from '../config'
    export default class ExchangeScreen extends Component{
        constructor(){
            super();
          
          }
          addItem=(itemname,itemdescription)=>{
            var itemname = this.state.itemname
            var itemdescription = this.state.itemdescription
            var randomRequestId = this.createUniqueId()
            db.collection('itemdescription').add({
               'itemdescription': itemdescription,
               'itemname': itemname
            })
            this.state={
                itemname:'',
                itemdescription:'',
                }
          }
        render(){
            return(
                <View>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"item name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              itemname: text
            })
          }}
        />
           <TextInput
          style={styles.formTextInput}
          placeholder ={"item description"}
          maxLength ={14}
          onChangeText={(text)=>{
            this.setState({
            itemdescription: text
            })
          }}
        />
          <TouchableOpacity
            style={styles.cancelButton}
           onPress={()=>{this.addItem}}
          >
          <Text style={{color:'green'}}>Add Item</Text>
          </TouchableOpacity>
                </View> 
            )
        }
    }
    
    const styles = StyleSheet.create({
        container:{
         flex:1,
         backgroundColor:'#F8BE85',
         alignItems: 'center',
         justifyContent: 'center'
       },
      //  profileContainer:{
      //    flex:1,
      //    justifyContent:'center',
      //    alignItems:'center',
      //  },
       title :{
         fontSize:65,
         fontWeight:'300',
         paddingBottom:30,
         color : '#ff3d00'
       },
       loginBox:{
         width: 300,
         height: 40,
         borderBottomWidth: 1.5,
         borderColor : '#ff8a65',
         fontSize: 20,
         margin:10,
         paddingLeft:10
       },
       KeyboardAvoidingView:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
       },
       modalTitle :{
         justifyContent:'center',
         alignSelf:'center',
         fontSize:30,
         color:'#ff5722',
         margin:50
       },
       modalContainer:{
         flex:1,
         borderRadius:20,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:"#ffff",
         marginRight:30,
         marginLeft : 30,
         marginTop:80,
         marginBottom:80,
       },
       formTextInput:{
         width:"75%",
         height:35,
         alignSelf:'center',
         borderColor:'#ffab91',
         borderRadius:10,
         borderWidth:1,
         marginTop:20,
         padding:10
       },
       registerButton:{
         width:200,
         height:40,
         alignItems:'center',
         justifyContent:'center',
         borderWidth:1,
         borderRadius:10,
         marginTop:30
       },
       registerButtonText:{
         color:'#ff5722',
         fontSize:15,
         fontWeight:'bold'
       },
       cancelButton:{
         width:200,
         height:30,
         justifyContent:'center',
         alignItems:'center',
         marginTop:5,
       },
      
       button:{
         width:300,
         height:50,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:25,
         backgroundColor:"#ff9800",
         shadowColor: "#000",
         shadowOffset: {
            width: 0,
            height: 8,
         },
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
         padding: 10
       },
       buttonText:{
         color:'#ffff',
         fontWeight:'200',
         fontSize:20
       }
      })