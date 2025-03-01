import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import Home from "./screens/Home";
//import Details from "./screens/ScoreDetails";
//import MatchDetails from "./screens/MatchDetails";
//import Squad from "./screens/Squad";
//import RankingScreen from "./screens/Ranking/RankingScreen";
import BlogList from "./screens/Blog/BlogList";
import Videos from "./screens/Videos/VideoList/index";
import Statistics from "./screens/Statistics/index";

const Tab = createBottomTabNavigator()

export default function Tabs() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown:false, 
				tabBarActiveTintColor: 'green'
			}}
			options={{
				headerTintColor: 'blue',
				headerStyle: { backgroundColor: 'tomato' },
			}}
		>
			<Tab.Screen 
				name="Home" 
				component={Home} 
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Icon 
							name="home" 
							color={color}
							size={30}
							type="material"
						/>
						),
				}}
			/>
			{/*
			<Tab.Screen 
				name="ScoreDetails" 
				component={Details} 
				options={{
					tabBarLabel: "Details",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="notification" size={24} color={color} />
						),
				}}
			/>
			*/}
			{/*
			<Tab.Screen 
				name="SeriesScreen" 
				component={SeriesScreen}
				options={{
					tabBarLabel: "Series",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="notification" size={24} color={color} />
						),
				}} 
			/>
			
				<Tab.Screen 
				name="Squad" 
				component={Squad}
				options={{
					tabBarLabel: "Squad",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="notification" size={24} color={color} />
						),
				}} 
			/>*/}
			<Tab.Screen 
				name="Videos" 
				component={Videos}
				options={{
					tabBarLabel: "Videos",
					tabBarIcon: ({ color, size }) => (
						<Icon 
							name="ondemand-video" 
							color={color}
							size={30}
							type="material"
						/>                      
					),
				}}  
			/>
			<Tab.Screen 
				name="BlogList" 
				component={BlogList}
				options={{
					tabBarLabel: "BlogList",
					tabBarIcon: ({ color, size }) => (
						<Icon 
							name="auto-stories" 
							color={color}
							size={30}
							type="material"
						/>                      
					),
				}} 
			/>

			<Tab.Screen 
				name="Statistics" 
				component={Statistics}
				options={{
					tabBarLabel: "Statistics",
					tabBarIcon: ({ color, size }) => (
						<Icon 
							name="auto-stories" 
							color={color}
							size={30}
							type="material"
						/>                      
					),
				}} 
			/>	
		</Tab.Navigator>
	)
}