import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from '../../components/Header';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
        tabBarStyle: {
          backgroundColor: '#2563eb',
          height: 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          paddingTop: 4
        },
        headerShown: true,
        header: () => <Header />,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size = 30 }) => <MaterialIcons size={size} name="house" color={color} />,
        }}
      />
       <Tabs.Screen
        name="health"
        options={{
          title: 'Salud',
          tabBarIcon: ({ color, size = 30 }) => <MaterialIcons size={size} name="health-and-safety" color={color} />,
        }}
      />
      <Tabs.Screen
        name="economy"
        options={{
          title: 'Economía',
          tabBarIcon: ({ color, size = 30 }) => <MaterialIcons size={size} name="attach-money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="polity"
        options={{
          title: 'Política',
          tabBarIcon: ({ color, size = 30 }) => <MaterialIcons size={size} name="gavel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tech"
        options={{
          title: 'Tecnología',
          tabBarIcon: ({ color, size = 30 }) => <MaterialIcons size={size} name="computer" color={color} />,
        }}
      />
    </Tabs>
  );
}
