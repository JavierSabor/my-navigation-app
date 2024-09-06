import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >

      <Tabs.Screen
        name="contador"
        options={{
          title: 'Contador',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'calculator' : 'calculator'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'home' : 'home'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarjetas"
        options={{
          title: 'Tarjetas',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'credit-card' : 'credit-card'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
