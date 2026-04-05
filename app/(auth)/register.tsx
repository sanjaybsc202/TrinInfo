import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import { z } from 'zod';
import { AppButton, AppInput, Card, Heading, Page } from '@/components/ui';

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  acceptedTerms: z.literal(true, { errorMap: () => ({ message: 'You must accept terms.' }) }),
});

type FormValues = z.infer<typeof schema>;

export default function RegisterScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { acceptedTerms: false },
  });

  return (
    <Page>
      <Card>
        <Heading>Register</Heading>
        <Controller control={control} name="username" render={({ field: { onChange, value } }) => <AppInput placeholder="Username" value={value} onChangeText={onChange} />} />
        {errors.username && <Text>{errors.username.message}</Text>}
        <Controller control={control} name="email" render={({ field: { onChange, value } }) => <AppInput placeholder="Email" value={value} onChangeText={onChange} />} />
        {errors.email && <Text>{errors.email.message}</Text>}
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => <AppInput placeholder="Password" secureTextEntry value={value} onChangeText={onChange} />} />
        {errors.password && <Text>{errors.password.message}</Text>}
        <Controller control={control} name="acceptedTerms" render={({ field: { onChange, value } }) => <AppButton label={value ? '✓ Terms accepted' : 'Accept terms'} variant="ghost" onPress={() => onChange(!value)} />} />
        {errors.acceptedTerms && <Text>{errors.acceptedTerms.message}</Text>}
        <AppButton label="Create account" onPress={handleSubmit(() => undefined)} />
      </Card>
    </Page>
  );
}
