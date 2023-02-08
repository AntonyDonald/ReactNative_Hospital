import React, { useState, useEffect, Fragment } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

const Home = ({ navigation }) => {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const Loader = () => {
            setTimeout(() => {
                setLoader(true)
            }, 3000)
        }
        Loader();
    }, [])

    const goPatient = () => {
        navigation.navigate("Patient")
    }
    const goMedical = () => {
        navigation.navigate("Medicine")
    }
    const goSales = () => {
        navigation.navigate("Sales")
    }

    return (
        <Fragment>
            {
                loader === false ?
                    <View style={styles.loader}>
                        <Image source={require('../gifs/ecg1.gif')} />
                    </View> :
                    <ImageBackground
                        style={styles.background}
                        source={require('../images/background.jpg')}>
                        <View style={styles.setItem} >
                            <View style={styles.button}>
                                <Button title='Go to Patient' onPress={goPatient} />
                            </View>
                            <View style={styles.button}>
                                <Button title='Go to Medical' onPress={goMedical} />
                            </View>
                            <View style={styles.button}>
                                <Button title='Go to Sales' onPress={goSales} />
                            </View>
                        </View>
                    </ImageBackground>
            }

        </Fragment>

    )
}
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        padding: 20
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
})
export default Home
