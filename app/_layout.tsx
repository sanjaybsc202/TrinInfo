import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: 'Forum' }} />
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="category/[id]" options={{ title: 'Category Threads' }} />
        <Stack.Screen name="thread/[id]" options={{ title: 'Thread Detail' }} />
        <Stack.Screen name="forbidden" options={{ title: 'Forbidden' }} />
      </Stack>
    </QueryClientProvider>
  );
}
