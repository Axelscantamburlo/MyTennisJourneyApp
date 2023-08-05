import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; // Ajout de l'import pour la nouvelle tabBar
import CompetitionScreen from '../screens/bodyApp/Competition/CompetitionScreen'
import NutritionScreen from '../screens/bodyApp/Nutrition/NutritionScreen'
import ExerciceScreen from '../screens/bodyApp/Exercice/ExerciceScreen'
import HomePageScreen from '../screens/bodyApp/Home/HomePageScreen'
import TodayTrainingsScreen from '../screens/bodyApp/Training/TodayTrainingsScreen';
import ScheduleTrainingsScreen from '../screens/bodyApp/Training/ScheduleTrainingsScreen';
import CompletedTrainingsScreen from '../screens/bodyApp/Training/CompletedTrainingsScreen';

import { View, Text, StyleSheet } from 'react-native';

// TOPTAB
const TopTab = createMaterialTopTabNavigator();


function TrainingTopBar() {
    const TopTabArr = [
        { name: 'TodayTrainings', label: 'Aujourd\'hui', component: TodayTrainingsScreen },
        { name: 'ScheduleTrainings', label: 'Emploi du temps', component: ScheduleTrainingsScreen },
        { name: 'CompletedTrainings', label: 'Terminés', component: CompletedTrainingsScreen }
    ]
    return (
           <View style={styles.topTabContainer}>
            <Text style={styles.title}>Entrainements</Text>
             <TopTab.Navigator
            initialRouteName='TodayTrainings'
            screenOptions={{
                tabBarLabelStyle: {
                    width: '100%',
                    height: '100%',
                    margin: 0,
                },
                tabBarStyle: {
                    marginTop: 65,
                    height: 35,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: "transparent"
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#414BB2',
                    height: 1,
                },

                tabBarActiveTintColor: '#414BB2',
                tabBarInactiveTintColor: '#1A1A1A',
            
            }}
        >
                {TopTabArr.map((item, index) => {
                    return (
                            <Tab.Screen key={index} name={item.name} component={item.component} options={{
                            title: item.label,
                            swipeEnabled: false,
                        }} />
                    )
                })}
        </TopTab.Navigator>
           </View>
    );
}

const styles = StyleSheet.create({
    topTabContainer: {
        flex: 1,
    },
    title: {
        fontSize: 27,
        textAlign: 'center',
        transform: [{translateY: 50}],
        letterSpacing: 0.8
    }
})


// BOTTOM TAB
const Tab = createBottomTabNavigator();

const TabArr = [
    { name: 'HomePage', activeIcon: 'home', inActiveIcon: 'home-outline', component: HomePageScreen },
    { name: 'Training', activeIcon: 'tennis', inActiveIcon: 'tennis', component: TrainingTopBar },
    { name: 'Competition', activeIcon: 'trophy', inActiveIcon: 'trophy-outline', component: CompetitionScreen },
    { name: 'Nutrition', activeIcon: 'food-apple', inActiveIcon: 'food-apple-outline', component: NutritionScreen },
    { name: 'Exercice', activeIcon: 'clipboard-text', inActiveIcon: 'clipboard-text-outline', component: ExerciceScreen },

]

export default function NavBar() {

    return (
        <Tab.Navigator initialRouteName='HomePage'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingHorizontal: 5,
                    backgroundColor: '#FAC710',
                    height: 90,
                }
            }}

        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.component} options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name={focused ? item.activeIcon : item.inActiveIcon} size={32} color='white' />
                        )
                    }} />
                )
            })}

        </Tab.Navigator>
    );
}
