import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation()
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const imageUrl1 = 'https://inkbotdesign.com/wp-content/uploads/2023/08/best-tv-show-logos-logo-design-inspiration.jpg';

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <><View style={styles.container}>
            <View style={{
                backgroundColor: 'rgb(80 14 17)', flex: 1,
            }}>
                <Animated.View style={{ opacity: fadeAnim, }}>
                    <Image
                        source={{ uri: imageUrl1 }}
                        style={styles.image} />
                </Animated.View>
                <Text style={styles.text}>Welcome To...</Text>
                <Text style={styles.text2}> ...Your Movie App.</Text>
                <View style={{ top: 450, position: 'absolute', left: responsiveWidth(40) }}>
                    <Text style={styles.text1}>...Find All movies & series.</Text>
                </View>

                <View style={{ top: 290, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{
                        fontSize: 18,
                        position: 'absolute', alignSelf: 'center', color: 'lightgray', top: 120, fontWeight: '600'
                    }}>All of Movies, starting at just $5</Text>
                </View>

                <View style={{ alignContent: 'center', alignItems: 'center', top: responsiveHeight(45) }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TabsNavigaton')}
                        style={styles.loginBtn}>
                        <Text style={{ color: 'white' }}>Get Stated</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 350,
        height: 200,
        top: 50,
        alignSelf: 'center',
        bottom: 7, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    },
    text: {
        fontSize: 30,
        position: 'absolute', marginTop: 300, color: 'white', fontWeight: 'bold', left: 20,
    }, text1: {
        fontSize: 20,
        position: 'absolute', alignSelf: 'center', color: 'white',top:25
    }, text2: {
        fontSize: 20,
        position: 'absolute', alignSelf: 'center', marginTop: responsiveHeight(10),
        color: 'white', top: 330, left: 150
    },
    loginBtn: {
        width: "90%",
        backgroundColor: "rgb(216 0 47)",
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        top: responsiveHeight(13),
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 50,
        },
        shadowOpacity: 0.8,
        shadowRadius: 16.00,
        elevation: 10,
    },
});

export default SplashScreen;
