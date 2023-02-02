import React, { useEffect, useState } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
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
    console.log(patientData);

    const handleSubmit = async () => {
        console.log("patientData = ", patientData);
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
            console.log("API Response = ", response.data)
        }
        catch (err) {
            console.log("API ERror = ", err)
        }
    }

    return (
        <View>
            <TextInput
                placeholder='Enter Name'
                value={patientData.name || ""}
                onChangeText={(e) => handleChange(e, "name")}

            />
            <TextInput
                placeholder='Enter gender'
                value={patientData.genderId || ""}
                onChangeText={(e) => handleChange(e, "genderId")}
            />
            <TextInput
                placeholder='Enter age'
                value={patientData.age || ""}
                onChangeText={(e) => handleChange(e, "age")}
            />
            <TextInput
                placeholder='Enter phone'
                value={patientData.phone || ""}
                keyboardType="numeric"
                onChangeText={(e) => handleChange(e, "phone")}
            />
            <TextInput
                placeholder='Enter address'
                value={patientData.address || ""}
                onChangeText={(e) => handleChange(e, "address")}
            />
            <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.button}
            >
                <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
            <Button title='Go To Medicine' onPress={onPressHandler}></Button>
            <Button title='Go To Sales' onPress={onPressHandler1}></Button>
            {/* <Button title='Go To Scanner' onPress={onPressHandler1}></Button> */}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
    }
});

export default PatientData