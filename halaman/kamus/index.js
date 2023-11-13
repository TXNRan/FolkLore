import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function kamus(){
    return (
      <View style={{ backgroundColor: 'wheat',opacity: 0.8, flex: 1 }}>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
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
                position: 'absolute', bottom: 330, left: 200,
              }}>(Wayang Arjuna)</Text>
        <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 300, left: 200,
              }}>blablabalbalabalb</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 270, left: 200,
              }}>balbalablabalbalablbalab</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 240, left: 200,
              }}>balabalbalbalablbalba</Text>
        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 150, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 130, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 110, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 90, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 100, left: 200,
              }}>(Wayang Petruk)</Text>
        <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 160, left: 200,
              }}>blablabalablabalablabalb</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 140, left: 200,
              }}>blabalbalbalbalb</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 190, left: 200,
              }}>blablablablablab</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 280, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 300, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 320, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 340, left: 20,
              }}>blablablablablabbalbalbalablabalbalablabalb</Text>

        <Image source={require('./halaman/aset/2.jpg')} style={styles.gambar3}></Image>
        <Image source={require('./halaman/aset/3.jpg')} style={styles.gambar4}></Image>
        <Image source={require('./halaman/aset/5.jpeg')} style={styles.gambar2}></Image>
        <Text style={{
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 4,
                position: 'absolute', top: 20, left: 110,
              }}>Kamus Wayang</Text>
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
        height: 300,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        position: 'absolute', top: 100, left: 5,
        opacity: 0.5},
    
      box3:{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        position: 'absolute', top: 450, left: 5,
        opacity: 0.5},
      
      box4:{
        backgroundColor: 'brown', 
        height: 54, 
        flexDirection: 'row', 
        opacity: 0.5,
        position: 'relative', top: 770
        },

      gambar2:{
        width: 365,
        height: 50,
        borderRadius: 500,
        position: 'absolute', top: 20, left: 20},
      
      gambar3:{
        width: 150,
        height: 150,
        borderRadius: 10,
        position: 'absolute', top: 115, left: 17},

      gambar4:{
        width: 150,
        height: 150,
        borderRadius: 10,
        position: 'absolute', bottom: 205, left: 17},
    })

