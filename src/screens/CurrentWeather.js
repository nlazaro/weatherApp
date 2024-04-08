import React from "react"
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const { 
    wrapper, 
    container, 
    temp, 
    feels, 
    highLow, 
    highLowWrapper, 
    bodyWraper, 
    description, 
    message } = styles
  return(
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 15</Text>
        <RowText 
        messageOne={'High: 68'}
        messageTwo={'Low: 48'} c
        containerStyles={highLowWrapper}
        messageOneStyles={highLow}
        messageTwoStyles={highLow}/>
        </View>
        <RowText 
        messageOne={'Sunny'}
        messageTwo={weatherType['Thunderstorm'].message}
        containerStyles={bodyWraper}
        messageOneStyles={description}
        messageTwoStyles={message}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'blue',
    flex: 1
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWraper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather