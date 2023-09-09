import React from 'react'  
import {View, StyleSheet, FlatList } from 'react-native'
import Screen from '../../Shared/Screen';
import Card from '../../Shared/Card';
const CoursesScreen = () => {

    const courses = [
        {
            id:1,
            title: 'تست',
            price: '3000000',
            teacher: 'تست',
            image: require('../assets/courses/Electron.jpg')
        },
        {
            id:2,
            title: 'تست',
            price: '3000000',
            teacher: 'تست',
            image: require('../assets/courses/ReactJs.jpg')
        },
        {
            id:3,
            title: 'تست',
            price: '3000000',
            teacher: 'تست',
            image: require('../assets/courses/ReactNative.jpg')
        },
    ]
    return ( 
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(course)=> course.id.toString()}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        teacher={item.teacher}
                        image={item.image}
                     />
                )}
            />
        </Screen>
     );
}
 
export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f4f4'
    }
});