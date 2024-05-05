import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React  from "react";

const klik = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={StyleSheet.btn}>
            <text>About</text>
        </TouchableOpacity>
    );
};

export default klik;

const styles = StyleSheet.create({
    btn: {
        margin:10,
        padding:10,
        backgroundColor: 'blue',
        borderRadius:10,
    },
});