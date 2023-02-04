import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';

const StyleButton = (props) => {

    const {type, content, onPress} = props;

    const backgroundcolor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textcolor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor:backgroundcolor}]}
                onPress={ ()=> onPress()}
            >
                <Text style={[styles.text, {color: textcolor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton;