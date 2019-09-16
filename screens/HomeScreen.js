import React, {useState, useReducer} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

const reducer = ((state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, { title: action.payload, completed: false }]
        case 'completeTask':
            console.log(action.payload)
            return [...state, {title: action.payload.title, completed: true}]
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
                <Text>Welcome To Tyler's Task App</Text>
            </View>
            <View>
                <View>
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
            <View>
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
    textStyle: {
        fontSize: 25
    }
});

export default HomeScreen;