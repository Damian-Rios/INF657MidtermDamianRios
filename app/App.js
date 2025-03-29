import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TaskList from "./components/Task/TaskList";
import StackNavigator from './components/Shared/StackNavigator';
//import AddTaskScreen from "./components/Task/AddTaskScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: "bdddfc"}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}