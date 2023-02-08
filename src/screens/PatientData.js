import React, { useEffect, useState } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';
import axios from 'axios';

const PatientData = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate('Medicine')
    }
    const onPressHandler1 = () => {
        navigation.navigate('Sales')
    }
    // const onPressHandler1 = () => {
    //     navigation.navigate('Scanner')
    // }

    const intialUserData = {
        name: "",
        genderId: "",
        age: "",
        phone: "",
        address: "",
        pos_id_no: "0"
    }

    const [patientData, setPatientData] = useState(intialUserData);

    const handleChange = (value, name) => {

        setPatientData({
            ...patientData,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: "http://192.168.1.7/Lotus-Medical/public/create-patient-api.php",
                crossDomain: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: { patientData: (patientData) },
                dataType: 'json'
            });
            // if(response){
            //     setPatientData(intialUserData)
            // }
        }
        catch (err) {
            console.log("API Error = ", err)
        }
        setPatientData(intialUserData)
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../images/Patient.jpg')}
            imageStyle={{ opacity: 0.4 }}
        >
            <View>
                <Text style={styles.text}>Patient Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Name'
                    value={patientData.name || ""}
                    onChangeText={(e) => handleChange(e, "name")}
                />
                <Text style={styles.text}>Gender</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter gender'
                    value={patientData.genderId || ""}
                    onChangeText={(e) => handleChange(e, "genderId")}
                />
                <Text style={styles.text}>Age</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='Enter age'
                    value={patientData.age || ""}
                    onChangeText={(e) => handleChange(e, "age")}
                />
                <Text style={styles.text}>Phone</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter phone'
                    value={patientData.phone || ""}
                    keyboardType="numeric"
                    onChangeText={(e) => handleChange(e, "phone")}
                />
                <Text style={styles.text}>Address</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter address'
                    value={patientData.address || ""}
                    onChangeText={(e) => handleChange(e, "address")}
                />
            </View>
            <TouchableOpacity
                style={styles.submit}
                onPress={handleSubmit}
            >
                <Text style={styles.SubmitText}>Submit</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // submit button
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
    },
    SubmitText: {
        color: '#fff',
        textAlign: 'center',
    },
    // background image
    background: {
        flex: 1,
    },
    // All textInput
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 5,
    },
    // All Text  
    text : {
        color : '#0f0',
        fontWeight : 'bold',
        backgroundColor : "#023055"
    }
});

export default PatientData