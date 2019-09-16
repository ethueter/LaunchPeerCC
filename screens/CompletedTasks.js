import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'


const CompletedTasksScreen = ({ navigation }) => {

    const tasks = navigation.getParam('tasks', [])
    return (
        <View>
            <Text>Completed Tasks</Text>

            <View>
                <FlatList
                    keyExtractor={item => item.title}
                    data={tasks}
                    renderItem={({ item }) => {
                        if (item.completed) {
                            return <Text>{item.title}</Text>
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

export default CompletedTasksScreen;