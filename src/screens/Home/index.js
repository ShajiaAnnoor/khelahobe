import * as React from 'react';
import { Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LiveScore from './Home';


const Tab = createMaterialTopTabNavigator();
function MyTabs() { 
    return ( 
        <Tab.Navigator 
            initialRouteName="LiveScore" 
            screenOptions={({ route }) => ({
            headerShown: false, 
            tabBarShowIcon: true, 
            tabBarStyle: 
            { 
                backgroundColor: '#FFFFFF', 
             // borderBottomWidth: 1.5, 
             //borderTopWidth: 6.5, 
                borderColor: '#efc96c', 
            }, 
            tabBarActiveTintColor: '#F57056', 
            tabBarInactiveTintColor: '#A29B92',
                
            tabBarIndicatorStyle: { 
                backgroundColor: '#F57056', 
                borderTopRightRadius: 999, 
                borderTopLeftRadius: 999, 
            },

            tabBarItemStyle: { width: 140}, 
            
            tabBarLabel: ({ focused, color }) => ( 
                <Text 
                    style={
                        [(focused ? {fontWeight: "bold"} : {fontWeight: "normal"}), {color: color}]}
                >{
                    route.name}
                </Text> 
            ), 
            tabBarScrollEnabled: true })} 
        > 
                
            <Tab.Screen 
                name="LiveScore" 
                component={LiveScore} 
                options={{ tabBarLabel: "লাইভ স্কোর" }} 
            />
            <Tab.Screen 
                name="Upcoming" 
                component={LiveScore} 
                options={{ tabBarLabel: "আসন্ন" }} 
            />
            <Tab.Screen 
                name="Result" 
                component={LiveScore} 
                options={{ tabBarLabel: "ফলাফল" }} 
            /> 
        </Tab.Navigator> 
    );
}
export default function App() { return ( <MyTabs /> );}

