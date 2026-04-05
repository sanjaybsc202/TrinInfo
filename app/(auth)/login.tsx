import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { z } from 'zod';
import { AppButton, AppInput, Card, Heading, Page } from '@/components/ui';
import { useAuthStore } from '@/store/auth-store';

const schema = z.object({
  identity: z.string().min(3, 'Enter email or username'),
  password: z.string().min(6, 'Password must be at least 6 chars'),
});

type FormValues = z.infer<typeof schema>;

export default function LoginScreen() {
  const loginAsRole = useAuthStore((s) => s.loginAsRole);
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <Page>
      <Card>
        <Heading>Login</Heading>
        <Controller control={control} name="identity" render={({ field: { onChange, value } }) => <AppInput placeholder="Email or username" value={value} onChangeText={onChange} />} />
        {errors.identity && <Text>{errors.identity.message}</Text>}
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => <AppInput placeholder="Password" secureTextEntry value={value} onChangeText={onChange} />} />
        {errors.password && <Text>{errors.password.message}</Text>}
        <AppButton label="Login as User (Demo)" onPress={handleSubmit(() => loginAsRole('user'))} />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <AppButton label="Login as Moderator" variant="ghost" onPress={() => loginAsRole('moderator')} />
          <AppButton label="Login as Admin" variant="ghost" onPress={() => loginAsRole('admin')} />
        </View>
        <Link href="/(auth)/register"><Text>Create account</Text></Link>
      </Card>
    </Page>
  );
}
