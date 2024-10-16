import * as React from 'react';
import { lazy } from 'react';
import { Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//import LiveScore from './Live';
//const FinishedScore = lazy(() => import('./Finished.js'));
//const UpcomingScore = lazy(() => import('./Upcoming.js'));
import ScoreCard from '../Scorecard/ScorecardScreen.js';
import Statistics from '../Statistics/index.js';
import Commentary from '../Commentary/index.js';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({route}) { 

    const {slug} = route.params;

	return ( 
		<Tab.Navigator 
			initialRouteName="ScoreCard" 
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
				name="ScoreCard" 
                children={()=><ScoreCard slug={slug}/>}
//				component={ScoreCard} 
				options={{ tabBarLabel: "স্কোরকার্ড" }} 
			/>
			<Tab.Screen 
				name="Statistics" 
                children={()=><Statistics slug={slug}/>}
                
//				component={Statistics} 
				options={{ tabBarLabel: "পরিসংখ্যান" }} 
			/>
			<Tab.Screen 
				name="Commentary" 
				component={Commentary} 
				options={{ tabBarLabel: "ধারাভাষ্য " }} 
			/>
			
		</Tab.Navigator> 
	);
}
//export default function App() { return ( <MyTabs /> );}