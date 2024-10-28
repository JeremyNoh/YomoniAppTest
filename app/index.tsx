import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchScreen } from '@/src/screens/SearchScreen';
import { DetailsScreen } from '@/src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{ title: 'Pokedex YomoniApp Test' }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ title: 'Pokemon Details', headerBackTitleVisible: false }}
                />
            </Stack.Navigator>
        </QueryClientProvider>
    );
}