import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { palette } from '@/theme/tokens';

const queryClient = new QueryClient();

export default function RootLayout() {
  const scheme = useColorScheme() ?? 'light';
  const colors = scheme === 'dark' ? palette.dark : palette.light;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
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
