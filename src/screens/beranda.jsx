import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import klik from "../components/klik";

const beranda = ({navigation}) => {
    return (
        <view>
            <Text>Beranda</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('About')}
                style={StyleSheet.btn}>
            </TouchableOpacity>
            <klik onPress={() => navigation.navigate('About')}/>
            <klik onPress={() => navigation.navigate('Dompet')}/>
        </view>
    );
};

export default beranda;

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
});