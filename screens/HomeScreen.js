import React, {useState, useReducer} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

const reducer = ((state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, { title: action.payload, completed: false }]
        case 'completeTask':
            console.log(action.payload)
            return state.map(task => task.title === action.payload.title
                ? { ...task, completed: true }
                : task
            ) 
        default:
            return state;
    }
})

const completed = () => {
    dispatch
}

const HomeScreen = ({navigation}) => {
    const [value, onChangeText] = useState('')
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <View>
            <View>
                <Text style={styles.titleStyle}>Welcome To Tyler's Task App</Text>
            </View>
            <View>
                <View style={styles.inputStyle}>
                    <TextInput
                        placeholder="Add New Task"
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <Button
                        title="Submit"
                        onPress={() => {
                            dispatch({ type: 'addTask', payload: value })
                            onChangeText('')
                        }}
                    />
                </View>
            </View>
            <View style={styles.navStyle}>
                <Button 
                    title="Upcoming Tasks"
                    onPress={() => navigation.navigate('Upcoming', {tasks: state, complete: (item) => dispatch({type: 'completeTask', payload: item})})}
                />
                <Button
                    title="Completed Tasks"
                    onPress={() => navigation.navigate('Completed', {tasks: state})}
                />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 20
    },
    navStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default HomeScreen;