import { StatusBar } from 'expo-status-bar';
import {React} from "react";
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const SCREENSIZE = Dimensions.get('window').width;

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar style="dark"></StatusBar>
      <View style = {styles.city}>
        <Text style = {styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
      pagingEnabled 
      horizontal  
      showsHorizontalScrollIndicator = {false}
      //indicatorStyle = 'black'
      contentContainerStyle = {styles.weather}>
        <View style = {styles.day}>
         <Text style = {styles.temper}>27</Text>
         <Text style = {styles.sunny}>Sunny</Text>
        </View>
        <View style = {styles.day}>
         <Text style = {styles.temper}>27</Text>
         <Text style = {styles.sunny}>Sunny</Text>
        </View>
        <View style = {styles.day}>
         <Text style = {styles.temper}>27</Text>
         <Text style = {styles.sunny}>Sunny</Text>
        </View>
        <View style = {styles.day}>
         <Text style = {styles.temper}>27</Text>
         <Text style = {styles.sunny}>Sunny</Text>
        </View>
        <View style = {styles.day}>
         <Text style = {styles.temper}>27</Text>
         <Text style = {styles.sunny}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    flex : 1, backgroundColor : "yellow"
  },
  city : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  weather : {
    
  },
  cityName : {
    fontSize : 48, fontWeight : "900"
  },
  temper : {
    marginTop : 50,
    fontSize : 150, fontWeight : "400"
  },
  sunny : {
    marginTop : -20,
    fontSize : 50, fontWeight : "300"
  },
  day :{
    alignItems: "center",
    width : SCREENSIZE
  }
})

