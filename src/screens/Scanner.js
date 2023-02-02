import React, { Component, Fragment, useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Pressable,
  LogBox
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const Scanner = ({ navigation }) => {
  const [value, setValue] = useState("");
  // LogBox.ignoreAllLogs();
  //   onSuccess = e => {
  //     Linking.openURL(e.data).catch(err =>
  //       console.error('An error occured', e.data)
  //     );
  //   };
  const onSuccess = (e) => {
    if(e){
      setValue(e.data);
    }
  }
  return (
    <Fragment>
      <QRCodeScanner
        onRead={(e) => onSuccess(e)}
      // onRead={this.onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      // topContent={
      //   <Text style={styles.centerText}>Scan the QR code.</Text>
      // }
      // bottomContent={
      //   <TouchableOpacity style={styles.buttonTouchable}>
      //     <Text style={styles.buttonText}>OK. Got it!</Text>
      //   </TouchableOpacity>
      // }
      />
        <Text style = {styles.value}>{value}</Text>

    </Fragment>

  );

}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  value :{ 
    fontSize : 20,
    textAlign : 'center',
    backgroundColor : "#0f0"
  }
});

export default Scanner;