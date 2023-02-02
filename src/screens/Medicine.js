import React, { Fragment, useState } from 'react'
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import axios from 'axios';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
            console.log("API Response = ", response.data)
        } catch (error) {
            console.log("Api Error =", error);
        }
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

    const goPatient = () => {
        navigation.navigate("Patient");
    }

    return (
        <Fragment>
            {
                state === 0 ?
                    <View>
                        <View>
                            <TextInput
                                placeholder='Enter Barcode'
                                keyboardType='numeric'
                                onChangeText={(e) => handleChange(e, 'Barcode')}
                                defaultValue={codeValue}
                            />
                            <Pressable onPress={openScanner}>
                                <Icon name="barcode-scan" size={30} />
                            </Pressable>
                        </View>

                        <TextInput
                            placeholder='Enter MedicineName'
                            value={medicine.MedicineName || ""}
                            onChangeText={(e) => handleChange(e, 'MedicineName')}
                        />
                        <TextInput
                            placeholder='Enter CompanyName'
                            value={medicine.CompanyName || ""}
                            onChangeText={(e) => handleChange(e, 'CompanyName')}
                        />
                        <TextInput
                            placeholder='Enter Category'
                            value={medicine.Category || ""}
                            onChangeText={(e) => handleChange(e, 'Category')}
                        />
                        <TextInput
                            placeholder='Enter DrugType'
                            value={medicine.DrugType || ""}
                            onChangeText={(e) => handleChange(e, 'DrugType')}
                        />
                        <TextInput
                            placeholder='Enter TaxCategory'
                            value={medicine.TaxCategory || ""}
                            onChangeText={(e) => handleChange(e, 'TaxCategory')}
                        />
                        <TextInput
                            placeholder='Enter HSNCode'
                            value={medicine.HSNCode || ""}
                            onChangeText={(e) => handleChange(e, 'HSNCode')}
                        />
                        <TouchableOpacity
                            style={styles.text}
                            onPress={handleSubmit}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                        <Button title='Go to Patient' onPress={goPatient}></Button>
                    </View>
                    :
                    <View>
                        <QRCodeScanner
                            onRead={(e) => onSuccess(e)}
                        />
                    </View>
            }


        </Fragment>
    )
}

styles = StyleSheet.create({
    text: {
        backgroundColor: "#ff0"
    },
    value: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "#0f0"
    }
})
export default Medicine