import React, { Fragment, useState } from 'react'
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';
import axios from 'axios';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Medicine = ({ navigation }) => {

    const initialData = {
        Barcode: "",
        MedicineName: "",
        CompanyName: "",
        Category: "",
        DrugType: "",
        TaxCategory: "",
        HSNCode: ""
    }

    const [medicine, setMedicine] = useState(initialData);
    const [state, setState] = useState(0);
    const [codeValue, setCodeValue] = useState("");

    const handleChange = (value, name) => {
        setMedicine({
            ...medicine,
            [name]: value
        })
    }
    const handleSubmit = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: "http://192.168.1.7/Lotus-Medical/public/create-patient-api.php",
                crossDomain: true,
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: { medicine: (medicine) },
                dataType: 'json'
            });
            // if(response){
            //     setMedicine(initialData)
            // }
        } catch (error) {
            console.log("Api Error =", error);
        }
        setMedicine(initialData)
    }
    const onSuccess = (e) => {
        if (e) {
            setCodeValue(e.data);
            setState(0)
        }
    }
    const openScanner = () => {
        setState(1);
    }

    return (
        <Fragment>
            <ImageBackground
                style={styles.background}
                source={require('../images/Medicine.jpg')}
                imageStyle={{ opacity: 0.4 }}
            >
                {
                    state === 0 ?
                        <View>
                             <Text style={styles.text}>BarCode</Text>
                            <View style={styles.Barcode}>
                               
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder='Enter Barcode'
                                    keyboardType='numeric'
                                    onChangeText={(e) => handleChange(e, 'Barcode')}
                                    defaultValue={codeValue}
                                />
                                <Pressable onPress={openScanner} style={styles.icon}>
                                    <Icon name="barcode-scan" size={30} style={styles.icon} />
                                </Pressable>
                            </View>
                            <Text style={styles.text}>Medicine Name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter MedicineName'
                                value={medicine.MedicineName || ""}
                                onChangeText={(e) => handleChange(e, 'MedicineName')}
                            />
                            <Text style={styles.text}>Company Name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter CompanyName'
                                value={medicine.CompanyName || ""}
                                onChangeText={(e) => handleChange(e, 'CompanyName')}
                            />
                            <Text style={styles.text}>Category</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Category'
                                value={medicine.Category || ""}
                                onChangeText={(e) => handleChange(e, 'Category')}
                            />
                            <Text style={styles.text}>Drug Type</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter DrugType'
                                value={medicine.DrugType || ""}
                                onChangeText={(e) => handleChange(e, 'DrugType')}
                            />
                            <Text style={styles.text}>Tax Category</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter TaxCategory'
                                value={medicine.TaxCategory || ""}
                                onChangeText={(e) => handleChange(e, 'TaxCategory')}
                            />
                            <Text style={styles.text}>HSN Code</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter HSN Code'
                                value={medicine.HSNCode || ""}
                                onChangeText={(e) => handleChange(e, 'HSNCode')}
                            />
                            <TouchableOpacity
                                style={styles.submit}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.submitText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <QRCodeScanner
                                onRead={(e) => onSuccess(e)}
                            />
                        </View>
                }
            </ImageBackground>
        </Fragment>
    )
}

styles = StyleSheet.create({
    background: {
        flex: 1,
    },
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
    submitText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    // Icon
    icon: {
        color: '#034',
        paddingRight: 10,
        paddingTop: 3.5,
    },
    // TextInput
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 5,
    },
    //  Barcode TextInput only
    Barcode: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        margin: 5,
    },
    inputStyle: {
        flex: 1,
    },
    // All Text  
    text : {
        color : '#0f0',
        fontWeight : 'bold',
        backgroundColor : "#023055"
    }
})
export default Medicine