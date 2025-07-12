import React from 'react'
import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";


function Starting() {


 const [originalnumber, setNumber] = useState("");
  const [validation, setValidation] = useState(true);
  function changenumber(number: any){
    console.log(number.nativeEvent.text);
    setNumber(number.nativeEvent.text)
  }
function resetnumber(){
    setNumber("");
  }
  function onconfirm(){
    if(originalnumber==""){
        console.log("Please enter a number")

    }
  }
  function isnumbervalid() {
    if(Number(originalnumber) < 0){
      setValidation(false);
      

    }else{
      setValidation(true);
    }

  }
  useEffect(() => {
    console.log('Component updated!');
    isnumbervalid();
    // Your code here runs every time the component updates
  });


  return (
   <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "black", // Changed to hex format
        alignItems: "center",
        width:"100%"
      }}
    >
      <View   style={{borderBottomColor:"white" , padding: 10,  width: "60%",marginTop: 70, borderRadius: 10,height:50,borderWidth:1,borderTopWidth:1 }}>
        <Text  style={{ color: "white", fontSize: 20, textAlign: "center" }}>  
          Guess My Number
        </Text>

      </View>
      <View  style={{borderColor:"white",borderWidth:1, width:"80%", marginTop:70,height:170 ,display:"flex",alignItems:"center"} }  >
        <Text  style={{ color: "white", fontSize: 20, textAlign: "center",marginTop: 20 }}>
         Enter a number
        </Text>
        <TextInput style={{borderBottomWidth:1,borderColor:"white" ,marginTop:20, width:"50%"  , color:"white" ,fontSize:20 , padding:0}} keyboardType="number-pad" maxLength={2}  textAlign="center"   onChange={(number)=>{
          changenumber(number);
        }}  value={originalnumber}
        />
          
      
        <View style={{marginTop: 20, display: "flex", flexDirection: "row", gap: 10, justifyContent: "space-between", width: "60%" }}>

          <Pressable   android_ripple={{ color: 'white' }} style={{ borderColor:"white", borderWidth:1 ,width:80,height:35, }} >
<Text  style={{color:"white" , margin:"auto" }} onPress={resetnumber} >Reset</Text>
          </Pressable>
          <Pressable  onPress={onconfirm}   android_ripple={{ color: 'white' }} style={{ borderColor:"white", borderWidth:1 ,width:80,height:35, }} >
<Text   style={{color:"white" , margin:"auto" }} >Confirm</Text>

          </Pressable>
         
        </View>
        
        
         {  !validation &&  <Text  style={{ color: "red", fontSize: 20, paddingTop: 30, textAlign: "center" }}>
         Number cannot be negative or greater than 99
        </Text>}
      </View>
      
    </View>
  )
}

export default Starting