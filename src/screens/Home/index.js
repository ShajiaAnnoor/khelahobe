import * as React from 'react';
import { lazy } from 'react';
import { Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LiveScore from './Live';
const FinishedScore = lazy(() => import('./Finished.js'));
const UpcomingScore = lazy(() => import('./Upcoming.js'));

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
				borderColor: '#efc96c', 
			}, 
			tabBarActiveTintColor: 'green', 
			tabBarInactiveTintColor: '#A29B92',
				
			tabBarIndicatorStyle: { 
				backgroundColor: 'green', 
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
				component={UpcomingScore} 
				options={{ tabBarLabel: "আসন্ন" }} 
			/>
			<Tab.Screen 
				name="Result" 
				component={FinishedScore} 
				options={{ tabBarLabel: "ফলাফল" }} 
			/> 
		</Tab.Navigator> 
	);
}
export default function App() { return ( <MyTabs /> );}