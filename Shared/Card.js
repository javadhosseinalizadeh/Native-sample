import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import {numberWithCommas} from '../utils/price'
const Card = ({title,price, teacher, image}) => {
    return ( 
        <View style={StyleSheet.card}>
            <Image source={image} style={styles.image} />
            <View style={{padding: 20}}>
                <Text style={styles.title}>عنوان دوره: {title}</Text>
                <View style={styles.courseDetails}>
                <Text style={styles.price}>
                  {`قیمت دوره: ${numberWithCommas(price)} تومان`}
                </Text>               
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.teacher}>مدرس دوره: {teacher}</Text>
                </View>
            </View>
        </View>
     );
}
 
export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        overflow: 'hidden',

    },
    image: {
        width: '100%',
        height: 300,

    },
    courseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userContainer: {
        marginVertical: 10
    },
    title: {
        marginBottom: 7,
        fontFamily: 'yekan',
        fontSize: 20,
        alignSelf: 'center'
    },
    price: {
        fontFamily: 'yekan'
    },
    teacher: {
        fontFamily: 'ih',

    }
});