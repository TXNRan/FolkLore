import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function settings(){
    return (
      <View style={{ backgroundColor: 'wheat',opacity: 0.8, flex: 1 }}>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box5}></View>
        <View style={styles.box6}></View>
        <View style={styles.box4}>
        <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1}}>
            <MyButton1 color= 'black'> </MyButton1>
        </View>

        <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1}}>
            <MyButton2 color= 'black'> </MyButton2>
        </View>

        <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1}}>
            <MyButton3 color= 'black'> </MyButton3>
        </View>

        <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1}}>
            <MyButton4 color= 'black'> </MyButton4>
        </View>
        </View>

        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 110, left: 110,
              }}>Informasi Pribadi</Text>

        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 240, left: 60,
              }}>Kata sandi dan keamanan</Text>
        
        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 370, left: 100,
              }}>Histori Penelusuran</Text>
        
        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 500, left: 160,
              }}>Log Out</Text>


        <Image source={require('./halaman/aset/5.jpeg')} style={styles.gambar2}></Image>
        
        <Text style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 4,
                position: 'absolute', top: 15, left: 160,
              }}>Settings</Text>
      </View>
    )}

    const MyButton1 = (props) => {
      const [buttonColor, setButtonColor] = useState(props.color);
    
      return (
        <Button
          title="Home"
          color={buttonColor}
          onPress={() => setButtonColor('red')}
        />
      );
    };

    const MyButton2 = (props) => {
      const [buttonColor, setButtonColor] = useState(props.color);
    
      return (
        <Button
          title="Kamus"
          color={buttonColor}
          onPress={() => setButtonColor('red')}
        />
      );
    };

    const MyButton3 = (props) => {
      const [buttonColor, setButtonColor] = useState(props.color);
    
      return (
        <Button
          title="Jadwal"
          color={buttonColor}
          onPress={() => setButtonColor('red')}
        />
      );
    };

    const MyButton4 = (props) => {
      const [buttonColor, setButtonColor] = useState(props.color);
    
      return (
        <Button
          title="Settings"
          color={buttonColor}
          onPress={() => setButtonColor('red')}
        />
      );
    };
    
    
    const styles = StyleSheet.create({
      box2:{
        width: 400,
        height: 70,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 30,
        position: 'absolute', top: 100, left: 5,
        opacity: 0.5},
    
      box3:{
        width: 400,
        height: 70,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 30,
        position: 'absolute', top: 230, left: 5,
        opacity: 0.5},
      
      box5:{
        width: 400,
        height: 70,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 30,
        position: 'absolute', top: 360, left: 5,
        opacity: 0.5},
      
      box6:{
        width: 400,
        height: 70,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 30,
        position: 'absolute', top: 490, left: 5,
        opacity: 0.5},

      box4:{
        backgroundColor: 'brown', 
        height: 54, 
        flexDirection: 'row', 
        opacity: 0.5,
        position: 'relative', top: 770
        },

      gambar2:{
        width: 390,
        height: 50,
        borderRadius: 500,
        position: 'absolute', top: 10, left: 10},
    })

