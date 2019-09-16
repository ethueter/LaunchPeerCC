import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList } from 'react-native'




const ToDoScreen = ({navigation}) => {
    
    const tasks = navigation.getParam('tasks', [])
    const complete = navigation.getParam('complete')
    return (
        <View>
            <Text>Upcoming Tasks</Text>
            
            <View>
                <FlatList 
                    keyExtractor={item => item.title}
                    data={tasks}
                    renderItem={({item}) => {
                        if (item.completed === false) {
                            return <Button  title={item.title} onPress={() => complete(item)}/>
                        }
                    }}
                />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ToDoScreen;