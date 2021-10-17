import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import screen_1 from './Screen/screen_1';
import screen_2 from './Screen/screen_2';

import { screen_2_name, screen_1_name } from './utils/Tabbarname';
import LoadingScreen from './utils/Loading';


const Tab = createMaterialTopTabNavigator()

const TabScreen = () => {
    return (
        <Tab.Navigator
        
            tabBarOptions={{
                labelStyle: {
                    borderRadius: 20,
                    marginLeft: 5,
                    marginRight: 5,
                    

                },
                style: {
                    backgroundColor: "white"
                },
            }}
        >
            <Tab.Screen
                name={'screen1'}
                component={screen_1}
                options={{
                    title: 'flowers'
                  
                }}
            />
            <Tab.Screen
                name={'screen2'}
                component={screen_2}
                options={{
                    title: 'cat',
                    
                }}
            />
        </Tab.Navigator>

    )
}

export default App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <TabScreen />
            </SafeAreaProvider>
        </NavigationContainer>

    )
}