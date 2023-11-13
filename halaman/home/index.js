import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function home(){
    return (
      <View style={{ backgroundColor: 'wheat',opacity: 0.8, flex: 1 }}>
        <View style={styles.sirkel1}></View>
        <View style={styles.sirkel2}></View>
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
                fontSize: 16,
                color: 'white',
                marginTop: 4,
                position: 'absolute', top: 17, left: 30,
              }}>Cari Barang, Cerita, dan Wisata</Text>
        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 200, left: 200,
              }}>(Wayang Arjuna)</Text>
        <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 160, left: 200,
              }}>Dijual Wayang Kulit (Arjuna)</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 140, left: 200,
              }}>Lokasi - Dinoyo, Kota Malang</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 120, left: 200,
              }}>Rp. 5.000.000</Text>
        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 400, left: 200,
              }}>(Wayang Petruk)</Text>
        <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 360, left: 200,
              }}>Jual Wayang Petruk Asli</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 340, left: 200,
              }}>Lokasi - Pasuruan, Kab. Malang</Text>
        <Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 320, left: 200,
              }}>Rp. 10.000.000</Text>

        <Image source={require('./halaman/aset/1.jpg')} style={styles.gambar1}></Image>
        <Image source={require('./halaman/aset/5.jpeg')} style={styles.gambar2}></Image>
        <Image source={require('./halaman/aset/2.jpg')} style={styles.gambar3}></Image>
        <Image source={require('./halaman/aset/3.jpg')} style={styles.gambar4}></Image>
        
        <Text style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 4,
                position: 'absolute', top: 284, left: 120,
              }}>Sedang Trending!</Text>
        <Text style={{
                fontSize: 24,
                color: 'white',
                marginTop: 4,
                position: 'absolute', top: 110, left: 30,
              }}>Apa Yang Baru?</Text>
          <Text style={{
                fontSize: 24,
                color: 'white',
                marginTop: 4,
                position: 'absolute', top: 140, left: 30,
              }}>Ada Pertunjukan!</Text>
          <Text style={{
                fontSize: 16,
                color: 'white',
                marginTop: 4,
                position: 'absolute', top: 170, left: 30,
              }}>Ayo Hadiri di Sekitarmu!</Text>
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
      sirkel1:{
       width: 50,
       height: 50,
       backgroundColor: 'red',
       borderWidth: 3,
       borderRadius: 50,
       position: 'absolute', top: 7, right: 7},
    
      sirkel2:{
       width: 340,
       height: 40,
       backgroundColor: 'gray',
       borderWidth: 3,
       borderRadius: 50,
       position: 'absolute', top: 13, left: 7},

      box2:{
        width: 400,
        height: 175,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        position: 'absolute', bottom: 280, left: 5,
        opacity: 0.5},
    
      box3:{
        width: 400,
        height: 175,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        position: 'absolute', bottom: 80, left: 5,
        opacity: 0.5},
      
      box4:{
        backgroundColor: 'brown', 
        height: 54, 
        flexDirection: 'row', 
        opacity: 0.5,
        position: 'relative', top: 770
        },
  
      gambar1:{
        width: 400,
        height: 175,
        borderRadius: 20,
        position: 'absolute', top: 80, left: 5},

      gambar2:{
        width: 365,
        height: 50,
        borderRadius: 500,
        position: 'absolute', top: 280, left: 20},
      
      gambar3:{
        width: 150,
        height: 150,
        borderRadius: 10,
        position: 'absolute', bottom: 292, left: 17},

      gambar4:{
        width: 150,
        height: 150,
        borderRadius: 10,
        position: 'absolute', bottom: 92, left: 17},
    })

