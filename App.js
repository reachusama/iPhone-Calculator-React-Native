import React, { Component,useState } from 'react';
import { TouchableOpacity,View,Button,Text,StyleSheet } from 'react-native';

function calcVal(choice,firstVal,secVal){
  switch(choice){
    case 0:
      return parseFloat(firstVal) + parseFloat(secVal);
    case 1:
      return parseFloat(firstVal) - parseFloat(secVal);
    case 2:
      return parseFloat(firstVal) * parseFloat(secVal);
    case 3:
      return parseFloat(firstVal) / parseFloat(secVal);
    case 4:
      return parseInt(firstVal) % parseInt(secVal);
  }
}
function getAnswer(firstVal,secondVal,operation){
    if(operation == '+'){
      return calcVal(0,firstVal,secondVal);
    }
    if(operation == '-'){
      return calcVal(1,firstVal,secondVal);
    }
    if(operation == '*'){
      return calcVal(2,firstVal,secondVal);
    }
    if(operation == '/'){
      return calcVal(3,firstVal,secondVal);
    }
    if(operation == '%'){
      return calcVal(4,firstVal,secondVal);
    }
}

function changeState(value){
    return value * -1;
}

function App() {
  const [firstVal, setFirstVal] = useState('');
  const [answer,setAnswer] = useState(0);
  const [operation,setOper] = useState('');

  return (
      <View style = {styles.container}> 
        <View style = {styles.input}>
        <Text           
        style =
          {
            { 
              fontSize: 80,
              color: 'white',
              marginTop: 75
            }
          }>
            {firstVal}
          </Text>
        </View>
      
        <View style = {styles.seccond}>

        <View style = {styles.row}>
            <TouchableOpacity  style={styles.customBtnBgSilver} onPress = { ()=>setFirstVal('')} >
                <Text style={styles.customBtnText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgSilver} onPress = { ()=>setFirstVal(changeState(firstVal))} >
                <Text style={styles.customBtnTextPM}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgSilver} onPress = { ()=>{setOper('%'); setAnswer(firstVal); setFirstVal('');}} >
                <Text style={styles.customBtnText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgOrange} onPress = { ()=>{setOper('/'); setAnswer(firstVal); setFirstVal('');}} >
                <Text style={styles.customBtnText}>/</Text>
            </TouchableOpacity>
       </View>
       <View style = {styles.row}>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '7')} >
                <Text style={styles.customBtnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '8')} >
                <Text style={styles.customBtnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '9')} >
                <Text style={styles.customBtnText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgOrange} onPress = { ()=>{setOper('*'); setAnswer(firstVal); setFirstVal('');}} >
                <Text style={styles.customBtnTextOrange}>*</Text>
            </TouchableOpacity>
       </View>
       <View style = {styles.row}>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '4')} >
                <Text style={styles.customBtnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '5')} >
                <Text style={styles.customBtnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '6')} >
                <Text style={styles.customBtnText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgOrange} onPress = { ()=>{setOper('-'); setAnswer(firstVal); setFirstVal('');}} >
                <Text style={styles.customBtnTextOrange}>-</Text>
            </TouchableOpacity>
       </View>
       <View style = {styles.row}>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '1')} >
                <Text style={styles.customBtnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '2')} >
                <Text style={styles.customBtnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '3')} >
                <Text style={styles.customBtnText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgOrange} onPress = { ()=>{setOper('+'); setAnswer(firstVal); setFirstVal('');}} >
                <Text style={styles.customBtnTextOrange}>+</Text>
            </TouchableOpacity>
       </View>
       <View style = {styles.row}>
            <TouchableOpacity  style={styles.customBtnBGZero} onPress = { ()=>setFirstVal(firstVal + '0')} >
                <Text style={styles.customBtnTextZero}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBG} onPress = { ()=>setFirstVal(firstVal + '.')} >
                <Text style={styles.customBtnText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.customBtnBgOrange} onPress = { ()=>setFirstVal(Number(getAnswer(answer,firstVal,operation).toFixed(2)))} >
                <Text style={styles.customBtnTextOrange}>=</Text>
            </TouchableOpacity>
       </View>

          
       </View>
      </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
customBtnText: {
    fontSize: 28,
    fontWeight: '600',
    color: "white",
    paddingHorizontal: 35,    
    paddingVertical: 33
},
customBtnTextPM: {
  fontSize: 27,
  fontWeight: '600',
  color: "white",
  paddingHorizontal: 25,    
  paddingVertical: 35
},
customBtnTextZero: {
  fontSize: 50,
  fontWeight: '600',
  color: "white",
  paddingHorizontal: 78,    
  paddingVertical: 15
},
customBtnTextOrange: {
  fontSize: 35,
  fontWeight: '900',
  color: "white",
  paddingHorizontal: 35,    
  paddingVertical: 25
},
customBtnBGZero: {
  margin: 1,
  backgroundColor: "grey",
  flex: 2,
  height: 92
},
customBtnBG: {
  margin: 1,
  backgroundColor: "grey",
  flex: 1,
  height: 92
},
customBtnBgOrange:{
  margin: 1,
  backgroundColor: "orange",
  flex: 1,
  height: 92
},
customBtnBgSilver:{
  margin: 1,
  backgroundColor: "silver",
  flex: 1,
  height: 92
},
seccond:{
  flex: 5,
  justifyContent: 'center',
  alignItems: 'stretch'
},
input: {
  flex: 2.1,
  backgroundColor: 'black',
  flexDirection: 'row-reverse'
},
row: {
  alignItems: 'center',
  flexDirection: 'row',
}
});