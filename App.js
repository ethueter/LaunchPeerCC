import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import ToDoScreen from './screens/ToDoScreen';
import CompletedTasksScreen from './screens/CompletedTasks';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Upcoming: ToDoScreen,
    Completed: CompletedTasksScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Task List'
    }
  }
);

export default createAppContainer(navigator);