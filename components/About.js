import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function About() {
    return (
        <View style={
            style.view
        }>
            <Text style={
                style.title
            }>A propos de moi</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, obcaecati. Ipsum dolor reiciendis mollitia. Adipisci, laboriosam ratione consequatur laudantium enim eveniet assumenda est, odio fugit id ut voluptatibus architecto mollitia.                                                         
            </Text>
        </View>

    );
}

const style = StyleSheet.create({
    view: {
        margin: 20

    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})
