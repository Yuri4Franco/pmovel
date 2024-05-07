import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "./Home";
import Plantel from "./Plantel";
import Competicoes from "./Competicoes";
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function TelaTime({ route }) {
    const {id, nome, img} = route.params;

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="hometime"
                component={() => <Home time={nome} img={img} />}
                options={{
                    tabBarLabel: "HomeTime",
                    tabBarIcon: () => (<MaterialIcons name="home" size={24} color="black" />)
                }
                } />
            <Tab.Screen name="plantel"
                component={() => <Plantel id={id} time={nome}/>}
                options={{
                    tabBarLabel: "Plantel",
                    tabBarIcon: () => (<FontAwesome6 name="people-group" size={24} color="black" />)
                }} />
            <Tab.Screen name="competicoes" component={() => <Competicoes time={nome}/>}
            options={{
                tabBarLabel: "Competições",
                tabBarIcon: () => (<FontAwesome6 name="trophy" size={24} color="black" />)
            }} />
        </Tab.Navigator>
    );
}

export default TelaTime;