import React, { Fragment, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Sales = () => {
    const InitialData = {
        ItemName: "",
        Rate: "",
        Quantity: "",
        FreeQuantity: "",
        Discount: "",
        Total: ""

    }
    const [salesItems, setSalesItems] = useState(InitialData);
    const [newItemId, setNewItemId] = useState(0)

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
                data: { salesItems: (salesItems) },
                dataType: 'json'
            });
            // if(response){
            //     setSalesItems(InitialData)
            // }
        }
        catch (err) {
            console.log("API Error = ", err)
        }
        setSalesItems(InitialData)
        setNewItemId(0)
        console.log(salesItems)
    }

    const newItem = () => {
        setNewItemId(1);
    }

    const handleChange = (value , name) => {
        setSalesItems({
            ...salesItems , 
            [name] : value
        })
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../images/sales.jpg')}
            imageStyle={{ opacity: 0.5 }}
        >
            {
                newItemId === 1 ?
                    <View >
                        <View>
                            <Text style={styles.text}>Item Name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter ItemName'
                                value={salesItems.ItemName}
                                onChangeText={(e) => handleChange(e, "ItemName")}
                            />
                            <Text style={styles.text}>Rate</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Rate'
                                value={salesItems.Rate}
                                onChangeText={(e) => handleChange(e, "Rate")}
                            />
                            <Text style={styles.text}>Quantity</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Quantity'
                                value={salesItems.Quantity}
                                onChangeText={(e) => handleChange(e, "Quantity")}
                            />
                            <Text style={styles.text}>Free Quantity</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter FreeQuantity'
                                value={salesItems.FreeQuantity}
                                onChangeText={(e) => handleChange(e, "FreeQuantity")}
                            />
                            <Text style={styles.text}>Discount</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Discount'
                                value={salesItems.Discount}
                                onChangeText={(e) => handleChange(e, "Discount")}
                            />
                            <Text style={styles.text}>Total</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Total'
                                value={salesItems.Total}
                                onChangeText={(e) => handleChange(e, "Total")}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.submit}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.SubmitText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <Text style={styles.heading}>Sales Items</Text>
                        <TouchableOpacity
                            style={styles.newItem}
                            onPress={newItem}
                        >
                            <Text style={styles.newItemText}>NewItem <Icon name="plus" size={15} /></Text>

                        </TouchableOpacity>
                        <Text style={styles.noteText}>
                            <Text style={{ fontWeight: "bold" , fontStyle : 'italic' }}>Note :-   </Text>
                            If you want to add new Item please Click above Button
                        </Text>
                    </View>
            }

        </ImageBackground>
    )
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
    text: {
        color: '#0f0',
        fontWeight: 'bold',
        backgroundColor: "#023055"
    },
    // NewItem button
    newItem: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 300,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#0f0ff0',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
    },
    newItemText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20
    },
    // heading
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: "#0f4677"
    },
    noteText: {
        fontSize: 20,
        marginTop: 300,
        color: "red",
        fontWeight: '500'
    }
})

export default Sales
